import { animate, style, transition, trigger } from "@angular/animations";

export const modalAnimation = trigger('modalAnimation', [
  transition('void => *', [style({
    transformOrigin: "right bottom",
    transform: "rotate3d(0, 0, 1, 45deg)",
    opacity: 0
  }), animate(500, style({
    transformOrigin: 'right bottom',
    transform: 'rotate3d(0, 0, 0, 0)',
    opacity: 1
  }))]),
  transition('* => void', [style({
    transformOrigin: 'right bottom',
    transform: 'rotate3d(0, 0, 0, 0)',
    opacity: 1
  }), animate(500, style({
    transformOrigin: 'right bottom',
    transform: 'rotate3d(0, 0, 1, -45deg)',
    opacity: 0
  }))]),
]);
