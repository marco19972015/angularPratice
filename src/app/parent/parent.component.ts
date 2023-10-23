import { Component } from '@angular/core';
import { Product } from '../Models/Product';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  // Binding this to SearchTechChange (search child component) 
  searchText: string = "";

  selectedProduct: Product;


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
  }

  // The bind happens because we pass in the value into our method
  setSearchText(value: any) {
    // We can then just link the searchText property to the input value being passed in
    this.searchText = value
  }
}
 