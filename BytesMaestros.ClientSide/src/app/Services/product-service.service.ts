import { Injectable, ɵɵsetNgModuleScope } from '@angular/core';
import { IProduct } from '../Modules/iproduct';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../Environment/environment';
import { IProductResponse } from '../Modules/iproduct-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  getProducts(typeId:number,pageSize:number,pageIndex:number) {
    return this.http.get<IProductResponse>(`${environment.baseURL}Product/?typeId=${typeId}&pageSize=${pageSize}&pageIndex=${pageIndex}`);
  }
}
