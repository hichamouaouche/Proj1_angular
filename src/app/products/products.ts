import { Component, OnInit } from '@angular/core';
// On utilise ../ pour remonter d'un dossier
import { ProductService } from '../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products! : Array<any>;

  // On injecte bien ProductService
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.products = this.productService.getAllProducts();
  }

  handleDelete(product: any): void {
    let v = confirm('Êtes-vous sûr de vouloir supprimer ?');
    if (v === true) {
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
