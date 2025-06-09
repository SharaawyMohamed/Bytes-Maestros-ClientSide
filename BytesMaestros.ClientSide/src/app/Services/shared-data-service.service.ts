import { IOrderResponse } from './../Modules/iorder-response';
import { Injectable } from '@angular/core';
import { IProduct } from '../Modules/iproduct';
import { IOrderItem } from '../Modules/iorder-item';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {
  private items: IOrderItem[] = [];
  private products: [IProduct,number][] = [];
  private typeId: number = 0;
  constructor(){
  }
  setData(items: IOrderItem[], products: [IProduct,number][],typeId:number) {
    this.items = items;
    this.products = products;
    this.typeId = typeId;
  }



  getItems(): IOrderItem[] {
    return this.items;
  }

  getProducts(): [IProduct,number][] {
    return this.products;
  }

  getTypeId(): number {
    return this.typeId;
  }

}
