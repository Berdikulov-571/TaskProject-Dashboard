import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:44369/api/Product/';

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + "GetAll");
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(this.baseUrl + "Delete?Id=" + id.toString());
  }
}
