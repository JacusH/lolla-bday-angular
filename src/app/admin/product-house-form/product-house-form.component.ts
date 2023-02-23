import { Component } from '@angular/core';
import {ProductHouse} from "../../product-house";

@Component({
  selector: 'app-product-house-form',
  templateUrl: './product-house-form.component.html',
  styleUrls: ['./product-house-form.component.sass']
})
export class ProductHouseFormComponent {

  model: ProductHouse = {
    name: "test",
    imgLink: "test"
  };

  submitted = false;

  save() {
    this.submitted = true;
  }


}
