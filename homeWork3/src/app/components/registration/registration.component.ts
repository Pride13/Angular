import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor() { }

  @Input() userToRegister;
  @Output() regUser = new EventEmitter();

  thisUserToReg() {
    this.regUser.emit(this.userToRegister);
  }
}
