import { Injectable } from '@angular/core';
import { IProduct } from '../Modules/iproduct';
import { IOrderItem } from '../Modules/iorder-item';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {
  private items: IOrderItem[] = [];
  private products: [IProduct,number][] = [];

  setData(items: IOrderItem[], products: [IProduct,number][]) {
    this.items = items;
    this.products = products;
  }

  getItems(): IOrderItem[] {
    return this.items;
  }

  getProducts(): [IProduct,number][] {
    return this.products;
  }

}
