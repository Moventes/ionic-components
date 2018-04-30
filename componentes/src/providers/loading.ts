import { Injectable, Inject } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/first';

import { PromptProvider } from './prompt';

const LOADING_TEXT = 'Loading...';

/**
 * Provides the user's context to the application
 * This provider should be used to store and find the current course, mission, questions being answered
 */
@Injectable()
export class LoadingProvider {
  // private defaultLoadingText: string = null;
  private loading: Loading = null;

  private knownMessages = {};

  constructor(
    @Inject('LOADING_GIF_PATH') private gifPath: string,
    private loadingCtrl: LoadingController,
    private translate: TranslateService,
    private prompt: PromptProvider
  ) {
  }

  initLoading(loadingMessage): Loading {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content:
          `<img style="width:100%" src="${this.gifPath}" alt="Loading"></img>
          <p style="text-align: center;">${loadingMessage}</p>`,
        cssClass: 'vertical-flex-centered'
      });
      this.loading.present();
    }
    return this.loading;
  }

  private getLoadingMessage(loadingMessage?: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const messageKey = loadingMessage || 'LOADING.PLEASE_WAIT';

      if (this.knownMessages.hasOwnProperty(messageKey)) {
        resolve(this.knownMessages[messageKey]);
      } else {
        this.translate.get(messageKey).first().toPromise()
          .then((message) => {
            if (message) {
              this.knownMessages[messageKey] = message;
            } else {
              this.knownMessages[messageKey] = LOADING_TEXT;
            }
            resolve(this.knownMessages[messageKey]);
          }).catch(err => reject(err));
      }
    });
  }

  waitForPromise<T>(promise: Promise<T>, promptError = false, loadingMessage?: string, keepLoadingIfResolved = false): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.getLoadingMessage(loadingMessage)
        .then(message => {
          this.initLoading(message);
          return promise;
        }).then((...args) => {
          if (!keepLoadingIfResolved && this.loading) {
            this.loading.dismiss();
            this.loading = null;
          }
          resolve(...args);
        }).catch((...err) => {
          if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
          }
          if (promptError) {
            this.prompt.error(err[0]);
            resolve();
          } else {
            reject(...err);
          }
        });
    });
  }
}
