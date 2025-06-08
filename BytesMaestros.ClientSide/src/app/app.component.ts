import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { CardComponent } from './Components/card/card.component';
import { ProductsComponent } from './Components/products/products.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,OrderComponent,CardComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BytesMaestros.ClientSide';
}
