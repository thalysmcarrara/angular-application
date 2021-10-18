import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
@Injectable({
  providedIn: 'root'
})

// essa classe é um singleton pois está sendo injetada no 'root'
// da aplicação. Quer dizer que pode haver conflito caso multiplos 
// componentes chamem este service pois há uma única instância global.

export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string):void {
    this.snackBar.open(msg,'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
