import { Component, OnInit } from '@angular/core';
import { IProductResponse } from '../../Modules/iproduct-response';
import { ProductService } from '../../Services/product-service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../Services/order.service';
import { IProduct } from '../../Modules/iproduct';
import { IOrderItem } from '../../Modules/iorder-item';
import { SharedDataServiceService } from '../../Services/shared-data-service.service';
import { IOrder } from '../../Modules/iorder';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: IProductResponse|any;
  public typeId: number = 0;
  public errors: string[] = [];
  public product:IProduct|any;
  public quantity:number=0;
  public cardItems:IOrderItem[]=[];
  public orderProducts:[IProduct,number][] = [];
  public productQuantities: Map<string, number> = new Map();
  public customerEmail:string='';
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router:Router,
    private _shardDataService:SharedDataServiceService
  ) {}

  ngOnInit() {
      this._route.queryParams.subscribe(params => {
      this.typeId = Number(params['typeId']) || 1;
      this.getProducts();
    });
  }

  getProducts() {
        this._productService.getProducts(this.typeId, 20, 1).subscribe({
        next: (data: IProductResponse) => {
        this.products = data;
        this.errors = data.error || [];
      },
      error: (er) => {
        console.error("Error:", er);
      }
    });
  }
  addToCard(product: IProduct) {
    const quantity = this.productQuantities.get(product.id) || 0;
    var isFound= this.cardItems.some(item => item.productId === product.id);

    if(isFound==false && quantity>0){
      const orderItem = {
      productId: product.id,
      quantity: quantity
    };
    this.cardItems.push(orderItem);
    this.orderProducts.push([product, quantity]);
  }
  }

  navigateToCard() {
    this._shardDataService.setData(this.cardItems, this.orderProducts,this.typeId);
    this._router.navigate(['/card']);
  }

  loadCustomerOrders() {
    if (this.customerEmail) {
      this._router.navigate(['/customer-orders'], { queryParams: { email: this.customerEmail } });
    } else {
      alert('Please enter an email');
    }
  }
}
