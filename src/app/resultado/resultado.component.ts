import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  @Input() resultadoHijo: number | null = null;
}
