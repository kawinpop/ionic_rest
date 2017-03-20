import { Component } from '@angular/core';
import { Facebook, NativeStorage } from 'ionic-native';
import { NavController , NavParams} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LogInPage } from '../log-in/log-in';
import { MyApp } from '../../app/app.component';

/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
