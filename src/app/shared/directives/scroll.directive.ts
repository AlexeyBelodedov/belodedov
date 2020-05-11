import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[jzScroll]'
})
export class ScrollDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.jzScrollerInit();

  }

  jzScrollerInit() {
    const scrollContainer = this.el;
    const scrollContent = this.el.nativeElement.children[0];
    this.renderer.setStyle(scrollContent, 'right', scrollContent.clientWidth - scrollContent.offsetWidth + "px");
    let scrollerHeight = this.calculateScrollerHeight(scrollContainer.nativeElement, scrollContent);
    if (scrollerHeight / scrollContainer.nativeElement.offsetHeight < 1) {
      const scrollbar = document.createElement("div");
      const scrollbarContainer = document.createElement("div");
      this.renderer.addClass(scrollbarContainer, 'scrollbar-container');
      this.renderer.addClass(scrollbar, 'scrollbar');
      this.renderer.appendChild(scrollbarContainer, scrollbar);
      this.renderer.appendChild(scrollContainer.nativeElement, scrollbarContainer);
      this.renderer.setStyle(scrollbar, 'height', scrollerHeight + 'px');
      scrollContent.addEventListener('scroll', ($e) => {
        this.renderer.setStyle(scrollbar, 'height', scrollbarContainer.clientHeight * scrollContent.clientHeight / scrollContent.scrollHeight + 'px');
        this.renderer.setStyle(scrollbar, 'top', scrollbarContainer.clientHeight * scrollContent.scrollTop / scrollContent.scrollHeight + 'px');
      });
      const event = new Event('scroll');
      window.addEventListener('resize', scrollContent.dispatchEvent.bind(scrollContent, event));
      scrollContent.dispatchEvent(event);
      scrollbar.addEventListener('mousedown', function (start) {
        start.preventDefault();
        const y = scrollbar.offsetTop;
        const onMove = function (end) {
          let delta = end.pageY - start.pageY;
          scrollbar.style.top = Math.min(scrollbarContainer.clientHeight - scrollbar.clientHeight, Math.max(0, y + delta)) + 'px';
          scrollContent.scrollTop = (scrollContent.scrollHeight * scrollbar.offsetTop / scrollbarContainer.clientHeight);
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', onMove);
        });
      });
    }
  }

  calculateScrollerHeight(scrollContainer, scrollContent) {
    const visibleRatio = scrollContainer.offsetHeight / scrollContent.scrollHeight;
    return visibleRatio * scrollContainer.offsetHeight;
  }

}
