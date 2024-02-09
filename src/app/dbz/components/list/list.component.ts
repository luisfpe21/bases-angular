import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList:Character[]=
  [
    {
      name:"Red",
      power:100
    },
    {
      name:"blue",
      power:150
    }
  ]

  // @Output()
  // public eventToEmitIndexToDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public eventToEmitIdToDelete: EventEmitter<string> = new EventEmitter();

  // public deleteCharacterByIndex(index:number):void{
  //   console.log(index);
  //   console.log({index});
  //   this.eventToEmitIndexToDelete.emit(index);
  // }

  public deleteCharacterById(id:string):void{
    if(!id) return;

    this.eventToEmitIdToDelete.emit(id);
  }


}
