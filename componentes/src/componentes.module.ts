import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { AddressInputComponent } from './components/address-input/address-input';
import { CounterInputComponent } from './components/counter-input/counter-input';
import { ElementOfArrayComponent } from './components/element-of-array/element-of-array';
import { ErrorsDisplayComponent } from './components/errors-display/errors-display';
import { PhoneInputComponent } from './components/phone-input/phone-input';
import { RadioListComponent } from './components/radio-list/radio-list';
import { YesNoListComponent } from './components/yes-no-list/yes-no-list';

import { AnswersProvider } from './providers/answers';
import { LoadingProvider } from './providers/loading';
import { PromptProvider } from './providers/prompt';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ComponentesConfigModel } from './models/componentes-config.model';

export * from './providers/answers';
export * from './providers/loading';
export * from './providers/prompt';

@NgModule({
  declarations: [
    AddressInputComponent,
    CounterInputComponent,
    ElementOfArrayComponent,
    ErrorsDisplayComponent,
    PhoneInputComponent,
    RadioListComponent,
    YesNoListComponent,
  ],
  imports: [
    IonicModule,
    // IonicModule.forRoot(AddressInputComponent),
    // IonicModule.forRoot(CounterInputComponent),
    // IonicModule.forRoot(ElementOfArrayComponent),
    // IonicModule.forRoot(ErrorsDisplayComponent),
    // IonicModule.forRoot(PhoneInputComponent),
    // IonicModule.forRoot(RadioListComponent),
    // IonicModule.forRoot(YesNoListComponent),
    TranslateModule,
  ],
  exports: [
    AddressInputComponent,
    CounterInputComponent,
    ElementOfArrayComponent,
    ErrorsDisplayComponent,
    PhoneInputComponent,
    RadioListComponent,
    YesNoListComponent,
  ]
})
export class ComponentsIonicModule {

  static forRoot(componentesConfigModel: ComponentesConfigModel): ModuleWithProviders {
    return {
      ngModule: ComponentsIonicModule,
      providers: [
        { provide: 'COMPONENTES_CONFIG', useValue: componentesConfigModel },
        AnswersProvider,
        LoadingProvider,
        PromptProvider
      ]
    };
  }
}
