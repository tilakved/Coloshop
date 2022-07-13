import {animate, group, state, style, transition, trigger} from '@angular/animations';
export const slideUpDown =
trigger('slideUpDown', [
  transition(':enter', [
    style({ height: '0' , opacity: 0, overflow: 'hidden' }),
    animate(200, style({ height: '*' , opacity: 1 }))
  ]),
  transition(':leave', [
    animate(200, style({ height: 0, overflow: 'hidden' }))
  ])
]);
