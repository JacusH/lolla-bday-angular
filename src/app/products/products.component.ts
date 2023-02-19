import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit{

  productHouseName: string
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productHouseName = this.route.snapshot.paramMap.get('productHouseName')!
  }

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getProducts(this.productHouseName)
      .subscribe((products: Product[]) => this.products = products)
  }
}
