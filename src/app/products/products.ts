import { Component, OnInit } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [], //Vide car @if et @for n'en ont pas besoin
  //imports: [
   //NgForOf,
   // NgIf
    //],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  products! : Array<any>;
  constructor() {
    }
  ngOnInit():void {
    this.products = [
      {id : 1, name : "Computer", price : 2300, selected : true},
      {id : 2, name : "Printer", price : 1200, selected : false},
      {id : 3, name : "Smart Phone", price : 1100, selected : true}
     ]
    }

  handleDelete(product: any): void {
    let v = confirm ('etes vous sure de vouloir suprrimer? ');
    if(v==true) {
        this.products = this.products.filter((p: any) => p.id != product.id);
        }
      }


  }
