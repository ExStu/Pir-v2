import {ReactNode} from "react";

export interface IInvitesItem {
  firstName: string
  lastName: string
  post: string
  postDesc: ReactNode | string
  image: string
  // video: string
  // onClick: () => void
}

export interface IInvites {
  items: IInvitesItem[]
}