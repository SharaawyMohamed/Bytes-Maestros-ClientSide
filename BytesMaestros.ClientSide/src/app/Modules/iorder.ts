import { IOrderItem } from "./iorder-item";

export interface IOrder {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  orderTypeId:number;
  orderItems: IOrderItem[];
}
