import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { TourNgBootstrapModule } from 'ng2-tour';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth'

import { MyApp } from './app.component';
import { RosterPage } from '../pages/roster/roster';
import { WelcomePage } from '../pages/welcome-page/welcome-page';
import { PlayerInfoPage } from '../pages/player-info-page/player-info-page';
import { StatsHomePage } from '../pages/stats-home-page/stats-home-page';
import { AddEditGamePage } from '../pages/add-edit-game/add-edit-game';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AnimateItemSliding } from '../components/animate-item-sliding/animate-item-sliding';

import { PlayerProvider } from '../providers/player-provider';
import { GlobalService } from '../services/global.service';
import { FIREBASE_CONFIG } from './firebase.config';

@NgModule({
  declarations: [
    MyApp,
    RosterPage,
    PlayerInfoPage,
    WelcomePage,
    StatsHomePage,
    AddEditGamePage,
    LoginPage,
    RegisterPage,
    AnimateItemSliding
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RosterPage,
    PlayerInfoPage,
    WelcomePage,
    StatsHomePage,
    AddEditGamePage,
    LoginPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    Splashscreen,
    PlayerProvider,
    GlobalService,
    Camera,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
