import {ReactNode} from "react";

export interface IProgramItem {
  time: string
  program: string | ReactNode
}

export interface IProgramTabs {
  date: string
  dayTheme?: string
  tabContent: IProgramItem[]
}

export interface IProgram {
  items: IProgramTabs[]
}