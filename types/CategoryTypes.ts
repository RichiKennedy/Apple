export interface ProductType {
  name: string
  url: string
  info: string
  price: number
  id: number
}
export interface ProductsType {
  items: [
    ProductType
  ]
}

export interface CategoryType {
    title: string;
    id: string;
    items: ProductType
  }