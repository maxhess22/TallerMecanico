import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openFirst() {
    this.menu.enable(false, 'first');
   
  

  }
  openEnd() {
    this.menu.open('end');
   
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }










}
