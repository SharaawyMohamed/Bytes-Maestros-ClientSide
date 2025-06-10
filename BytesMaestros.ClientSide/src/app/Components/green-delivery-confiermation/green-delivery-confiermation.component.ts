import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerCardService } from '../../Services/customer-card.service';
import { IGreenDeliveryResponse } from '../../Modules/igreen-delivery-response';

@Component({
  selector: 'app-green-delivery-confiermation',
  imports: [],
  templateUrl: './green-delivery-confiermation.component.html',
  styleUrl: './green-delivery-confiermation.component.css'
})
export class GreenDeliveryConfiermationComponent implements OnInit{

  public email:string='';
  public greenDeliveryDate:Date=new Date();
  public response:IGreenDeliveryResponse|any;
  constructor(private _route:ActivatedRoute, private _customerCardService:CustomerCardService){}

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.email = params['email'];
      const dateString:Date = params['greenDelivery'];
      this.greenDeliveryDate = dateString ;
      this.ReScheduleOrdersWithGreenDelivery();
    });
  }
  ReScheduleOrdersWithGreenDelivery(){
     console.log("Email and Green Delivery", this.email, this.greenDeliveryDate);
  this._customerCardService.ReScheduleOrdersWithGreenDelivery(this.email, this.greenDeliveryDate)
    .subscribe({
      next: (res: IGreenDeliveryResponse) => {
        this.response = res;
        console.log("Message", this.response.message);
      },
      error: (err) => {
        console.error("Error occurred:", err);
      }
    });
  }

}
