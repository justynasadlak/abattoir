import {Animal} from './animal';
import {GiveVoice} from '../interfaces/giveVoice';

export class Dog extends Animal {
  clean = false;
  numberOfLimbs = 4;

  constructor(name: string) {
    super();
    this.name = name;
  }

  speak() {
    return 'Hau!!!';
  }

  // getNumberOfLimbs(){
  //   return this.numberOfLimbs;
  // }
}
