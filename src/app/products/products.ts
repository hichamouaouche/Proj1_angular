import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: Array<any> = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (value: any) => { // Ajout de :any
        this.products = value; // Correction : on utilise 'value' ici
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  handleDelete(product: any): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ?')) {
      this.productService.deleteProduct(product).subscribe({
        next: (value: any) => {
          this.getAllProducts();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }
}
