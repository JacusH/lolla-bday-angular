import {Component, OnInit} from '@angular/core';
import {ProductHouseService} from "../product-house.service";
import {ProductHouse} from "../product-house";

@Component({
  selector: 'app-product-houses',
  templateUrl: './product-houses.component.html',
  styleUrls: ['./product-houses.component.sass']
})
export class ProductHousesComponent implements OnInit {

  productHouses: ProductHouse[] = [];

  constructor(
    private productHouseService: ProductHouseService
  ) {}

  ngOnInit() {
    this.loadProductHouses()
  }

  loadProductHouses() {
    this.productHouseService.getProductHouses()
      .subscribe((productHouses: ProductHouse[]) => this.productHouses = productHouses)
  }

}
