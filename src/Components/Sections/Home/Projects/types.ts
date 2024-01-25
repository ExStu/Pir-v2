export interface IProjectItem {
  route: string
  date: string
  title: string
  image: string
}

export interface IProjects {
  items: IProjectItem[]
}