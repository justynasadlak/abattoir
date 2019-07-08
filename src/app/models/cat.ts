import {Animal} from './animal';

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

}
