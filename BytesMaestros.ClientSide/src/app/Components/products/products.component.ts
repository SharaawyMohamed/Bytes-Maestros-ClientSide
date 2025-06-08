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

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public Products?: IProductResponse;
  public typeId: number = 0;
  public errors: string[] = [];
  public product?:IProduct;
  public quantity:number=1;
  public cardItems:IOrderItem[]=[];
  public orderItems:[IProduct,number][] = [];
  public productQuantities: Map<string, number> = new Map();
  constructor(private _productService: ProductService,
    _orderService:OrderService,
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
  addToCard(product: IProduct) {
    const quantity = this.productQuantities.get(product.id) || 1;
    var isFound= this.cardItems.some(item => item.productId === product.id);
    if(isFound==false && quantity>0){

      const orderItem:IOrderItem={
      productId: product.id,
      quantity: quantity
    };
    this.cardItems.push(orderItem);
    this.orderItems.push([product, quantity]);
    }

  }
  getProducts() {
        this._productService.getProducts(this.typeId, 20, 1).subscribe({
        next: (data: IProductResponse) => {
        this.Products = data;
        this.errors = data.error ||[];;
        console.log("Products: ", data);
      },
      error: (er) => {
        console.error("Error:", er);
      }
    });
  }
  navigateToCard() {
    this._shardDataService.setData(this.cardItems, this.orderItems);
    this._router.navigate(['/card']);
  }
}
