import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductHousesComponent} from "./product-houses/product-houses.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  { path: '', redirectTo: '/productHouses', pathMatch: 'full' },
  { path: 'productHouses', component: ProductHousesComponent },
  { path: 'products/:productHouseName', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
