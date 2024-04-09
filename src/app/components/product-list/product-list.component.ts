import { Component } from '@angular/core';
import { Product } from './models/Product';
import { ProductListService } from './services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productList!: Product[];
  filteredProductList!: Product[];

  constructor(private productService: ProductListService) {
    this.getAllProductList();
  }

  getAllProductList() {
    (this.productService.getAllProduct().subscribe(response => {
      this.productList = response;
      this.filteredProductList = this.productList;
    }));
  }

  removeProduct(id: number) {
    (this.productService.deleteProduct(id).subscribe(response => {
      console.log(response);
      location.reload();
    }));
  }

  search() {

    let InputText = document.querySelector('#inputSearch') as HTMLInputElement;

    let text = InputText.value;

    this.filteredProductList = this.productList.filter((word) => word.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) || word.description.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }

  redirectToExternalWebsite(path: string) {
    // Redirect to another website
    window.open('https://localhost:44369/' + path, '_blank');
  }
}

