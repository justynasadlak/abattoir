import {Animal} from './animal';
import {GiveVoice} from '../interfaces/giveVoice';

export class Ostrich extends Animal {
  numberOfLimbs = 2;

  constructor(name: string) {
    super();
    this.name = name;
  }

  speak() {
    return 'Łiii!!!';
  }

  // getNumberOfLimbs(){
  //   return this.numberOfLimbs;
  // }
}
