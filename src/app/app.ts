import { Component, signal } from '@angular/core';

import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',

  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterLink
    ],

})
export class App {
   email : String = "hichamouaouche2002@gmail.com";
}
