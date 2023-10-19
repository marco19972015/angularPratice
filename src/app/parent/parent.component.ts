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
      price: 100,
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
      price: 100,
      location: 'California'
    },
    {
      brand: 'Assics',
      price: 175,
      location: 'France'
    },
  ]
   
  
}
 