export type ColorTheme =
  | 'chain-id'
  | 'plddt-confidence'
  | 'secondary-structure'
  | 'uncertainty'
  | 'hydrophobicity'
  | 'uniform'

export type RepresentationType =
  | 'cartoon'
  | 'gaussian-surface'
  | 'ball-and-stick'
  | 'ribbon'

export type CardAspectRatio = 'square' | 'widescreen' | 'portrait'
export type CardThemeMode = 'dark' | 'light'
export type CardResolution = 'standard' | 'hd'

export type StructureSource = 'pdb' | 'alphafold'

export interface ProteinInfo {
  id: string
  source: StructureSource
  name: string
  organism: string
  method?: string
  resolution?: string
  description: string
  structureUrl: string
}

export interface PresetProtein {
  pdbId: string
  displayName: string
  description: string
  organism: string
}

export interface ViewerState {
  colorTheme: ColorTheme
  representation: RepresentationType
  isLoading: boolean
  error: string | null
  proteinInfo: ProteinInfo | null
}

export interface CardExportOptions {
  aspectRatio: CardAspectRatio
  theme: CardThemeMode
  resolution: CardResolution
  includeDetails: boolean
  includeBranding: true
}

/** Card dimensions in pixels */
export const CARD_DIMENSIONS: Record<CardAspectRatio, { width: number; height: number }> = {
  square:     { width: 1200, height: 1200 },
  widescreen: { width: 1920, height: 1080 },
  portrait:   { width: 1240, height: 1754 }, // A4 at 150dpi
}
