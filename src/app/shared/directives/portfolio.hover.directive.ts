import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[jzPortfolioHover]'
})
export class PortfolioHoverDirective {

  @HostListener('mouseenter', ['$event.target'])
  onMouseenter(target: any) {
    this.renderer.addClass(target, 'hover');
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseout(target: any) {
    this.renderer.removeClass(target, 'hover');
  }


  constructor(private renderer: Renderer2) {
  }
}
