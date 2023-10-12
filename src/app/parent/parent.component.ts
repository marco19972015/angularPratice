import { Component } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  firstName: string = 'John';
  lastName: string = 'Smith';
  age: number = 25
  
}
 