import { Component } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  products = [
    {
      brand: 'Nike',
      price: 200,
      location: 'New York',
      inStock: false
    },
    {
      brand: 'Jordan',
      price: 150,
      location: 'Arizona',
      inStock: true
    },
    {
      brand: 'Reebok',
      price: 90,
      location: 'California',
      inStock: true
    },
    {
      brand: 'Assics',
      price: 175,
      location: 'France',
      inStock: false
    },
    {
      brand: 'Nike',
      price: 200,
      location: 'New York',
      inStock: true
    },
    {
      brand: 'Jordan',
      price: 150,
      location: 'Arizona',
      inStock: true
    },
    {
      brand: 'Reebok',
      price: 75,
      location: 'California',
      inStock: false
    },
    {
      brand: 'Assics',
      price: 95,
      location: 'France',
      inStock: true
    },
  ]

  totalProdCount = this.products.length;
  productInStock = this.products.filter(p => p.inStock === true).length;
  productNotInStock = this.products.filter(p => p.inStock === false).length;

  selectedFilterRadioButton: string = 'all'

  onFilterChanged(value: string) {
    this.selectedFilterRadioButton = value;

 this.productInStock
 this.productNotInStock
    
    

  }
}
 