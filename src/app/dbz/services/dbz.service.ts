import { Injectable } from '@angular/core';
import { v4 as uuidV4} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzCharactersService {
  public characters:Character[] =
  [
    {
      id: uuidV4(),
      name:"Goku",
      power:1000
    },
    {
      id:uuidV4(),
      name:"Maestro Roshi",
      power:500
    },
    {
      id:uuidV4(),
      name:"Yamcha",
      power:250
    }
  ];

  AddNewCharacterMain(character:Character){
    // const newCharacter:Character = {
    //   id:uuidV4(),
    //   name:name,
    //   power:power
    // };

    const newCharacter:Character = {...character,id:uuidV4()}

    this.characters.push(newCharacter);
  }
  // public DeleteCharacterByIndexMain(index:number):void{
  //   this.characters.splice(index,1);
  // }

  DeleteCharacterByIdMain(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
