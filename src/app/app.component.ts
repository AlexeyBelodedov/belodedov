import { Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'jz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alexey Belodedov';
  @ViewChild('aside', { static: true }) private aside;
  onOpen(e) {
    e === true ? this.aside.nativeElement.classList.add('opened') : this.aside.nativeElement.classList.remove('opened');
  }
  onClose(e) {
    e === true ? this.aside.nativeElement.classList.add('opened') : this.aside.nativeElement.classList.remove('opened');
  }
  constructor (renderer: Renderer2) {

  }
}
