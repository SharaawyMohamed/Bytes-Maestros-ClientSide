import { Component } from '@angular/core';
import { IOrderResponse } from '../../Modules/iorder-response';
import { IOrderItem } from '../../Modules/iorder-item';
import { IOrder } from '../../Modules/iorder';
import { IScheduleDeliveryResponse } from '../../Modules/ischedule-delivery-response';
import { OrderService } from '../../Services/order.service';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
   public timeSlots!:IOrderResponse;
   public OrderItems:IOrderItem[] = [];
   public Order!:IOrder
   public scheduledOrder!:IScheduleDeliveryResponse

   constructor(private _orderService:OrderService) {}

    createOrder(){
      this.Order.orderItems=this.OrderItems;
      this._orderService.createOrder(this.Order).subscribe({
        next:(data:IOrderResponse)=>{
          this.timeSlots=data;
          console.log("Order Created:",data);
        },
        error:(er)=>{
          console.error("Error:",er);
        }
      });
    }

    scheduleOrder(){
    }
}
