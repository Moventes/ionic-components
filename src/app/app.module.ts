
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ComponentsCommonModule } from 'mv-common-components';
import { ComponentsIonicModule } from '../../componentes/src/componentes.module';
import { AutocompleteModalComponent } from '../../componentes/src/components/autocomplete/autocomplete-modal';
import { AddressPage } from '../pages/address/address';
import { AutocompletePage } from '../pages/autocomplete/autocomplete';
import { CounterPage } from '../pages/counter/counter';
import { HomePage } from '../pages/home/home';
import { IteratorPipePage } from '../pages/iterator-pipe/iterator-pipe';
import { PhonePage } from '../pages/phone/phone';
import { RadioListPage } from '../pages/radio-list/radio-list';
import { YesNoListPage } from '../pages/yes-no-list/yes-no-list';
import { MyApp } from './app.component';




export function promptParse(message) {
  if (message && typeof message !== 'string') {
    if (message.display) {
      message = message.display;
    } else if (message.error) {
      message = message.error;
    } else if (message.message) {
      message = message.message;
    } else {
      let stringified = '';
      for (const property in message) {
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
    AutocompletePage,
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
    ComponentsCommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddressPage,
    AutocompletePage,
    CounterPage,
    PhonePage,
    RadioListPage,
    YesNoListPage,
    IteratorPipePage,
    AutocompleteModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
