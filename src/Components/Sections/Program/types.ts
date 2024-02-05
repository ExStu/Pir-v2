export interface IProgramItem {
  time: string
  program: string
  inView?: boolean
}

export interface IProgramTabs {
  date: string
  tabContent: IProgramItem[]
}

export interface IProgram {
  items: IProgramTabs[]
}