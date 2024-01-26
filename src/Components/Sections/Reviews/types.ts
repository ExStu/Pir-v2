export interface IReviewLink {
  href?: string
  text?: string
}

export interface IReviewItem {
  name: string
  post?: string
  link?: IReviewLink
  review: string
}

export interface IReviews {
  items: IReviewItem[]
}