export interface IPartnersItem {
  id: string | number
  href: string
  img: string
  alt: string
}

export interface IPartners {
  items: IPartnersItem[]
}