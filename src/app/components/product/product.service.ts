import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})

// essa classe é um singleton pois está sendo injetada no 'root'
// da aplicação. Quer dizer que pode haver conflito caso multiplos 
// componentes chamem este service pois há uma única instância global.

export class ProductService {
  baseUrl = 'http://localhost:3001/products'
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string):void {
    this.snackBar.open(msg,'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
}
