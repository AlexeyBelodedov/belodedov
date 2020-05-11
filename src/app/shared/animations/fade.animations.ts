import { animate, style, transition, trigger } from "@angular/animations";

export const fadeStateTrigger = trigger('fade', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(1.1)'
    }),
    animate(500)
  ]),
  transition(':leave', animate(300, style({
    opacity: 0,
    transform: 'scale(0.6)'
  })))
]);
