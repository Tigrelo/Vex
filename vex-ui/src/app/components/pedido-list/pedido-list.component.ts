// src/app/components/pedido-list/pedido-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../models/pedido.model';
import { PedidoService } from '../../services/pedido.service';

// Imports do Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-pedido-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatToolbarModule, MatProgressSpinnerModule],
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {

  pedidos: Pedido[] = [];
  // 1. Define as colunas que serão exibidas na tabela.
  // Os nomes aqui DEVEM corresponder aos 'matColumnDef' no HTML.
  displayedColumns: string[] = ['id', 'descricao', 'status', 'enderecoOrigem', 'enderecoDestino'];

  // (Bônus) Variável para controlar o spinner de carregamento
  isLoading = true;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe(dados => {
      this.pedidos = dados;
      this.isLoading = false; // Desliga o spinner quando os dados chegam
    });
  }
}
