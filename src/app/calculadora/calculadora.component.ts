import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
import { ResultadoComponent } from "../resultado/resultado.component";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, FormularioComponent, ResultadoComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  operandoA: number = 0;
  operandoB: number = 0;
  resultadoPadre: number = 0;

  sumar() {
    this.resultadoPadre = this.operandoA + this.operandoB;
  }

  procesarResultado(resultadoHijo: number) {
    this.resultadoPadre = resultadoHijo;
    }

}
