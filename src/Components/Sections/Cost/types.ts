export interface ICostDescList {
    item: string
}

export interface ICostDesc {
    title: string
    list: ICostDescList[]
}

export interface ICost {
    price: string
    desc: ICostDesc
    href: string
}