import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = "Vegeta";
  public age:number = 50;
  public originName:string ="Principe de los Sayayin";
  public checkName:boolean = true;
  public checkAge:boolean = true;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getDescription():string{
    return `${this.name} - ${this.originName} - ${this.age} `;
  }

  changeHeroe():void{
    this.name = "Goku";
    this.originName = "El sayajin criado en la tierra";
    this.checkName=false;

  }

  changeAge():void{
    this.age = 45;
    this.checkAge = false;
  }

  resetForm():void{
    this.name="Vegeta";
    this.age=50;
    this.originName = "Principe de los Sayayin";
    this.checkName = true;
    this.checkAge = true;
  }

}
