import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public eventToEmitNewCharacter:EventEmitter<Character> = new EventEmitter();

  public characterToAdd:Character = {
    name:'',
    power:0
  }

  getCharacter():void {
    console.log(this.characterToAdd);
    if(this.characterToAdd.name.length === 0) return;

    this.eventToEmitNewCharacter.emit(this.characterToAdd);

    this.characterToAdd ={name: '', power: 0};
  }
}
