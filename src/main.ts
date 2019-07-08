import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {Abattoir} from './app/models/abattoir';
import {Dog} from './app/models/dog';
import {Cat} from './app/models/cat';
import {Ostrich} from './app/models/ostrich';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


const abattoir = Abattoir.getInstance();

const dog = new Dog('Burek');
const cat = new Cat('Mruczek');
const ostrich = new Ostrich('Strusiek');

console.log(dog.name);
abattoir.slaughter(dog);
console.log(cat.name);
abattoir.slaughter(cat);
console.log(ostrich.name);
abattoir.slaughter(ostrich);

