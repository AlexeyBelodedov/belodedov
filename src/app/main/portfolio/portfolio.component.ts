import { Component, HostBinding, OnInit } from '@angular/core';
import { ModalService } from "../../shared/services/modal.service";
import { Work } from "../../shared/models/work.model";
import { fadeStateTrigger } from "../../shared/animations/fade.animations";

@Component({
  selector: 'jz-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fadeStateTrigger]
})
export class PortfolioComponent implements OnInit {
  @HostBinding('@fade') a = true;
  works = [
    {
      name: "Студия БИС",
      id: 0,
      img: "../../../../assets/images/portfolio-1.jpg",
      author: "Alexey Belodedov",
      url: 'http://votpodarki.ru/',
      date: "15.10.18",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "СБИК",
      id: 1,
      img: "../../../../assets/images/portfolio-2.jpg",
      author: "Alexey Belodedov",
      url: 'http://sbik.ru/',
      date: "27.10.18",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },

    {
      name: "Фестиваль",
      id: 2,
      img: "../../../../assets/images/portfolio-5.jpg",
      author: "Alexey Belodedov",
      url: 'http://festival2019.orenriver.ru/',
      date: "20.05.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Сургутская поликлиника",
      id: 3,
      img: "../../../../assets/images/portfolio-6.jpg",
      author: "Alexey Belodedov",
      url: 'https://gp4surgut.ru/',
      date: "30.04.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "БТСС",
      id: 4,
      img: "../../../../assets/images/portfolio-7.jpg",
      author: "Alexey Belodedov",
      url: 'https://btss-samara.ru/',
      date: "10.04.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Технология ремонта",
      id: 5,
      img: "../../../../assets/images/portfolio-8.jpg",
      author: "Alexey Belodedov",
      url: 'http://rem-technology.ru/',
      date: "29.04.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Корнер",
      id: 6,
      img: "../../../../assets/images/portfolio-9.jpg",
      author: "Alexey Belodedov",
      url: 'https://kornerpack.ru/',
      date: "28.03.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Металлон",
      id: 7,
      img: "../../../../assets/images/portfolio-10.jpg",
      author: "Alexey Belodedov",
      url: 'http://metallon-surgut.ru/',
      date: "28.01.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Ripeko",
      id: 8,
      img: "../../../../assets/images/portfolio-11.jpg",
      author: "Alexey Belodedov",
      url: 'http://ритальные-услуги63.рф/',
      date: "14.01.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Global Juris",
      id: 9,
      img: "../../../../assets/images/portfolio-12.jpg",
      author: "Alexey Belodedov",
      url: 'http://advokat-oren.ru/',
      date: "25.12.18",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Ассортимент-ННОВ",
      id: 10,
      img: "../../../../assets/images/portfolio-13.jpg",
      author: "Alexey Belodedov",
      url: 'http://a-metall52.ru/',
      date: "02.01.18",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Big&Small",
      id: 11,
      img: "../../../../assets/images/portfolio-14.jpg",
      author: "Alexey Belodedov",
      url: 'http://sushibs.ru/',
      date: "17.12.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Агроспецмашина",
      id: 12,
      img: "../../../../assets/images/portfolio-15.jpg",
      author: "Alexey Belodedov",
      url: 'http://asm-krd.ru/',
      date: "21.01.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "ГК Стройхолдинг",
      id: 13,
      img: "../../../../assets/images/portfolio-16.jpg",
      author: "Alexey Belodedov",
      url: 'http://гкстройхолдинг.рф/',
      date: "15.11.18",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Мебель офис",
      id: 14,
      img: "../../../../assets/images/portfolio-18.jpg",
      author: "Alexey Belodedov",
      url: 'http://mebeloffice56.ru/',
      date: "03.07.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "НТКС",
      id: 15,
      img: "../../../../assets/images/portfolio-19.jpg",
      author: "Alexey Belodedov",
      url: 'http://контроль-строй.рф/',
      date: "01.03.19",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Стартрейд",
      id: 16,
      img: "../../../../assets/images/portfolio-3.jpg",
      author: "Alexey Belodedov",
      url: 'http://соль.net/',
      date: "02.11.18",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "ГК Безопасность",
      id: 17,
      img: "../../../../assets/images/portfolio-4.jpg",
      author: "Alexey Belodedov",
      url: 'http://гкбезопасность.рф/',
      date: "12.11.18",
      tech: ["HTML", "CSS", "JS", "PHP", "Drupal 7"]
    },
    {
      name: "Интернет-магазин чая",
      id: 18,
      img: "../../../../assets/images/chya.jpg",
      author: "Alexey Belodedov",
      url: "http://chaykoff.com.ua/",
      date: "26.02.17",
      tech: ["HTML5", "CSS3", "JS", "PHP", "Opencart 2.1"]
    },
    {
      name: "Интернет-магазин вин",
      id: 19,
      img: "../../../../assets/images/wine.jpg",
      author: "Alexey Belodedov",
      url: "http://fernandezdearcaya.wine/",
      date: "05.12.17",
      tech: ["HTML5", "CSS3", "JS", "PHP", "Opencart 1.5"]
    },
    {
      name: "Мой сайт-портфолио + блог",
      id: 20,
      img: "../../../../assets/images/my-site.jpg",
      author: "Alexey Belodedov",
      url: "",
      date: "21.05.18",
      tech: ["HTML5", "CSS3", "JS", "Angular 5.0.2", "Node.js", "MongoDB"]
    }];
  work: Work;

  constructor(private modalService: ModalService) {
    this.modalService.getWork().subscribe(work => this.work = work);
  }

  ngOnInit() {

  }

  show(work) {
    this.modalService.setWorks(this.works);
    this.modalService.setWork(work);
    this.work = work;
  }

}
