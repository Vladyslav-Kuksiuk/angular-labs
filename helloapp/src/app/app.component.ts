import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <p>Ім'я: {{name}}</p>
      <p>Вік: {{age}}</p>
      <input type="text" [value]="name"/>
      <input type="text" [value]="age"/>

      <br>

      <table border="1">
          <tr>
              <td [attr.colspan]="colspan">One-Two</td>
          </tr>
          <tr>
              <td>Three</td>
              <td>Four</td>
          </tr>
          <tr>
              <td>Five</td>
              <td>Six</td>
          </tr>
      </table>

      <br>

      <p>Кількість кліків {{count}}</p>
      <button (click)="increase()">Click</button>

      <br>

      <p>Кількість кліків {{count_2}}</p>
      <button (click)="increase_2($event)">Click</button>

      <br>

      <p>Привіт {{name}}</p>
      <input type="text" [(ngModel)]="name"/> <br><br>
      <input type="text" [(ngModel)]="name"/>
  `
})
export class AppComponent {
  name: string = "Tom";
  age: number = 25;
  colspan: number = 2;
  count: number = 0;
  count_2: number = 0;

  increase(): void {
    this.count++;
  }

  increase_2($event: any): void {
    this.count_2++;
    console.log($event);
  }
}

