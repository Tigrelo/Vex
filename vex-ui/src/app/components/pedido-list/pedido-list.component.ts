import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../models/pedido.model';
import { PedidoService } from '../../services/pedido.service';

// Imports do Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

// Import do Módulo de Roteamento
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pedido-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    RouterModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,

  ],
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {

  pedidos: Pedido[] = [];

  // 3. ADICIONAR A COLUNA 'ACOES'
  displayedColumns: string[] = ['id', 'descricao', 'status', 'enderecoOrigem', 'enderecoDestino', 'acoes'];
  isLoading = true;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe(dados => {
      this.pedidos = dados;
      this.isLoading = false;
    });
  }

  deletar(id: number): void {
    this.pedidoService.deletarPedido(id).subscribe(() => {
      // Remove o item da lista na tela sem precisar recarregar a página
      this.pedidos = this.pedidos.filter(p => p.id !== id);
    });
  }
}
