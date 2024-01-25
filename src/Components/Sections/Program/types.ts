export interface IProgramItem {
  time: string
  program: string
}

export interface IProgramTabs {
  date: string
  tabContent: IProgramItem[]
}

export interface IProgram {
  items: IProgramTabs[]
}