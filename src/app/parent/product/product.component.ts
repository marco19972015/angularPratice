import { Component, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: {
                    brand: string, 
                    price: number,
                    location: string, 
                    inStock: boolean
                  };

  constructor(){
  }
  

  
  @Input() searchText: string = '';


  

}
