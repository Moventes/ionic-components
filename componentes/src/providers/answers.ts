import { Injectable } from '@angular/core';

@Injectable()
export class AnswersProvider {

  private _answers: Object;

  constructor() { }

  public get answers(): Object {
    return this._answers
  }

  public set answers(answers: Object) {
    this._answers = answers;
  }

}
