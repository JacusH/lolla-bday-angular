import {Component, OnInit} from '@angular/core';
import {Product} from "../../product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.sass']
})
export class ProductDeleteComponent implements OnInit {

  products: Product[] = [];

  productDeleteFormGroup = new FormGroup({
    product: new FormControl('', [Validators.required])
  });

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getAllProducts()
      .subscribe((products: Product[]) => this.products = products)
  }

  onSubmit() {
    if (this.productDeleteFormGroup.valid) {
      this.sendRequest(this.productDeleteFormGroup.controls.product.value!!)
    }
  }

  private sendRequest(productName: string) {
    this.productService.deleteProduct(productName)
      .subscribe(() => {
        this.products = this.products.filter(p => p.name !== productName)
      });
  }

}
