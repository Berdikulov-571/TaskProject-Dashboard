import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-list/details/:id', component: DetailsComponent },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
