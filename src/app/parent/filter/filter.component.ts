import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  // Input allows us to bind the properties to attributes in our parent component
  @Input() allBrands: number = 0;
  // Contains the amount of products over 100 omes from the parent component 
  @Input() priceOver: number = 100;
  // Contains the amount of products under 100
  @Input() priceUnder: number = 100;
  // Contains the boolean 
  @Input() inStock: number = 0;


  // To output data we need to create an event emitter 
  // For the new EventEmitter we need to tell it what kind of data it wil emit, Hence type string generic 
  @Output() selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  
  // This controls what button is currently selected
  selectedFilterRadioButton: string = "all"

  // Method that is associated with the change event
  // We use this method to raise the event
  onSelectedFilterRadioButtonChanged() {
    // When we emit the event we can pass in the sFRB to dynamically change the value
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);    
  }
}
