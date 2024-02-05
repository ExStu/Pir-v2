import {ReactNode} from "react";

export interface IInvitesItem {
  firstName: string
  lastName: string
  post: string
  postDesc: ReactNode | string
  image: string
  onOpenModal?: () => void
  onSetVideo?: () => void
  video?: string
}

export interface IInvites {
  items: IInvitesItem[]
}