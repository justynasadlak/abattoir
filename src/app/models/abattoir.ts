import {Dog} from './dog';
import {Cat} from './cat';
import {Animal} from './animal';

export class Abattoir {
  private static instance: Abattoir;

  private constructor() {
  }

  static getInstance() {
    if (!Abattoir.instance) {
      Abattoir.instance = new Abattoir();
    }
    return Abattoir.instance;
  }

  prepareAnimal(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
      animal.clean = true;
    }
    if (animal instanceof Cat) {
      animal.wet = false;
    }
  }

  slaughter(animal: Animal) {
    for (let i = 1; i <= animal.getNumberOfLimbs(); i++) {
      console.log(animal.speak());
    }
  }
}
