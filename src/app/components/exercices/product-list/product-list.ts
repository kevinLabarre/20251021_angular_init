import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  // @Input({ required: true }) products: any[] = []
  @Input({ required: true }) products!: any[]

  @Input() title: string = ""

}
