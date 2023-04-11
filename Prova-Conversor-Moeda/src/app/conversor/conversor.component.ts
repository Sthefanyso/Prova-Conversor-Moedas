import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
     valor: number = 0;
     cambio: number = 0;
     resultado: number = 0; 


converter(){
  this.resultado = (this.valor) * (this.cambio);
  this.resultado = parseFloat(this.resultado.toFixed(2));
  }
} 