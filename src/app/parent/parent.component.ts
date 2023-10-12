import { Component } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  addToCart: number = 0;

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
    inStock: 11,
    pImage: '/assets/images/iphone12.jpeg'
  }

  getDiscount() {
    const discount = this.product.price * this.product.discount;
    const discountedPrice = this.product.price - discount;
    return(discountedPrice);
  }

  // This method is associated with the event binding in our template
  onNameChange(event: any) {
    // We can access the event object
    console.log(event);
    // From there we can navigate to get the value contained in the event
    console.log(event.target.value);
    // We can then set the value in our input = to our property randomName 
    this.randomName = event.target.value;
  }


  decrementValaue() {

    if(this.addToCart > 0){
      this.addToCart--;
    }
    // if (this.addToCart <= 0){
    //   this.addToCart = 0;
    // } else {
    //   this.addToCart -= 1
    // }
  }

  incrementValue() {
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
  }
  
}
 