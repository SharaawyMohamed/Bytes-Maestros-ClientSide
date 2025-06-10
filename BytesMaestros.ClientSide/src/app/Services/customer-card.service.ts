import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerOrdersResponse } from '../Modules/icustomer-orders-response';
import { environment } from '../../Environment/environment';
import { IGreenDeliveryResponse } from '../Modules/igreen-delivery-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerCardService {

  constructor(private http:HttpClient) { }

  getMyOrders(customerEmail:string){
     return this.http.get<CustomerOrdersResponse>(`${environment.baseURL}Order/get-customer-orders?customerEmail=${customerEmail}`);
  }

  ReScheduleOrdersWithGreenDelivery(email:string, greenDelivery:Date){
   const body = {
    customerEmail: email,
    greenDelivaryTime: greenDelivery
  };

  console.log("From Service", email, body.greenDelivaryTime);

  return this.http.post<IGreenDeliveryResponse>(
    `${environment.baseURL}Order/reschedule-orders-with-green-delivery`,
    body
  );
  }
}
