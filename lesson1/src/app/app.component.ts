import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello front-end devs';
  inputedValue: string = '';

  status: boolean = false;
  numb: number = 0;

  users = [
    {
      name: 'Victor',
      car: false
    },
    {
      name: 'Dima',
      car: true
    },
    {
      name: 'Oleh',
      car: false
    },
    {
      name: 'Ira',
      car: false
    },
  ];

  mouseClick() {
    console.log('Click')
  }

  onInput(ev) {
    this.inputedValue = ev.target.value
  }

  changeStatus() {
    this.status = !this.status
  }

  incremI() {
    this.numb++
  }
}
