import { CustomerOrder } from './../../Modules/icustomer-orders-response';
import { CustomerCardService } from './../../Services/customer-card.service';
import { Component, OnInit } from '@angular/core';
import { CustomerOrders, CustomerOrdersResponse } from '../../Modules/icustomer-orders-response';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-orders',
  imports: [],
  templateUrl: './customer-orders.component.html',
  styleUrl: './customer-orders.component.css'
})
export class CustomerOrdersComponent implements OnInit{
  public customerCardOrders:CustomerOrdersResponse|any;
  public data:CustomerOrders|any;
  public customerEmail:string='';

  constructor(private _customerService:CustomerCardService,private _route:ActivatedRoute,private _router:Router){}

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.customerEmail = params['email'];

      if (this.customerEmail) {
       this.loadOrders(this.customerEmail);
      }
    });
     }

     loadOrders(customerEmail:string){
        this._customerService.getMyOrders(customerEmail).subscribe({
         next: (response: CustomerOrdersResponse) => {
           this.customerCardOrders = response;
           this.data = response.data;
         },
         error: (er) => {
           console.error("Error:", er);
         }
       });
     }

   navigateGreenDelivery(){
        this._router.navigate(['/green-delivery-confiermation'],{ queryParams: { email: this.data.customerEmail, greenDelivery:this.data.bestDelivaryTime } })
    }

  }




