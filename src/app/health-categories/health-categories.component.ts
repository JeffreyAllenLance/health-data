import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-health-categories',
  templateUrl: './health-categories.component.html',
  styleUrls: ['./health-categories.component.css'],
  animations: [
    trigger('clicked', [
      state('last-clicked', style({
        backgroundColor: 'rgb(155,51,255,0.6)',
      })),
      state('not-clicked', style({
        backgroundColor: 'rgb(0,0,0,0.5)',
      })),
      transition('last-clicked <=> not-clicked', [
        animate('.2s ease-in')
      ]),
    ])
  ]
})

export class HealthCategoriesComponent {
  lastClicked = '';

  constructor(private router: Router) {
    this.lastClicked = this.router.url;
  }

  setLastClicked(button: string) {
    this.lastClicked = button;
  }

}
