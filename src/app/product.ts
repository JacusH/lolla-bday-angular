import {ProductHouse} from "./product-house";

export interface Product {
  name: string,
  image: string,
  claimable: boolean,
  house: ProductHouse,
  link: string
}

export interface ProductDTO {
  name: string,
  base64Image: string,
  houseName: string,
  link: string
}
