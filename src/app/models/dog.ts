import {Animal} from './animal';

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

}
