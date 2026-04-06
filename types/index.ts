// Enquiry routes
export type EnquiryRoute = 'drawings' | 'template' | 'survey' | 'bespoke'

// Enquiry status — maps to the 10-stage internal workflow
export type EnquiryStatus =
  | 'new'
  | 'reviewing'
  | 'quoted'
  | 'approved'
  | 'in_production'
  | 'dispatched'
  | 'complete'
  | 'cancelled'

// Project/work categories
export type ProjectCategory =
  | 'grills'
  | 'inlays'
  | 'screens'
  | 'panels'
  | 'bespoke'

// Materials
export type Material =
  | 'brass'
  | 'bronze'
  | 'aluminium'
  | 'mild-steel'
  | 'stainless-steel'
  | 'stone'

// Navigation items
export interface NavItem {
  label: string
  href: string
}

// Project card data
export interface Project {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  material?: Material
  image: string
  problem?: string
  solution?: string
  result?: string
  featured?: boolean
}

// Product/pattern card data
export interface Product {
  id: string
  slug: string
  name: string
  productFamily: string
  availableMaterials: Material[]
  image: string
  dimensionalGuidance?: string
}
