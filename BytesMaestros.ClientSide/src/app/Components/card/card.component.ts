import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Modules/iproduct';
import { IOrderItem } from '../../Modules/iorder-item';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataServiceService } from '../../Services/shared-data-service.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public items: IOrderItem[] = [];
  public products:[IProduct,number][] = [];

  public cardList:IProduct[] = [];
  constructor(private _sharedDataService:SharedDataServiceService) {}

ngOnInit() {
  this.items = this._sharedDataService.getItems();
  this.products = this._sharedDataService.getProducts();
}
}
