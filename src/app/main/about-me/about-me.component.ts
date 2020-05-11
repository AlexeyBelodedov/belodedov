import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeStateTrigger } from "../../shared/animations/fade.animations";

@Component({
  selector: 'jz-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [fadeStateTrigger]
})
export class AboutMeComponent implements OnInit {
  @HostBinding('@fade') a = true;
  constructor() { }

  ngOnInit() {
  }

}
