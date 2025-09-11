
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. IMPORTE SEU COMPONENTE DA LISTA AQUI
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. ADICIONE O COMPONENTE NO ARRAY DE IMPORTS
  imports: [CommonModule, PedidoListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vex-ui';
}
