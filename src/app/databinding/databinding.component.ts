import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is stringInterpolation';
  numberInterpolation = 2;
  myColor = 'cyan';

  onTest() {
    return true;
  }

  onClicked(value: string) {
    alert(value);
  }
}
