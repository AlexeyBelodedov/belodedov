import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Work } from "../models/work.model";

@Injectable()
export class ModalService {
  private works = new BehaviorSubject(null);
  private work = new BehaviorSubject(null);

  constructor() {
  }

  getWork() {
    return this.work.asObservable();
  }


  getWorks() {
    return this.works.asObservable();
  }


  setWorks(works) {
    this.works.next(works);
  }

  setWork(work: Work) {
    this.work.next(work);
  }

}
