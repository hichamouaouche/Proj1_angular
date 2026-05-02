import { Component, signal } from '@angular/core';

import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
   selector: 'app-root',
   templateUrl: './app.html',
   styleUrl: './app.css',
   standalone: true, // Assure-toi que standalone est bien présent si c'est de l'Angular 19
   imports: [
     RouterLink,
     RouterOutlet  // <--- AJOUTE ÇA ICI
   ],
 })
 export class App {
    email : String = "hichamouaouche2002@gmail.com";
 }
