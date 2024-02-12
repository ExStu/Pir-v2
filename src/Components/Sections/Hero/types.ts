export interface IHeroTitles {
  place: string
  date: string
}

export interface IHero {
  titles: IHeroTitles
  onClick: () => void | null
}