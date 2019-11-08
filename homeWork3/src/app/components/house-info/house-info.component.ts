import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent {

  showdlessInfo = false;
  showedHouseIndex: number;

  constructor() { }

  @Input() someHouse;

  showFullInfo(id: number) {
    this.showdlessInfo = !this.showdlessInfo;
    this.showedHouseIndex = id;
  }
}
