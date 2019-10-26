import { Component } from '@angular/core';
import { trigger,
  transition,
  query,
  style,
  animate,
  animateChild,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelSwitch', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-300%'})
        ]),
        query(':leave', animateChild()),
        group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '300%'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%'}))
        ]),
        query(':enter', animateChild()),
        ])
      ])
    ])
  ]
})

export class AppComponent {
  title = 'health-data';
}
