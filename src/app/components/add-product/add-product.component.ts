import { Component } from '@angular/core';
import { AddProductService } from './services/add-product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private productService: AddProductService) { }

  globalValue!: File;

  async createProduct() {
    let Inputname = document.querySelector('#name') as HTMLInputElement;
    let InputDescription = document.querySelector('#description') as HTMLInputElement;
    let INputSortNumber = document.querySelector('#sortNumber') as HTMLInputElement;

    let formData = new FormData();
    formData.append('name', Inputname.value);
    formData.append('description', InputDescription.value);
    formData.append('sortNumber', INputSortNumber.value);
    formData.append('videoPath', this.globalValue);

    (this.productService.createProduct(formData))
      .subscribe(response => {
        if (response == 0) {
          alert('Don\'t created');
        }
        else {
          alert('Created');
        }
      })
  }
  method(event: any) {

    this.globalValue = <File>event.target.files[0];
  }
}