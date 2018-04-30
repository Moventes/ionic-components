import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ComponentesCommonModule } from 'mv-common-components';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddressPage } from '../pages/address/address';
import { CounterPage } from '../pages/counter/counter';
import { PhonePage } from '../pages/phone/phone';
import { IteratorPipePage } from '../pages/iterator-pipe/iterator-pipe';
import { RadioListPage } from '../pages/radio-list/radio-list';
import { YesNoListPage } from '../pages/yes-no-list/yes-no-list';

import { ComponentsIonicModule } from '../../componentes/src/componentes.module';


export function promptParse(message) {
  if (message && typeof message !== 'string') {
    if (message.display) {
      message = message.display
    } else if (message.error) {
      message = message.error;
    } else if (message.message) {
      message = message.message;
    } else {
      let stringified = '';
      for (var property in message) {
        if (message.hasOwnProperty(property) && (typeof message[property] !== 'object' || message[property].toString)) {
          stringified += message[property] + '  ';
        }
      }
      message = stringified;
    }
  }
  return message;
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddressPage,
    CounterPage,
    PhonePage,
    RadioListPage,
    YesNoListPage,
    IteratorPipePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsIonicModule.forRoot({
      promptParseFunction: promptParse
    }),
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ComponentesCommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddressPage,
    CounterPage,
    PhonePage,
    RadioListPage,
    YesNoListPage,
    IteratorPipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
