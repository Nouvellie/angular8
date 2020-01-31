import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

export const ROUTES:Routes = [
    { path: '', component: HomeComponent},
    { path: 'search', component: SearchComponent },
    { path: 'artist', component: ArtistComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''},
]