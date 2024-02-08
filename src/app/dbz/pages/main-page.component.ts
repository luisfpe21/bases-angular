import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: 'main-page.component.html'
})

export class MainPageDbzComponent {
  public characters:Character[] =
  [
    {
      name:"Goku",
      power:1000
    },
    {
      name:"Maestro Roshi",
      power:500
    },
    {
      name:"Yamcha",
      power:250
    }
  ];
}
