import {animate, state, style, transition, trigger} from '@angular/animations';

export const slideToggle =
  trigger('slideToggle', [
    state('out', style({
      height: '0',
      opacity: '0'
    })),
    state('in', style({
      height: '*',
      opacity: '1'
    })),
    transition('out => in', animate('100ms ease-in')),
    transition('in => out', animate('100ms ease-out'))
  ]);
