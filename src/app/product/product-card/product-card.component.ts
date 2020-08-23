import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: IProduct;

  priceColumns: string[] = ['name', 'price'];

  constructor() { }

  ngOnInit(): void {
  }

  onRefClick(): void {
    window.open(this.product.ref);
  }
}
