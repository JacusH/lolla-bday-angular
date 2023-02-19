import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductHouse} from "./product-house";

@Injectable({
  providedIn: 'root'
})
export class ProductHouseService {

  private productUrl = "http://localhost:8080/api/productHouse"

  constructor(
    private http: HttpClient
  ) { }

  getProductHouses(): Observable<ProductHouse[]> {
    return this.http.get<ProductHouse[]>(this.productUrl)
  }

}
