import {Animal} from './animal';
import {GiveVoice} from '../interfaces/giveVoice';

export class Cat extends Animal {

  wet = true;
  numberOfLimbs = 4;

  constructor(name: string) {
    super();
    this.name = name;
  }

  speak() {
    return 'Miau!!!';
  }

  // getNumberOfLimbs(){
  //   return this.numberOfLimbs;
  // }
}
