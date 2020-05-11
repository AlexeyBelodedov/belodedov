import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[jzContactLine]'
})
export class ContactLineDirective {

  @HostListener('focus', ['$event.target'])
  onFocus(target: any) {
    this.renderer.addClass(target.parentNode,'active');
  }

  @HostListener('focusout', ['$event.target'])
  onFocusout(target: any) {
    this.renderer.removeClass(target.parentNode,'active');
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

}
