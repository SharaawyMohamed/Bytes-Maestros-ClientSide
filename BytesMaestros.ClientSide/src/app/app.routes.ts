import { Order } from './Modules/ischedule-delivery-response';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { CardComponent } from './Components/card/card.component';
import { ProductsComponent } from './Components/products/products.component';
import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { CustomerOrdersComponent } from './Components/customer-orders/customer-orders.component';
import { GreenDeliveryConfiermationComponent } from './Components/green-delivery-confiermation/green-delivery-confiermation.component';

export const routes: Routes = [
  {path:'',component:AppComponent,children:[
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'order',component:OrderComponent,title:'Order'},
    {path:'card',component:CardComponent,title:'Card'},
    {path:'products',component:ProductsComponent,title:'Products'},
    {path:'order-details',component:OrderDetailsComponent,title:'Order-Details'},
    {path:'customer-orders',component:CustomerOrdersComponent,title:'Customer-Orders'},
    {path:'green-delivery-confiermation',component:GreenDeliveryConfiermationComponent,title:'Green-Delivery-Confirmation'}
  ]}
];
