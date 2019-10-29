import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeWork1';
  inputValue: string;
  searchValues: string;
  isLog: boolean = false;
  isReg: boolean = false;

  homes = [
    {city: 'Lviv', street: 'Ugorska', square: 250},
    {city: 'Kyiv', street: 'Bandery', square: 86},
    {city: 'Rivne', street: 'Rahivska', square: 110}
  ];

  onInput(ev) {
    this.inputValue = ev.target.value;
  }

  Click() {
    this.searchValues = this.inputValue;
  }

  reg() {
    this.isReg = !this.isReg;
    this.isLog = false;
  }

  log() {
    this.isLog = !this.isLog;
    this.isReg = false;
  }
}
