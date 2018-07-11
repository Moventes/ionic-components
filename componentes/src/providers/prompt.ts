import { Injectable, Inject } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ComponentesConfigModel } from './../models/componentes-config.model';

/**
 * Class used to display informations to the user
 */
@Injectable()
export class PromptProvider {

  @Inject('COMPONENTES_CONFIG') config: ComponentesConfigModel;

  private TOAST_DURATION = 3000;

  private toasts: Toast[] = [];

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
      if (this.config && this.config.promptParseFunction) {
        message = this.config.promptParseFunction(message);
      } else {
        if (message.display) {
          message = message.display;
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
        this.pushToast(translation, level);
      }).catch(() => {
        this.pushToast(message, level);
      });
  }

  private pushToast(message: string, level: string) {
    const toast = this.toastCtrl.create({
      message,
      duration: this.TOAST_DURATION,
      position: 'bottom',
      cssClass: 'toast-' + level
    });

    toast.onDidDismiss(() => {
      this.toasts.shift();
      if (this.toasts.length > 0) {
        this.show();
      }
    });

    this.toasts.push(toast);

    if (this.toasts.length === 1) {
      this.show();
    }
  }

  show() {
    this.toasts[0].present();
  }

}
