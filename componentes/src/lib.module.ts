import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { ComponentsCommonModule } from 'mv-common-components';
import { AddressAutocompleteComponent } from './components/address-autocomplete/address-autocomplete';
import { AddressAutocompleteModalComponent } from './components/address-autocomplete/address-autocomplete-modal';
import { AddressInputComponent } from './components/address-input/address-input';
import { AutocompleteComponent } from './components/autocomplete/autocomplete';
import { AutocompleteModalComponent } from './components/autocomplete/autocomplete-modal';
import { CounterInputComponent } from './components/counter-input/counter-input';
import { ElementOfArrayComponent } from './components/element-of-array/element-of-array';
import { ErrorsDisplayComponent } from './components/errors-display/errors-display';
import { PhoneInputWithCodeComponent } from './components/phone-input-with-code/phone-input-with-code';
import { PhoneInputComponent } from './components/phone-input/phone-input';
import { RadioListComponent } from './components/radio-list/radio-list';
import { YesNoListComponent } from './components/yes-no-list/yes-no-list';
import { ComponentesConfigModel } from './models/componentes-config.model';
import { AnswersProvider } from './providers/answers';
import { LoadingProvider } from './providers/loading';
import { PromptProvider } from './providers/prompt';



export * from './providers/answers';
export * from './providers/loading';
export * from './providers/prompt';

@NgModule({
  declarations: [
    AddressAutocompleteComponent,
    AddressAutocompleteModalComponent,
    AddressInputComponent,
    AutocompleteComponent,
    AutocompleteModalComponent,
    CounterInputComponent,
    ElementOfArrayComponent,
    ErrorsDisplayComponent,
    PhoneInputComponent,
    PhoneInputWithCodeComponent,
    RadioListComponent,
    YesNoListComponent,
  ],
  imports: [
    IonicModule,
    ComponentsCommonModule,
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
    AddressAutocompleteComponent,
    AddressAutocompleteModalComponent,
    AddressInputComponent,
    AutocompleteComponent,
    AutocompleteModalComponent,
    CounterInputComponent,
    ElementOfArrayComponent,
    ErrorsDisplayComponent,
    PhoneInputComponent,
    PhoneInputWithCodeComponent,
    RadioListComponent,
    YesNoListComponent
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
