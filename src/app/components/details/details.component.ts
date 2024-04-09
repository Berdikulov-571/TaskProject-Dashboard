import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-list/models/Product';
import { ProductListService } from '../product-list/services/product-list.service';
import { DetailsService } from './services/details.service';
import { response } from 'express';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  productList!: Product[];
  globalValue!: File;
  GLobalId !: number;

  constructor(private route: ActivatedRoute, private productService: ProductListService, private detailsService: DetailsService) {
    this.GLobalId = this.route.snapshot.params['id'];
    this.getAllProductList(this.GLobalId);
    // this.onInit(id);
  }

  getAllProductList(id: number) {
    (this.productService.getAllProduct().subscribe(response => {
      this.productList = response;
      let InputName = document.querySelector('#name') as HTMLInputElement;
      let InputDescription = document.querySelector('#description') as HTMLInputElement;
      let InputSortNumber = document.querySelector('#sort-number') as HTMLInputElement;

      let product = this.productList.find(x => x.id == id);

      InputName.value = product!.name;
      InputDescription.value = product!.description;
      InputSortNumber.value = product!.sortNumber;
    }));
  }

  onInit(id: number) {
    let InputName = document.querySelector('#name') as HTMLInputElement;
    let InputDescription = document.querySelector('#description') as HTMLInputElement;
    let InputSortNumber = document.querySelector('#sort-number') as HTMLInputElement;

    let product = this.productList.find(x => x.id == id);

    InputName.value = product!.name;
    InputDescription.value = product!.description;
    InputSortNumber.value = product!.sortNumber;
  }

  method(event: any) {
    this.globalValue = <File>event.target.files[0];
  }

  UpdateProduct() {
    let InputName = document.querySelector('#name') as HTMLInputElement;
    let InputDescription = document.querySelector('#description') as HTMLInputElement;
    let InputSortNumber = document.querySelector('#sort-number') as HTMLInputElement;

    let formData = new FormData();
    formData.append('id', `${this.GLobalId}`)
    formData.append('name', InputName.value);
    formData.append('description', InputDescription.value);
    formData.append('sortNumber', InputSortNumber.value);
    formData.append('videoPath', this.globalValue);

    (this.detailsService.updateProduct(formData).subscribe(response => {
      console.log(response);
      if (response == 0) {
        alert('Don\'t Updated');
      }
      else {
        alert('Updated');
      }
    }))
  }
}
