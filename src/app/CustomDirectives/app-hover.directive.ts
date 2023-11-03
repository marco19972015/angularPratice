import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {
  // element prop holds button element
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // with HostBinding we can bind the property of a DOM element with the prop of a directive or component class
  @HostBinding('style.backgroundColor') backgroundColor: string = 'black'
  @HostBinding('style.border') border: string = 'none'
  @HostBinding('style.color') textColor: string = 'orange'

  // using HostListener to listen to mouseenter event and change the styles above
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'white';
    this.textColor = 'black';
    this.border = 'red solid 5px';
  }
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'black';
    this.border = 'none';
    this.textColor = 'orange';
  }

}
