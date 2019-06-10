import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FB_HAVEMETAL_CREDENTIALS } from './firebase.credentials';
//import { ComponentsModule } from '../components/components.module';
import { PopoverComponent } from '../components/popover/popover';
import { DuctCreationComponent } from '../components/duct-creation/duct-creation.component';
//import { SegmentComponent } from '../components/segment/segment.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MomentModule } from 'angular2-moment';
import { JobListService } from '../models/services/firebase.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PopoverComponent,
    DuctCreationComponent
    //SegmentComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Firebase initialization
    AngularFireModule.initializeApp(FB_HAVEMETAL_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PopoverComponent,
    DuctCreationComponent
    //SegmentComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JobListService
  ]
})
export class AppModule {}
