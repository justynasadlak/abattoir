import {GiveVoice} from '../interfaces/giveVoice';

export class Animal implements GiveVoice {
  protected numberOfLimbs: number;
  private color: string;
  name: string;
  private type = 'ssak';

  getNumberOfLimbs() {
    return this.numberOfLimbs;
  }

  speak() {
  }
}
