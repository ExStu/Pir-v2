export interface INavItem {
  text: string
  bold?: boolean
  href: string
  invert?: boolean
}

export interface INavMenu {
  items: INavItem[]
  invert?: boolean
}