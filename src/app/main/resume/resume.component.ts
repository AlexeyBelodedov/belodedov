import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeStateTrigger } from "../../shared/animations/fade.animations";

@Component({
  selector: 'jz-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [fadeStateTrigger]
})
export class ResumeComponent implements OnInit {
  @HostBinding('@fade') a = true;

  public skills:any[] = [
    {
      name: 'HTML5',
      percent: 85
    },
    {
      name: 'CSS3, SCSS',
      percent: 80
    },
    {
      name: 'JS',
      percent: 65
    },
    {
      name: 'JQuery',
      percent: 75
    },
    {
      name: 'Typescript, Angular 2+',
      percent: 40
    },
    {
      name: 'PHP',
      percent: 30
    },
    {
      name: 'Git',
      percent: 35
    }
  ];
  constructor() { }

  ngOnInit() {

  }

}
