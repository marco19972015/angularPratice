import { Component, EventEmitter, Output } from '@angular/core';

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


  updateSearchText(inputEl: HTMLInputElement) {
    // this.searchText = event.target.value;
    // console.log(inputEl);
    this.searchText = inputEl.value;
    this.SearchTextChange.emit(this.searchText);
   }
}
