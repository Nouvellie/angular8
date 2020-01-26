import { RouterModule, Routes, Route } from '@angular/router';

// Components:
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import { HomeComponent } from './components/home/home.component';



const APP_ROUTES:Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);