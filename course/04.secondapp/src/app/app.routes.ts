import { RouterModule, Routes, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES:Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);