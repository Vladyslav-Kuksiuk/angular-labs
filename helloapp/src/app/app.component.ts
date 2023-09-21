import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [class.isRedBox]="isRed"></div>
    <div [class.isRedBox]="!isRed"></div>
    <input type="checkbox" [(ngModel)]="isRed"/>

    <br>

    <div [class]="blue"></div>

    <br>

    <div [style.backgroundColor]="isYellow? 'yellow' : 'blue'"></div>
    <div [style.background-color]="!isYellow ? 'yellow' : 'blue'"></div>
    <input type="checkbox" [(ngModel)]="isYellow"/>
  `,
  styles: [`
    div {
      width: 50px;
      height: 50px;
      border: 1px solid #ccc
    }

    .isRedBox {
      background-color: red;
    }

    .isBlueBox {
      background-color: blue;
    }
  `]
})
export class AppComponent {
  isRed = false;

  blue = "isBlueBox"

  isYellow = false;
}

