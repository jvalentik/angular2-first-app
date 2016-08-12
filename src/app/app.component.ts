import {Component} from '@angular/core';

@Component({
    selector: 'first-app',
    templateUrl: 'app.component.html',
    styles: [`
      h1 {
        color: red;
      }
    `]
  }
)
export class AppComponent {
  deleted = false;
}
