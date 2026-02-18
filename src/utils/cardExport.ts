import type { ProteinInfo, CardAspectRatio } from '../types'
import { CARD_DIMENSIONS } from '../types'

const BG_COLOR = '#0d0d23'
const ACCENT_FROM = '#22d3ee'
const ACCENT_TO = '#3b82f6'
const INFO_HEIGHT_RATIO: Record<CardAspectRatio, number> = {
  square: 0.28,
  widescreen: 0.34,
  portrait: 0.24,
}

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
  aspectRatio: CardAspectRatio,
): Promise<string> {
  const { width, height } = CARD_DIMENSIONS[aspectRatio]

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'

  // ── Background ──────────────────────────────────────────────────────────────
  ctx.fillStyle = BG_COLOR
  ctx.fillRect(0, 0, width, height)

  // ── 3D viewer image (top portion) ───────────────────────────────────────────
  const infoRatio = INFO_HEIGHT_RATIO[aspectRatio]
  const viewH = Math.round(height * (1 - infoRatio))
  await drawImageCover(ctx, screenshotDataUrl, 0, 0, width, viewH)

  // Subtle gradient overlay at the bottom of the 3D image to blend into info bar
  const grad = ctx.createLinearGradient(0, viewH - height * 0.08, 0, viewH)
  grad.addColorStop(0, 'rgba(13,13,35,0)')
  grad.addColorStop(1, 'rgba(13,13,35,0.95)')
  ctx.fillStyle = grad
  ctx.fillRect(0, viewH - height * 0.08, width, height * 0.08)

  // ── Info bar background ──────────────────────────────────────────────────────
  const infoY = viewH
  const infoH = height - viewH
  ctx.fillStyle = BG_COLOR
  ctx.fillRect(0, infoY, width, infoH)

  // Gradient border line at top of info bar
  const borderGrad = ctx.createLinearGradient(0, 0, width, 0)
  borderGrad.addColorStop(0, ACCENT_FROM)
  borderGrad.addColorStop(1, ACCENT_TO)
  ctx.fillStyle = borderGrad
  ctx.fillRect(0, infoY, width, 2)

  // ── Text layout ─────────────────────────────────────────────────────────────
  const pad = width * 0.04
  const textTop = infoY + infoH * 0.15

  // Protein name (large)
  const nameFontSize = Math.round(Math.min(width * 0.038, infoH * 0.24))
  ctx.font = `600 ${nameFontSize}px Inter, system-ui, sans-serif`
  ctx.fillStyle = '#ffffff'
  const maxNameWidth = width - pad * 2
  ctx.fillText(truncateText(ctx, proteinInfo.name, maxNameWidth), pad, textTop)

  // Organism & method row
  const metaFontSize = Math.round(Math.min(width * 0.022, infoH * 0.14))
  ctx.font = `400 ${metaFontSize}px Inter, system-ui, sans-serif`
  ctx.fillStyle = 'rgba(255,255,255,0.55)'

  let metaLine = proteinInfo.organism
  if (proteinInfo.method) {
    metaLine += `  ·  ${proteinInfo.method}`
    if (proteinInfo.resolution) metaLine += ` ${proteinInfo.resolution}`
  } else if (proteinInfo.source === 'alphafold') {
    metaLine += '  ·  AlphaFold Predicted'
  }
  const metaY = textTop + nameFontSize * 1.4
  ctx.fillText(truncateText(ctx, metaLine, maxNameWidth), pad, metaY)

  // Short description
  const descFontSize = Math.round(Math.min(width * 0.019, infoH * 0.11))
  const brandFontSize = Math.round(Math.min(width * 0.024, infoH * 0.16))
  const brandY = infoY + infoH - infoH * 0.23
  const descY = metaY + metaFontSize * 1.5
  const hasDescSpace = descY + descFontSize * 1.2 < brandY - infoH * 0.08
  if (proteinInfo.description && hasDescSpace) {
    ctx.font = `300 ${descFontSize}px Inter, system-ui, sans-serif`
    ctx.fillStyle = 'rgba(255,255,255,0.38)'
    const descMaxW = width * (aspectRatio === 'widescreen' ? 0.52 : 0.62)
    ctx.fillText(
      truncateText(ctx, proteinInfo.description, descMaxW),
      pad,
      descY,
    )
  }

  // ── ID badge ────────────────────────────────────────────────────────────────
  const badgeFontSize = Math.round(Math.min(width * 0.02, infoH * 0.13))
  ctx.font = `500 ${badgeFontSize}px "JetBrains Mono", monospace`
  const badgeLabel = proteinInfo.source === 'pdb'
    ? `PDB: ${proteinInfo.id}`
    : `UniProt: ${proteinInfo.id}`
  const badgeMetrics = ctx.measureText(badgeLabel)
  const badgeW = badgeMetrics.width + badgeFontSize * 1.4
  const badgeH = badgeFontSize * 1.8
  const badgeX = width - pad - badgeW
  const badgeY = textTop - badgeFontSize * 0.3

  // badge background
  ctx.fillStyle = 'rgba(34,211,238,0.12)'
  ctx.strokeStyle = 'rgba(34,211,238,0.35)'
  ctx.lineWidth = 1
  roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 6)
  ctx.fill()
  ctx.stroke()

  ctx.fillStyle = ACCENT_FROM
  ctx.fillText(badgeLabel, badgeX + badgeFontSize * 0.7, badgeY + badgeFontSize * 1.25)

  // ── Liang Lab branding (bottom left) ────────────────────────────────────────
  ctx.font = `600 ${brandFontSize}px Inter, system-ui, sans-serif`
  ctx.fillStyle = '#ffffff'
  ctx.fillText('Liang Lab', pad, brandY)

  const subFontSize = Math.round(Math.min(width * 0.016, infoH * 0.1))
  const subY = brandY + brandFontSize * 1.25
  ctx.font = `400 ${subFontSize}px Inter, system-ui, sans-serif`
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.fillText('School of Biological Sciences, NTU', pad, subY)

  // ── Date (bottom right) ─────────────────────────────────────────────────────
  ctx.font = `400 ${subFontSize}px Inter, system-ui, sans-serif`
  ctx.fillStyle = 'rgba(255,255,255,0.3)'
  const dateStr = new Date().toLocaleDateString('en-GB', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
  const dateW = ctx.measureText(dateStr).width
  ctx.fillText(dateStr, width - pad - dateW, subY)

  // ── Card border ──────────────────────────────────────────────────────────────
  ctx.strokeStyle = 'rgba(34,211,238,0.18)'
  ctx.lineWidth = 2
  ctx.strokeRect(1, 1, width - 2, height - 2)

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
