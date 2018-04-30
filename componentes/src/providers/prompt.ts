import { ComponentesConfigModel } from './../models/componentes-config.model';
import { Injectable, Inject } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Class used to display informations to the user
 */
@Injectable()
export class PromptProvider {

  @Inject('COMPONENTES_CONFIG') config: ComponentesConfigModel;

  private TOAST_DURATION = 5000;

  constructor(
    private toastCtrl: ToastController,
    private translate: TranslateService
  ) { }

  info(message: any) {
    this.presentToast(message, 'info');
  }

  warning(message: any) {
    this.presentToast(message, 'warn');
  }

  error(message: any) {
    this.presentToast(message, 'error');
  }

  private presentToast(messageObj: any, level: string) {
    if (!messageObj) {
      console.error('message to display is empty');
      return null;
    }
    console[level](messageObj);
    let message = messageObj;
    if (typeof message !== 'string') {
      // if (message.display) {
      //   message = message.display
      // } else if (message.message) {
      //   message = message.message;
      // } else if (message.code) {
      //   message = message.code;
      // } else {
      //   message = JSON.stringify(message);
      // }
      if (this.config && this.config.promptParseFunction) {
        message = this.config.promptParseFunction(message);
      } else {
        if (message.display) {
          message = message.display
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
    }
    this.translate.get(message).first().toPromise()
      .then(translation => {
        const toast = this.toastCtrl.create({
          message: translation,
          duration: this.TOAST_DURATION || 3000,
          position: 'bottom',
          cssClass: 'toast-' + level
        });
        toast.present();
      }).catch(error => {

        const toast = this.toastCtrl.create({
          message: message,
          duration: this.TOAST_DURATION || 3000,
          position: 'bottom',
          cssClass: 'toast-' + level
        });

        toast.present();
      })
  }

}
