import { Component } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  firstName: string = 'John';
  lastName: string = 'Smith';
  age: number = 25

  product = {
    phoneBrand: 'Apple',
    phoneType: 'iPhone 12',
    phoneSerial: 1010101,
    price: 800,
    discount: .2,
    inStock: 5
  }

  getDiscount() {
    const discount = this.product.price * this.product.discount;
    const discountedPrice = this.product.price - discount;
    return(discountedPrice);
  }
  
}
 