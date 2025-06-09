import { Component, OnInit } from '@angular/core';
import { IScheduleDeliveryResponse, Item } from '../../Modules/ischedule-delivery-response';
import { ScheduleShardServiceService } from '../../Services/schedule-shard-service.service';
import { OrderDetailsService } from '../../Services/order-details.service';

@Component({
  selector: 'app-order-details',
  imports: [],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {
  public customerName:string='';
  public customerAddress:string='';
  public customerEmail:string='';
  public orderTotalAmount:number=0;
  public orderDeliveryTime:Date=new Date();
  public status:string='';

  public message:string='';
  public statusCode:number=0;
  public errors:string[]=[];
  public items:Item[]=[];

   public orderDetails:IScheduleDeliveryResponse|any;


   constructor(private _orderDetailsService:OrderDetailsService){}

  ngOnInit(): void {
    this.orderDetails=this._orderDetailsService.getOrderDetails();
    console.log("Details",this.orderDetails)

    if (this.orderDetails) {
      this.statusCode = this.orderDetails.statusCode;
      this.message = this.orderDetails.message;
      this.errors = this.orderDetails.error || [];

      if (this.orderDetails.data) {
         const orderData = this.orderDetails.data;
         this.customerName = orderData.customerName;
         this.customerAddress = orderData.customerAddress;
         this.customerEmail = orderData.customerEmail;
         this.orderTotalAmount = orderData.totalAmount;
         this.orderDeliveryTime = orderData.deliveryTime ;
         this.status = orderData.status ;
         this.items = orderData.orderItems;
         console.log("Order Data",orderData)
      }
    }
    else
    {
      console.log('No order details available from service');
    }
  }


}
