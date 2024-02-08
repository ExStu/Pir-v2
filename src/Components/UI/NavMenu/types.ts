export interface INavItem {
  text: string
  bold?: boolean
  href: string
  invert?: boolean
  scrollFn?: (href: string) => void
}

export interface INavMenu {
  items: INavItem[]
  invert?: boolean
  scrollFn?: (href: string) => void
}