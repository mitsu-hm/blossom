import type { LucideIcon } from "lucide-react"

export interface NavItem {
  label: string
  href: string
  badge?: string
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  badge: string
  gradient: string
}

export interface StatItem {
  label: string
  value: string
  change: string
}
