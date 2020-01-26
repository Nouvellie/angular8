import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes:
import { APP_ROUTING } from './app.routes'

// Components:
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';




@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HeroesComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
