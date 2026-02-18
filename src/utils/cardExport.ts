import type { ProteinInfo, CardAspectRatio, CardExportOptions } from '../types'
import { CARD_DIMENSIONS } from '../types'

const INFO_HEIGHT_RATIO: Record<CardAspectRatio, number> = {
  square: 0.28,
  widescreen: 0.34,
  portrait: 0.24,
}

const THEME_STYLES = {
  dark: {
    bg: '#0d0d23',
    accentFrom: '#22d3ee',
    accentTo: '#3b82f6',
    overlayTo: 'rgba(13,13,35,0.95)',
    textMain: '#ffffff',
    textMeta: 'rgba(255,255,255,0.6)',
    textSoft: 'rgba(255,255,255,0.4)',
    textSubtle: 'rgba(255,255,255,0.32)',
    border: 'rgba(34,211,238,0.18)',
    badgeBg: 'rgba(34,211,238,0.12)',
    badgeBorder: 'rgba(34,211,238,0.35)',
  },
  light: {
    bg: '#f8fbff',
    accentFrom: '#0891b2',
    accentTo: '#2563eb',
    overlayTo: 'rgba(248,251,255,0.9)',
    textMain: '#0f172a',
    textMeta: 'rgba(15,23,42,0.72)',
    textSoft: 'rgba(15,23,42,0.58)',
    textSubtle: 'rgba(15,23,42,0.45)',
    border: 'rgba(37,99,235,0.2)',
    badgeBg: 'rgba(8,145,178,0.1)',
    badgeBorder: 'rgba(8,145,178,0.35)',
  },
} as const

/**
 * Compose the final card image from:
 *  - a 3D viewer screenshot (data-URL from Mol*)
 *  - protein metadata
 *
 * Returns a data-URL PNG ready for download.
 */
export async function buildCard(
  screenshotDataUrl: string,
  proteinInfo: ProteinInfo,
  options: CardExportOptions,
): Promise<string> {
  const { aspectRatio, resolution, theme, includeDetails } = options
  const { width, height } = CARD_DIMENSIONS[aspectRatio]
  const scale = resolution === 'hd' ? 2 : 1
  const outW = width * scale
  const outH = height * scale
  const style = THEME_STYLES[theme]

  const canvas = document.createElement('canvas')
  canvas.width = outW
  canvas.height = outH
  const ctx = canvas.getContext('2d')!
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'

  // ── Background ──────────────────────────────────────────────────────────────
  ctx.fillStyle = style.bg
  ctx.fillRect(0, 0, outW, outH)

  // ── 3D viewer image (top portion) ───────────────────────────────────────────
  const infoRatio = INFO_HEIGHT_RATIO[aspectRatio]
  const viewH = Math.round(outH * (1 - infoRatio))
  await drawImageCover(ctx, screenshotDataUrl, 0, 0, outW, viewH)

  // Subtle gradient overlay at the bottom of the 3D image to blend into info bar
  const grad = ctx.createLinearGradient(0, viewH - outH * 0.08, 0, viewH)
  grad.addColorStop(0, 'rgba(0,0,0,0)')
  grad.addColorStop(1, style.overlayTo)
  ctx.fillStyle = grad
  ctx.fillRect(0, viewH - outH * 0.08, outW, outH * 0.08)

  // ── Info bar background ──────────────────────────────────────────────────────
  const infoY = viewH
  const infoH = outH - viewH
  ctx.fillStyle = style.bg
  ctx.fillRect(0, infoY, outW, infoH)

  // Gradient border line at top of info bar
  const borderGrad = ctx.createLinearGradient(0, 0, outW, 0)
  borderGrad.addColorStop(0, style.accentFrom)
  borderGrad.addColorStop(1, style.accentTo)
  ctx.fillStyle = borderGrad
  ctx.fillRect(0, infoY, outW, Math.max(2, scale))

  // ── Text layout ─────────────────────────────────────────────────────────────
  const pad = outW * 0.04
  const textTop = infoY + infoH * 0.15

  // Protein name (large)
  const nameFontSize = Math.round(Math.min(outW * 0.038, infoH * 0.24))
  ctx.font = `600 ${nameFontSize}px Inter, system-ui, sans-serif`
  ctx.fillStyle = style.textMain
  const maxNameWidth = outW - pad * 2
  ctx.fillText(truncateText(ctx, proteinInfo.name, maxNameWidth), pad, textTop)

  // Organism & method row
  const metaFontSize = Math.round(Math.min(outW * 0.022, infoH * 0.14))
  ctx.font = `400 ${metaFontSize}px Inter, system-ui, sans-serif`
  ctx.fillStyle = style.textMeta

  let metaLine = proteinInfo.organism
  if (includeDetails && proteinInfo.method) {
    metaLine += `  ·  ${proteinInfo.method}`
    if (proteinInfo.resolution) metaLine += ` ${proteinInfo.resolution}`
  } else if (includeDetails && proteinInfo.source === 'alphafold') {
    metaLine += '  ·  AlphaFold Predicted'
  }
  const metaY = textTop + nameFontSize * 1.4
  ctx.fillText(truncateText(ctx, metaLine, maxNameWidth), pad, metaY)

  // Short description
  const descFontSize = Math.round(Math.min(outW * 0.019, infoH * 0.11))
  const brandFontSize = Math.round(Math.min(outW * 0.024, infoH * 0.16))
  const brandY = infoY + infoH - infoH * 0.23
  const descY = metaY + metaFontSize * 1.5
  const hasDescSpace = descY + descFontSize * 1.2 < brandY - infoH * 0.08
  if (includeDetails && proteinInfo.description && hasDescSpace) {
    ctx.font = `300 ${descFontSize}px Inter, system-ui, sans-serif`
    ctx.fillStyle = style.textSoft
    const descMaxW = outW * (aspectRatio === 'widescreen' ? 0.52 : 0.62)
    ctx.fillText(
      truncateText(ctx, proteinInfo.description, descMaxW),
      pad,
      descY,
    )
  }

  // ── ID badge ────────────────────────────────────────────────────────────────
  const badgeFontSize = Math.round(Math.min(outW * 0.02, infoH * 0.13))
  ctx.font = `500 ${badgeFontSize}px "JetBrains Mono", monospace`
  const badgeLabel = proteinInfo.source === 'pdb'
    ? `PDB: ${proteinInfo.id}`
    : `UniProt: ${proteinInfo.id}`
  const badgeMetrics = ctx.measureText(badgeLabel)
  const badgeW = badgeMetrics.width + badgeFontSize * 1.4
  const badgeH = badgeFontSize * 1.8
  const badgeX = outW - pad - badgeW
  const badgeY = textTop - badgeFontSize * 0.3

  // badge background
  ctx.fillStyle = style.badgeBg
  ctx.strokeStyle = style.badgeBorder
  ctx.lineWidth = Math.max(1, scale)
  roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 6 * scale)
  ctx.fill()
  ctx.stroke()

  ctx.fillStyle = style.accentFrom
  ctx.fillText(badgeLabel, badgeX + badgeFontSize * 0.7, badgeY + badgeFontSize * 1.25)

  // ── Liang Lab branding (bottom left) ────────────────────────────────────────
  ctx.font = `600 ${brandFontSize}px Inter, system-ui, sans-serif`
  ctx.fillStyle = style.textMain
  ctx.fillText('Liang Lab', pad, brandY)

  const subFontSize = Math.round(Math.min(outW * 0.016, infoH * 0.1))
  const subY = brandY + brandFontSize * 1.25
  ctx.font = `400 ${subFontSize}px Inter, system-ui, sans-serif`
  ctx.fillStyle = style.textSoft
  ctx.fillText('School of Biological Sciences, NTU', pad, subY)

  // ── Date (bottom right) ─────────────────────────────────────────────────────
  if (includeDetails) {
    ctx.font = `400 ${subFontSize}px Inter, system-ui, sans-serif`
    ctx.fillStyle = style.textSubtle
    const dateStr = new Date().toLocaleDateString('en-GB', {
      year: 'numeric', month: 'short', day: 'numeric',
    })
    const dateW = ctx.measureText(dateStr).width
    ctx.fillText(dateStr, outW - pad - dateW, subY)
  }

  // ── Card border ──────────────────────────────────────────────────────────────
  ctx.strokeStyle = style.border
  ctx.lineWidth = Math.max(2, scale * 2)
  ctx.strokeRect(scale, scale, outW - scale * 2, outH - scale * 2)

  return canvas.toDataURL('image/png')
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function drawImageCover(
  ctx: CanvasRenderingContext2D,
  src: string,
  x: number, y: number, w: number, h: number,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const scale = Math.max(w / img.width, h / img.height)
      const srcW = w / scale
      const srcH = h / scale
      const srcX = (img.width - srcW) / 2
      const srcY = (img.height - srcH) / 2
      ctx.drawImage(img, srcX, srcY, srcW, srcH, x, y, w, h)
      resolve()
    }
    img.onerror = reject
    img.src = src
  })
}

function truncateText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string {
  if (ctx.measureText(text).width <= maxWidth) return text
  let truncated = text
  while (ctx.measureText(truncated + '…').width > maxWidth && truncated.length > 0) {
    truncated = truncated.slice(0, -1)
  }
  return truncated + '…'
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number,
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}
