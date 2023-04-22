import { Component } from '@angular/core';
import {ProductHouse} from "../../product-house";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductHouseService} from "../../product-house.service";
import {ProductHousesComponent} from "../../product-houses/product-houses.component";

@Component({
  selector: 'app-product-house-form',
  templateUrl: './product-house-form.component.html',
  styleUrls: ['./product-house-form.component.sass']
})
export class ProductHouseFormComponent {

  productHouseFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl(null, [Validators.required]),
  });

  srcResult = null;

  submitted = false;

  constructor(
    private productHouseService: ProductHouseService
  ) {}

  onSubmit() {
    this.productHouseFormGroup.controls.image.setValue(this.srcResult);
    this.submitted = true;

    if (this.productHouseFormGroup.valid) {
      this.sendRequest();
    }
  }

  private sendRequest() {
    this.productHouseService.createProductHouse({
      name: this.productHouseFormGroup.controls.name.value!!,
      base64Image: this.productHouseFormGroup.controls.image.value!!
    }).subscribe((productHouse: ProductHouse) => {});
  }

  async onFileSelected() {
    const inputNode: any = document.querySelector('#house-file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result.substring(e.target.result.indexOf(',')+1);
      };

      reader.readAsDataURL(inputNode.files[0]);
    }
  }
}
