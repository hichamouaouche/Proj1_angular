import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <--- AJOUTER CET IMPORT
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get("http://localhost:8883/products");
  }

  // Changer 'void' par 'Observable<any>'
  deleteProduct(product: any): Observable<any> {
    return this.http.delete("http://localhost:8883/products/" + product.id);
  }
}
