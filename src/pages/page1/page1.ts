import { Component } from '@angular/core';
import { Facebook, NativeStorage } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LogInPage } from '../log-in/log-in';
import { MyApp } from '../../app/app.component';
import { Http } from '@angular/http';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  user: any;
  public userReady: boolean = false;

  public statusLogin:any = 0;
  public  ma  = MyApp;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
    
    // if(!this.userReady){
    //   this.login();
    // }


  }

  login(){
    
    this.navCtrl.push(LogInPage);
 }

  loginReady(){
    this.navCtrl.push(this);
 }

 ionViewCanEnter(){
    let env = this;
    NativeStorage.getItem('user')
    .then(function (data){
      env.user = {
        name: data.name,
        gender: data.gender,
        picture: data.picture
      };
        env.userReady = true;
        
        //env.loginReady();
    }, function(error){
      console.log(error);
      //env.login();
    });
  }

  doFbLogout(){
   // let nav = this.navCtrl;
    Facebook.logout()
    .then(function(response) {
      //user logged out so we will remove him from the NativeStorage
      NativeStorage.remove('user');
      //nav.push(LoginPage);
      this.login();
    }, function(error){
      console.log(error);
    });
  }

  share(){
    
   
  
  }

}

