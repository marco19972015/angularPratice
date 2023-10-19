import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() allBrands: number = 0;
  @Input() priceOver: number = 100;
  @Input() priceUnder: number = 100;


}
