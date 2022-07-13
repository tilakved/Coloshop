import {animate, keyframes, style, transition, trigger} from '@angular/animations';

export const inOutAnimation =
        trigger(
            'inOutAnimation',
            [
                transition(
                    ':enter',
                    [
                        style({ height: 0}),
                        animate('0.3s cubic-bezier(.17,.67,.83,.67)' ,
                            keyframes([
                                style({ height: '*' , visibility: 'visible' }),
                            ]))
                    ]
                ),
                transition(
                    ':leave',
                    [
                        style({ height: '*'  }),
                        animate('0.3s cubic-bezier(.17,.67,.83,.67)',
                            keyframes([
                                style({ height: '*' , visibility: 'hidden'}),
                                style({ height: 0 , visibility: 'hidden' }),
                            ]))
                    ]
                )
            ]
        );

