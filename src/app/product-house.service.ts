import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductHouse, ProductHouseDTO} from "./product-house";

@Injectable({
  providedIn: 'root'
})
export class ProductHouseService {

  private productHouseUrl = "http://localhost:8080/api/productHouse"

  constructor(
    private http: HttpClient
  ) { }

  getProductHouses(): Observable<ProductHouse[]> {
    return this.http.get<ProductHouse[]>(this.productHouseUrl)
  }

  createProductHouse(house: ProductHouseDTO): Observable<ProductHouse> {
    return this.http.post<ProductHouse>(this.productHouseUrl, house)
  }

  deleteProductHouse(houseName: string): Observable<ProductHouse> {
    return this.http.delete<ProductHouse>(`${this.productHouseUrl}/${houseName}`)
  }

}
