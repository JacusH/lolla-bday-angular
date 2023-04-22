import {Component, OnInit} from '@angular/core';
import {ProductHouseService} from "../../product-house.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductHouse} from "../../product-house";

@Component({
  selector: 'app-product-house-delete',
  templateUrl: './product-house-delete.component.html',
  styleUrls: ['./product-house-delete.component.sass']
})
export class ProductHouseDeleteComponent implements OnInit {

  productHouses: ProductHouse[] = [];

  productHouseDeleteFormGroup = new FormGroup({
    house: new FormControl('', [Validators.required])
  });

  constructor(
    private productHouseService: ProductHouseService
  ) {}

  ngOnInit() {
    this.loadProductHouses()
  }

  onSubmit() {
    if (this.productHouseDeleteFormGroup.valid) {
      this.sendRequest(this.productHouseDeleteFormGroup.controls.house.value!!)
    }
  }

  private sendRequest(houseName: string) {
    this.productHouseService.deleteProductHouse(houseName)
      .subscribe(() => {
        this.productHouses = this.productHouses.filter(house => house.name !== houseName)
      });
  }

  private loadProductHouses() {
    this.productHouseService.getProductHouses()
      .subscribe((productHouses: ProductHouse[]) => this.productHouses = productHouses)
  }
}
