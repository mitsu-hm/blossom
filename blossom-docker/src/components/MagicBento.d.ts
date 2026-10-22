import React from 'react'

export interface BentoCard {
  image?: string
  title: string
  description: string
  label: string
  category?: string
}

export interface MagicBentoProps {
  cards?: BentoCard[]
  textAutoHide?: boolean
  enableStars?: boolean
  enableSpotlight?: boolean
  enableBorderGlow?: boolean
  disableAnimations?: boolean
  spotlightRadius?: number
  particleCount?: number
  enableTilt?: boolean
  glowColor?: string
  clickEffect?: boolean
  enableMagnetism?: boolean
  onCardClick?: (card: BentoCard) => void
}

export const defaultPhotographyCards: BentoCard[]

declare const MagicBento: React.FC<MagicBentoProps>

export default MagicBento
