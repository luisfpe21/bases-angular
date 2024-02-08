import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/Hero/hero.component";
import { ListComponent } from "./components/List/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:
  [
    HeroComponent,
    ListComponent
  ],
  exports:
  [
    HeroComponent,
    ListComponent
  ],
  imports:
  [
    CommonModule
  ]
})
export class HeroModule{

}
