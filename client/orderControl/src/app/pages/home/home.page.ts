import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  buttonColor: string;

  constructor(private menuCtrl: MenuController,
              private colorService: ColorService) {}

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.buttonColor = this.colorService.getColor();
  }

  changeColor(color) {
    this.colorService.setColor(color);
    this.buttonColor = this.colorService.getColor();
  }

}
