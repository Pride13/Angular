 import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {

  constructor() { }

  @Input() houseToRegister;
  @Output() regHouse = new EventEmitter();

  houseToReg() {
    this.regHouse.emit(this.houseToRegister);
  }
}
