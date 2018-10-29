import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FilmeSalvoPage } from '../filme-salvo/filme-salvo';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Inserindo filme...',
      duration: 1500,
      dismissOnPageChange: true
    }).present();

    this.navCtrl.push(FilmeSalvoPage);
  }





}
