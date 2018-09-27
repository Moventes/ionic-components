import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Loading, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/first';
import { ComponentesConfigModel } from './../models/componentes-config.model';
import { PromptProvider } from './prompt';



const LOADING_TEXT = 'Loading...';
/**
 * Provides the user's context to the application
 * This provider should be used to store and find the current course, mission, questions being answered
 *
 *  * TO HIDE BACKGROUND AROUND IMG:
 * ion-loading.wait-for-promise-modal {
  .loading-wrapper {
    background: transparent;
    box-shadow: none;
  }
}
 */
@Injectable()
export class LoadingProvider {
  // private defaultLoadingText: string = null;
  private loading: Loading = null;
  @Inject('COMPONENTES_CONFIG') config: ComponentesConfigModel;
  private delayBeforeDisplayingImg = 1200;

  private knownMessages = {};

  private promiseQueue = Promise.resolve();
  // private promiseQueueLength = 0;

  constructor(
    @Inject('LOADING_GIF_PATH') private gifPath: string,
    private loadingCtrl: LoadingController,
    private translate: TranslateService,
    private prompt: PromptProvider
  ) {
    if (this.config && this.config.imgDisplayDelayForLoading) {
      this.delayBeforeDisplayingImg = this.config.imgDisplayDelayForLoading;
    }
  }

  initLoading(loadingMessage): Loading {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: '',
        cssClass: 'vertical-flex-centered wait-for-promise-modal'
      });
      this.loading.present();
      setTimeout(() => {
        if (this.loading) {
          this.loading.setContent(`<img style="width:100%" src="${this.gifPath}" alt="Loading"></img>
          <p style="text-align: center;">${loadingMessage}</p>`);
        }
      }, this.delayBeforeDisplayingImg);
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
    this.getLoadingMessage(loadingMessage)
      .then(message => {
        this.initLoading(message);
        return this.promiseQueue.then(() => promise);
      }).then((...args) => {
        if (!keepLoadingIfResolved && this.loading) {
          this.loading.dismiss();
          this.loading = null;
        }
      }).catch((...err) => {
        if (this.loading) {
          this.loading.dismiss();
          this.loading = null;
        }
        if (promptError) {
          this.prompt.error(err[0]);
        }
      });
    return promise;
  }
}
