export interface IPlacesItem {
  id: string | number
  category: string
  title: string
  href?: string
  rating?: number
  img: string
}

export interface IPlaces {
  items: IPlacesItem[]
}