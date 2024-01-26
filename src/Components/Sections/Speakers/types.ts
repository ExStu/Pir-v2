export interface ISpeakersItem {
  id: string | number
  firstName: string
  lastName: string
  post: string
  img: string
}

export interface ISpeakers {
  items: ISpeakersItem[]
}