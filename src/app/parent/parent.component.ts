import { Component } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  randomName: string = 'John Snow'

  firstName: string = 'John';
  lastName: string = 'Smith';
  age: number = 25

  product = {
    phoneBrand: 'Apple',
    phoneType: 'iPhone 12',
    phoneSerial: 1010101,
    price: 800,
    discount: .2,
    inStock: 10,
    pImage: '/assets/images/iphone12.jpeg'
  }

  getDiscount() {
    const discount = this.product.price * this.product.discount;
    const discountedPrice = this.product.price - discount;
    return(discountedPrice);
  }
  
}
 