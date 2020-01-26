import { Component } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

const APP_ROUTES:Routes = [
    { path: 'home', component: Component },
    { path: '**', pathMatch: 'full', redirectTo: ''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);