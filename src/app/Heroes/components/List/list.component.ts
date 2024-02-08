import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Superman', 'Batman', 'Flash', 'Acuaman', 'Linterna Verde', 'Mujer Maravilla'];
  public heroRemoved: string|undefined;
  removeLast():void{
    this.heroRemoved = this.heroNames.pop();
    console.log(this.heroRemoved);
  }
}
