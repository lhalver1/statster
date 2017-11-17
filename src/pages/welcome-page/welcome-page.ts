import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, MenuController } from 'ionic-angular';

import { RosterPage } from '../roster/roster';
import { StatsHomePage  } from '../stats-home-page/stats-home-page';

import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'welcome-page',
  templateUrl: 'welcome-page.html'
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;
  skipMessage: string = 'Skip';

  constructor(public navCtrl: NavController, public globalService: GlobalService,
              public navParams: NavParams, public menu: MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  
  ionViewWillEnter() {
    this.slides.update();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the welcome page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the welcome page
    this.menu.enable(true);
  }

  skip() {
    this.globalService.setRootPage(StatsHomePage);
    this.navCtrl.setRoot(StatsHomePage);
  }

  slideChanged() {
    if (this.slides.isEnd()) {
      this.skipMessage = "Alright, I got it";
    }
  }

}
