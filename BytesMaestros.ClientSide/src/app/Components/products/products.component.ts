import { Component, OnInit } from '@angular/core';
import { IProductResponse } from '../../Modules/iproduct-response';
import { ProductService } from '../../Services/product-service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Add this import

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
  constructor(private _productService: ProductService,private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      this.typeId = Number(params['typeId']) || 1;

      this.getProducts();
    });
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
}
