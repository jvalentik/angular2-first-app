import {Component} from '@angular/core';

@Component({
    selector: 'first-app',
    template: `
            <h1>Inline Template</h1>
            <p>in two lines</p>
            <app-other></app-other>
            <app-another></app-another>
    `,
    styles: [`
    h1 {
      color: red;
    }
    `]
  }
)
export class AppComponent {}
