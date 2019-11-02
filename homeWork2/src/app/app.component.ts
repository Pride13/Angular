import { Component } from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {isBoolean} from "util";

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
  showdlessInfo = false;
  showedHouseIndex: number;
  userFind: string;
  id: number;
  crtHouse: boolean = false;

  users = [
    {email: 'Vasyl@gmail.com', name: 'Vasyl',
      password: '1225', is_blocked: false},
    {email: 'Ostap@gmail.com', name: 'Ostap', password: '1325', is_blocked: true},
    {email: 'Ira@gmail.com', name: 'Karpa', password: '125', is_blocked: false},
    {email: 'Roman@gmail.com', name: 'Roman', password: '1425', is_blocked: false},
    {email: 'Mykola@gmail.com', name: 'Mykola', password: '1525', is_blocked: true}
  ];

  homes = [
    {id: 1, city: 'Lviv', street: 'Ugorska', square: '250',
      owner: this.users[Math.floor(Math.random() * this.users.length)]},
    {id: 2, city: 'Kyiv', street: 'Bandery', square: '86',
      owner: this.users[Math.floor(Math.random() * this.users.length)]},
    {id: 3, city: 'Rivne', street: 'Rahivska', square: '110',
      owner: this.users[Math.floor(Math.random() * this.users.length)]},
    {id: 4, city: 'IF', street: 'Upa', square: '59',
      owner: this.users[Math.floor(Math.random() * this.users.length)]},
    {id: 5, city: 'Lutsk', street: 'Shuhevycha', square: '300',
      owner: this.users[Math.floor(Math.random() * this.users.length)]}
  ];


  userToRegister = {
    email: '',
    name: '',
    password: '',
    is_blocked: Boolean(Math.floor(Math.random() * 3))
  };

  userToLogin = {
    email: '',
    password: ''
  };

  houseToRegister = {
    id: 6,
    city: '',
    street: '',
    square: '',
    owner: this.users[Math.floor(Math.random() * this.users.length)]
  };

  onInput(ev) {
    this.inputValue = ev.target.value;
  };

  Click() {
    this.searchValues = this.inputValue;
  };

  reg() {
    this.isReg = !this.isReg;
    this.isLog = false;
    this.crtHouse = false;
  };

  log() {
    this.isLog = !this.isLog;
    this.isReg = false;
    this.crtHouse = false;
  };

  userToReg(usRegister: NgForm) {
    this.users.push(this.userToRegister);
    console.log(this.users);
    console.log(usRegister);
  };

  showFullInfo(id: number) {
    this.showdlessInfo = !this.showdlessInfo;
    this.showedHouseIndex = id;
  };

  userToLog(usLogin: NgForm) {
    const findUserFromArray = this.users.find(user =>
      this.userToLogin.email === user.email &&
      this.userToLogin.password === user.password);
    findUserFromArray ? this.userFind = 'Welcome' : this.userFind = 'User is not found'
    console.log(usLogin);
  };

  createHouse() {
    this.crtHouse = !this.crtHouse;
    this.isReg = false;
    this.isLog = false;
  };

  houseToReg(houseReg: NgForm) {
    this.homes.push(this.houseToRegister);
    console.log(this.homes);
    console.log(houseReg);
  };
}
