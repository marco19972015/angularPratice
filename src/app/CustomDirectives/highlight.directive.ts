import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  // the goal is to listen to mouse enter event and mouse out event
  // we use @HostListener to let angular know what to do when we are in mouseEnter and mouseOut

  // We use ElementRef to get a reference of the div element and save that to prop element
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  

  // Whenever the mouse enter event happens we want to execute something
  // proper name is using @HostListener to create an event handler function (onMouseEnter)
  @HostListener('mouseenter') onMouseEnter() {  // we pass in a string value, that value being the event name
    this.renderer.addClass(this.element.nativeElement,'highlight-product')  // will add the css class to the element 
  }

  // We want to use it as an event handler function, which will execute whenever the mouse out event happens 
  @HostListener('mouseout') onMouseOut() {
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product')
  }


}
