import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedDataServiceService } from '../../Services/shared-data-service.service';
import { OrderService } from '../../Services/order.service';
import { IOrderItem } from '../../Modules/iorder-item';
import { IProduct } from '../../Modules/iproduct';
import { IOrderResponse } from '../../Modules/iorder-response';
import { Router } from '@angular/router';
import { ScheduleShardServiceService } from '../../Services/schedule-shard-service.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public products: [IProduct, number][] = [];
  public items: IOrderItem[] = [];
  public response:IOrderResponse|undefined;
  public customerName = '';
  public customerAddress = '';
  public customerEmail = '';

  constructor(
    private _sharedData: SharedDataServiceService,
    private _scheduleSharedService:ScheduleShardServiceService,
    private _orderService: OrderService,
    private _router:Router
  ) {}

  ngOnInit() {
    this.items = this._sharedData.getItems();
    this.products = this._sharedData.getProducts();
  }

  scheduleOrder() {

    const order = {
      customerName: this.customerName,
      customerAddress: this.customerAddress,
      customerEmail: this.customerEmail,
      customerPhoneNumber: '+201000000000',
      items: this.items,
      orderTypeId: this._sharedData.getTypeId()
    };


    this._orderService.createOrder(order).subscribe({
      next: (data:IOrderResponse) => {
        this.response=data;
        this._scheduleSharedService.setSheduleOrderResponse(data);
        console.log("Order Response",this._scheduleSharedService.getOrderResponse())
        this._router.navigate(['/order'])
      },
      error: (error) => {
        console.error("Order error:", error);
      }
    });

  }
}
