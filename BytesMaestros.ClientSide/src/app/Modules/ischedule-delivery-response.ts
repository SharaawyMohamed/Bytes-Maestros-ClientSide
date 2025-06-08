import { HttpStatusCode } from "@angular/common/http";
import { IOrderResponse } from "./iorder-response";

export interface IScheduleDeliveryResponse {
  statusCode: HttpStatusCode;
  message: string;
  data: Order;
  word?: string;
  error: string[];
}
export interface Order {

  orderId: string;
  customerName:string;
  customerEmail:string;
  customerAddress:string;
  totalAmount:number;
  deliveryTime:Date;
  status:string;
  orderItems: Item[];
}


export interface Item{
  id:string;
  orderId:string;
  productName:string;
  totalPrice:number;
  quantity:number;
}
