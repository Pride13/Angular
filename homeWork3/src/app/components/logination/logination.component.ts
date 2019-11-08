import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-logination',
  templateUrl: './logination.component.html',
  styleUrls: ['./logination.component.css']
})
export class LoginationComponent {

  constructor() { }

  @Input() userToLogin;
  @Output() logUser = new EventEmitter();

  userToLog() {
      this.logUser.emit(this.userToLogin);
  }
}
