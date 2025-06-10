import { Injectable } from '@angular/core';
import { IScheduleDeliveryResponse } from '../Modules/ischedule-delivery-response';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  private orderDetails:IScheduleDeliveryResponse|any;
  constructor() { }

  setOrderDetails(orderDetails:IScheduleDeliveryResponse){
    this.orderDetails=orderDetails;
  }

  getOrderDetails():IScheduleDeliveryResponse{
    return this.orderDetails;
  }

  
}
