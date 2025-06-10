import { Component, OnInit } from '@angular/core';
import { IOrderResponse } from '../../Modules/iorder-response';
import { IScheduleDeliveryResponse } from '../../Modules/ischedule-delivery-response';
import { OrderService } from '../../Services/order.service';
import { ScheduleShardServiceService } from '../../Services/schedule-shard-service.service';
import { OrderDetailsService } from '../../Services/order-details.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
   public Response:IOrderResponse|any;
   public timeSlots:Date[]=[];
   public message:string='';
   public statusCode?:number;
   public word:string='';
   public errors:string[]=[];
   public customerEmail:string='';
   constructor(
     private _orderService:OrderService,
     private _scheduleSharedService:ScheduleShardServiceService,
     private _orderDetailsService:OrderDetailsService,
     private _router:Router
    ) {}

  ngOnInit(): void {

    this.Response=this._scheduleSharedService.getOrderResponse();

    if(this.Response){

      console.log("OrderResponse:",this.Response);
      this.timeSlots=this.Response.data;
      this.message=this.Response.message;
      this.word=this.Response.word;
      this.errors=this.Response.errors;
      this.statusCode=this.Response.HttpStatusCode;

    }else{
      console.warn("Response Not Passed!!")
    }
  }

  scheduleOrderDateTime(slot:Date){

   const scheduleOrder={
        orderId:this.word,
        deliveryDate:slot
      };

   this._orderService.scheduleOrderDevliveryTime(scheduleOrder).subscribe({
        next:(data:IScheduleDeliveryResponse)=>{
        this._orderDetailsService.setOrderDetails(data);
        this._router.navigate(['/order-details']);
        },
        error:(er)=>{
          console.error("Error:",er);
        }
      });
    }

  loadCustomerOrders() {
    if (this.customerEmail) {
      this._router.navigate(['/customer-orders'], { queryParams: { email: this.customerEmail } });
    } else {
      alert('Please enter an email');
    }
  }

}
