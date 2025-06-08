import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../Modules/iorder';
import { environment } from '../../Environment/environment';
import { IOrderResponse } from '../Modules/iorder-response';
import { IScheduleDeliveryRequest } from '../Modules/ischedule-delivery-request';
import { IScheduleDeliveryResponse } from '../Modules/ischedule-delivery-response';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http:HttpClient) { }
  createOrder(order:IOrder){
    return this.http.post<IOrderResponse>(`${environment.baseURL}`,order);
  }

  identityOrderDevliveryTime(deliverySlot:IScheduleDeliveryRequest){
    return this.http.post<IScheduleDeliveryResponse>(`${environment.baseURL}Order/schedule-delivery`,deliverySlot);
  }

  
}
