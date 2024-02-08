import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CounterModule } from './Counter/counter.module';
import { HeroModule } from './Heroes/hero.module';
import { DbzModule } from './dbz/dbz.module';

// import { CounterComponent } from './Counter/counter.component';
// import { HeroComponent } from './Heroes/Hero/hero.component';
// import { ListComponent } from './Heroes/List/list.component';


@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
