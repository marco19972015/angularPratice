import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() productComp: ProductComponent = undefined;

  @Input() producted: any;

  product: Product;


  
  

}
