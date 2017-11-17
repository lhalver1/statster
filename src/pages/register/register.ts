import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { AngularFireAuth } from 'angularfire2'

import { User } from '../../models/user';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
              // private afAuth: AngularFireAuth) {}

   register(user: User) {
    // try {
    //   // const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    //   console.log(result);
    // } 
    // catch (e) {
    //   console.log(e);
    // }
  }

}
