import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes:
import { APP_ROUTING } from './app.routes'

// Services:
import { HeroesService } from './services/heroes.service';

// Components:
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HomeComponent,
    HeroeComponent,
    HeroesComponent,
    NavbarComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule
    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
