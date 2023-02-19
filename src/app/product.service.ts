import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = "http://localhost:8080/api/product/"

  constructor(
    private http: HttpClient
  ) { }

  getProducts(productHouse: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl + productHouse)
  }
}
