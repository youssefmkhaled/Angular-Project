import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/components/carts/carts.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:'full'},
  {path:"products", component:AllProductsComponent},
  {path:'cart', component:CartsComponent},
  {path:"details/:id", component:ProductsDetailsComponent},
  {path:'home', component:HomeComponent},
  {path:'**', redirectTo:"home" ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
