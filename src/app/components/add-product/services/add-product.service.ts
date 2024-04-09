import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductCommand } from '../models/CreateProductCommand';
import { Observable, map } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:44369/api/Product/Create';

  createProduct(model: FormData) {
    return this.httpClient.post<number>(this.baseUrl, model)
      .pipe(
        map(response => response as number)
      );
  }
}
