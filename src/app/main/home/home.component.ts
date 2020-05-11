import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeStateTrigger } from "../../shared/animations/fade.animations";

@Component({
  selector: 'jz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeStateTrigger]
})
export class HomeComponent implements OnInit {
  @HostBinding('@fade') a = true;
  constructor() { }

  ngOnInit() {
  }

}
