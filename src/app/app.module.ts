import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule }    from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { HttpModule, JsonpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GameserviceProvider } from '../providers/gameservice/gameservice';

const  config = {
  apiKey: "AIzaSyDmEWhbAaFR_23CY5GtW6QgLmnhq4Plpws",
  authDomain: "mathtest-44a54.firebaseapp.com",
  databaseURL: "https://mathtest-44a54.firebaseio.com",
  projectId: "mathtest-44a54",
  storageBucket: "mathtest-44a54.appspot.com",
  messagingSenderId: "362616830073"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameserviceProvider,
  ]
})
export class AppModule {}
