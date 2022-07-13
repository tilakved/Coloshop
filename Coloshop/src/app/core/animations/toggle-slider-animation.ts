import {animate, state, style, transition, trigger} from '@angular/animations';

export const ToggleSliderAnimation =
  trigger('ToggleSliderAnimation', [
    // ...
    state('left', style({
      left: '{{new}}px',
      width: '{{width}}px'
    }), {params: { new: '4', width: '80' }}),
    state('right', style({
      left: '{{new}}px',
      width: '{{width}}px'
    }), {params: {new: '4', width: '80'}}),
    transition('right => left', [
      animate('0.3s')
    ]),
    transition('left => right', [
      animate('0.3s')
    ]),
  ]);
