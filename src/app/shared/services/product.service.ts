import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../models/productModel';
import { IResponse } from '../../models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL: string = "http://localhost:3000/product"
  constructor(private http: HttpClient) { }

  addProduct(data:IProduct):Observable<IResponse<IProduct>>{
    return this.http.post<IResponse<IProduct>>(`${this.baseURL}`,data)
  }

  getProducts():Observable<IResponse<IProduct[]>>{
    return this.http.get<IResponse<IProduct[]>>(`${this.baseURL}`)
  }

  deleteProduct(id: string):Observable<IResponse<IProduct>>{
    return this.http.delete<IResponse<IProduct>>(`${this.baseURL}/${id}`)
  }
}
