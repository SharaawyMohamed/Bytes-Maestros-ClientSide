import { Injectable } from '@angular/core';
import { IOrderResponse } from '../Modules/iorder-response';
import { IScheduleDeliveryRequest } from '../Modules/ischedule-delivery-request';
import { IScheduleDeliveryResponse } from '../Modules/ischedule-delivery-response';

@Injectable({
  providedIn: 'root'
})
export class ScheduleShardServiceService {
  public orderResponse:IOrderResponse|any;
  private orderId:string='';
  constructor() { }

  setSheduleOrderResponse(orderResponse:IOrderResponse){
    this.orderResponse=orderResponse;
  }

   setOrderId(orderId:string){
    this.orderId=orderId;
  }

  getOrderResponse():IOrderResponse|any{
    return this.orderResponse;
  }

  getOrderId():string{
    return this.orderId;
  }

}
