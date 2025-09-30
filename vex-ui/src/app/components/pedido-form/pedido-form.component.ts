import { Component, OnInit } from '@angular/core'; // Adicione OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '../../services/pedido.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; // Adicione ActivatedRoute
import { Pedido } from '../../models/pedido.model';

// Imports do Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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
export class PedidoFormComponent implements OnInit { // Implemente OnInit

  pedido: Partial<Pedido> = {}; // Objeto único para criar ou editar
  isEditMode = false;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private route: ActivatedRoute // Injeta ActivatedRoute para ler a URL
  ) {
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      // Se existe um ID na URL, estamos no modo de edição
      this.isEditMode = true;
      const id = +idParam; // Converte a string para número
      this.pedidoService.getPedidoById(id).subscribe(data => {
        this.pedido = data; // Carrega os dados do pedido no formulário
      });
    }
  }

  onSubmit(): void {

    const pedidoParaSalvar = this.pedido as Omit<Pedido, 'id' | 'status' | 'dataCriacao'>;

    if (this.isEditMode && this.pedido.id) {
      // Modo de Edição
      this.pedidoService.atualizarPedido(this.pedido.id, pedidoParaSalvar).subscribe(() => {
        this.router.navigate(['/pedidos']);
      });
    } else {
      // Modo de Criação
      this.pedidoService.criarPedido(pedidoParaSalvar).subscribe(() => {
        this.router.navigate(['/pedidos']);
      });
    }
  }
}
