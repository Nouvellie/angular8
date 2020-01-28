import { RouterModule, Routes, Route } from '@angular/router';

// Components:
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SearchComponent } from './components/search/search.component';





const APP_ROUTES:Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '', component: HomeComponent },
    { path: 'search/:searchText', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''},
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);