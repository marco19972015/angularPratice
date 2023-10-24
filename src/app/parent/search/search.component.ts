import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  // 1. Create an event
  // When the onSearchTextChange event is raised we want to emmit string data.
  // Hence the string generic 
  // We use the Output decorator to bind the event in the parent component
  @Output() SearchTextChange: EventEmitter<string> = new EventEmitter<string>()

  // In the bottom property we want to store a reference to the input element
  @ViewChild('searchInput') searchInputEl: ElementRef; 

  updateSearchText() {
    // this.searchText = event.target.value;
    // console.log(inputEl);
    this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChange.emit(this.searchText);
   }
}
