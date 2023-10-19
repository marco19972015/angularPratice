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
      location: 'New York'
    },
    {
      brand: 'Jordan',
      price: 150,
      location: 'Arizona'
    },
    {
      brand: 'Reebok',
      price: 90,
      location: 'California'
    },
    {
      brand: 'Assics',
      price: 175,
      location: 'France'
    },
    {
      brand: 'Nike',
      price: 200,
      location: 'New York'
    },
    {
      brand: 'Jordan',
      price: 150,
      location: 'Arizona'
    },
    {
      brand: 'Reebok',
      price: 75,
      location: 'California'
    },
    {
      brand: 'Assics',
      price: 95,
      location: 'France'
    },
  ]

  totalProdCount = this.products.length;
   
  totalProductsOver = this.products.filter(p => p.price > 100).length;

  totalProductsUnder = this.products.filter(p => p.price < 100).length;
  
}
 