import { IOrderItem } from "./iorder-item";

export interface IOrder {
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  customerAddress: string;
  orderTypeId:number;
  items: IOrderItem[];
}
