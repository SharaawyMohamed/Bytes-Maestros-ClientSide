import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { CardComponent } from './Components/card/card.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,OrderDetailsComponent,OrderComponent,CardComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'BytesMaestros.ClientSide';

  constructor(private _router:Router){}
   navigateToTypes() {
    this._router.navigate(['/home']);
  }
  loadCustomerOrders(){
    this._router.navigate(['/customer-orders'])
  }
}


