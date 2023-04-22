import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductHousesComponent } from './product-houses/product-houses.component';

import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import { ProductHouseFormComponent } from './admin/product-house-form/product-house-form.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { NavbarComponent } from './navbar/navbar.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { ProductHouseDeleteComponent } from './admin/product-house-delete/product-house-delete.component';
import {MatSelectModule} from "@angular/material/select";
import { ProductDeleteComponent } from './admin/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductHousesComponent,
    AdminComponent,
    ProductHouseFormComponent,
    MenuComponent,
    NavbarComponent,
    ProductFormComponent,
    ProductHouseDeleteComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
