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

  prepareAnimal(dog: Dog): void;
  prepareAnimal(cat: Cat): void;

  prepareAnimal(animal: Dog | Cat): void {
    if(typeof animal === Dog){
      animal.clean = true;
    }
    if(typeof animal === Cat){
      animal.wet = false;
    }
  }

  slaughter(animal: Animal) {
    for (let i = 1; i <= animal.getNumberOfLimbs(); i++) {
      console.log(animal.speak());
    }
  }
}
