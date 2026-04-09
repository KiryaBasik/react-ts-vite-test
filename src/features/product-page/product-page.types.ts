export type GalleryImage = {
  id: number
  alt: string
  src: string
  thumbnailSrc: string
}

export type ProductSummary = {
  badge: string
  price: string
  title: string
}

export type Characteristic = {
  column: 'left' | 'right'
  id: string
  label: string
  value: string
}

export type EquipmentGroup = {
  id: string
  label: string
  items: string[]
}

export type SimilarCar = {
  id: number
  imageAlt: string
  imageSrc: string
  price: string
  title: string
}

export type SelectionBannerData = {
  buttonLabel: string
  description: string
  imageSrc: string
  title: string
}

export type FixedActionsData = {
  primary: string
  secondary: string
}

export type ProductPageData = {
  catalogLabel: string
  characteristics: Characteristic[]
  equipmentButtonLabel: string
  equipmentGroups: EquipmentGroup[]
  fixedActions: FixedActionsData
  galleryImages: GalleryImage[]
  product: ProductSummary
  selectionBanner: SelectionBannerData
  similarCars: SimilarCar[]
  similarCarsTitle: string
}
