import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '../../services/pedido.service';
import { Router, RouterModule } from '@angular/router';

// IMPORTS NECESSÁRIOS PARA O ANGULAR MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// ADICIONE OS MÓDULOS DO MATERIAL
@Component({
  selector: 'app-pedido-form',
  standalone: true,
  imports: [

    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {
  // Objeto para guardar os dados do formulário
  novoPedido: any = {
    descricao: '',
    enderecoOrigem: '',
    enderecoDestino: ''
  };

  constructor(
    private pedidoService: PedidoService,
    private router: Router // Injeta o Router
  ) {}

  // Método chamado quando o formulário é enviado
  onSubmit(): void {
    this.pedidoService.criarPedido(this.novoPedido).subscribe(() => {
      // Após o sucesso, navega de volta para a lista
      this.router.navigate(['/pedidos']);
    });
  }
}
