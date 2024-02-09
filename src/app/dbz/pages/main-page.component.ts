import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzCharactersService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: 'main-page.component.html'
})

export class MainPageDbzComponent {
  public constructor(
    private dbzService:DbzCharactersService
  )
  {  }

  get characters():Character[]{
    // return this.dbzService.characters;
    return [...this.dbzService.characters];
  }

  DeleteCharacterByIdMain(id:string):void{
    this.dbzService.DeleteCharacterByIdMain(id);
  }

  AddNewCharacterMain(character:Character):void{
    this.dbzService.AddNewCharacterMain(character);
  }



}
