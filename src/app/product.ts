import {ProductHouse} from "./product-house";

export interface Product {
  name: string,
  imgLink: string,
  claimable: boolean,
  productHouse: ProductHouse,
  link: string
}
