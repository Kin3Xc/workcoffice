import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Geolocation } from '@ionic-native/geolocation';

// import pages
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { FavoritosPage } from '../pages/favoritos/favoritos';

import { MasPage } from '../pages/mas/mas';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyDJOMhLyQCxRryMxLWtCH-cLMa4Z45eCoI",
  authDomain: "workcoffice.firebaseapp.com",
  databaseURL: "https://workcoffice.firebaseio.com",
  projectId: "workcoffice",
  storageBucket: "workcoffice.appspot.com",
  messagingSenderId: "949394278476"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    FavoritosPage,
    
    MasPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    FavoritosPage,
    
    LoginPage,
    MasPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
