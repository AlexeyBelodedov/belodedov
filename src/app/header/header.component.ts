import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showAside = false;
  @Output() burgerShow: EventEmitter<any> = new EventEmitter();
  @Output() burgerClose: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.showAside = !this.showAside;
    if (this.showAside) {
      this.burgerShow.emit(true);
    } else {
      this.burgerClose.emit(false);
    }
  }
}
