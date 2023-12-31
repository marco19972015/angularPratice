import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";


@Directive({
    selector: '[setBackground]'  
})

export class SetBackground implements OnInit {

    // private renderer: Renderer2;

    // This is from the alia concept
    // @Input('setBackground') backColor: string = '#36454F'
    // @Input() textColor: string = 'White'



    // We use @Input to do some property binding with the alias of setBackground 
    // the property needs to be assigned an object when used in the template
    @Input('setBackground') changeTextAndBackColor: {backColor: string, textColor: string}



    constructor(private element: ElementRef, private renderer: Renderer2) {
        // this.renderer = renderer;
    }


    ngOnInit() {
        // native element contains a reference to the underlining DOM element. Gives us a direct access to the DOM 
        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'White'

        // we can set css styles using setStyle method
        // takes three required parameters 
            // 1. Is the element on which we want to set the style
            // 2. The style we want to set
            // 3. The value for that style 
        // the renderer class creates an abstraction between the DOM and the code 
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor)
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor)
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title')
    }
}