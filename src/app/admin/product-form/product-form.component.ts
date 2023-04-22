import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductHouse} from "../../product-house";
import {ProductHouseService} from "../../product-house.service";
import {ProductService} from "../../product.service";
import {Product} from "../../product";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  productHouses: ProductHouse[] = [];

  productFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    house: new FormControl('', [Validators.required]),
    image: new FormControl(null, [Validators.required]),
    link: new FormControl('', [Validators.required])
  });

  srcResult = null;

  constructor(
    private productHouseService: ProductHouseService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.loadProductHouses();
  }

  onSubmit() {
    this.productFormGroup.controls.image.setValue(this.srcResult);

    if (this.productFormGroup.valid) {
      if (this.isValidHttpUrl(this.productFormGroup.controls.link.value!!)) {
        this.sendRequest();
      } else {
        console.error("Not valid link!");
      }
    }
  }

  private isValidHttpUrl(string: string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  private sendRequest() {
    this.productService.createProduct({
      name: this.productFormGroup.controls.name.value!!,
      base64Image: this.productFormGroup.controls.image.value!!,
      houseName: this.productFormGroup.controls.house.value!!,
      link: this.productFormGroup.controls.link.value!!
    }).subscribe((product: Product) => {});
  }

  private loadProductHouses() {
    this.productHouseService.getProductHouses()
      .subscribe((productHouses: ProductHouse[]) => this.productHouses = productHouses)
  }

  async onFileSelected() {
    const inputNode: any = document.querySelector('#product-file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result.substring(e.target.result.indexOf(',')+1);
      };

      reader.readAsDataURL(inputNode.files[0]);
    }
  }
}
