import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateProductCommand } from '../models/UpdateProductCommand';
import { map } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:44369/api/Product/';

  updateProduct(model: FormData) {
    return this.httpClient.put<number>(this.baseUrl + "Update", model).pipe(map(response => response as number));
  }
}
