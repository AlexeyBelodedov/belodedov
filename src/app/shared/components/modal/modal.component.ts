import { Component, HostBinding, OnInit } from '@angular/core';
import { ModalService } from "../../services/modal.service";
import { Work } from "../../models/work.model";
import { modalAnimation } from "../../animations/modal.animation";

@Component({
  selector: 'jz-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [modalAnimation]
})
export class ModalComponent implements OnInit {
  @HostBinding('@modalAnimation') a;
  work: Work;
  works: Work[];

  constructor(public modalService: ModalService) {

  }

  ngOnInit() {
    this.modalService.getWorks().subscribe(works => this.works = works);
    this.modalService.getWork().subscribe(work => this.work = work);
  }

  close() {
    this.modalService.setWork(null);
  }

  navPrevious() {
    if (this.work.id !== 0) {
      this.works.find(x => x.id === this.work.id - 1);
      this.work = this.works.find(x => x.id === this.work.id - 1);
    }
  }

  navNext() {
    if (this.work.id < this.works.length - 1) {
      this.works.find(x => x.id === this.work.id + 1);
      this.work = this.works.find(x => x.id === this.work.id + 1);
    }
  }

}
