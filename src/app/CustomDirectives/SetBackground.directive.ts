// Import the artifacts needed
import { Directive, OnInit, ElementRef } from "@angular/core";

// create the meta data for the directive
@Directive({
    // Create the selector enclosed in brackets to indicate the use case (to be used in elements)
    selector: '[setBackground]'  
})

export class SetBackground implements OnInit {

    // instaed of writing private here we can do it in the contructor
    // private element: ElementRef

    // we provide an access modifier
    // behind the scenes TS create a private element property 
    constructor(private element: ElementRef) {
        // So we end up not needing line 11 and line 17
        this.element = element;

        // We normaly don't want to keep this kind of logic in the constructor
        // because it is used to create an instance of that component or the directive
        // and when it gets called it's properties are not initialized yet

        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'White'
    }

    // Remember that ngOnInit gets called after all the properties are fully initialized
    ngOnInit() {
        // we retreive the element in which the directives selector is attached to 
        // and assign the code below
        this.element.nativeElement.style.backgroundColor = '#36454F';
        this.element.nativeElement.style.color = 'White'
    }
}