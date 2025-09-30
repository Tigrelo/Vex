import { Routes } from '@angular/router';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';

export const routes: Routes = [
  // Quando o usuário acessar a URL principal, redireciona para /pedidos
  { path: '', redirectTo: '/pedidos', pathMatch: 'full' },
  // A URL /pedidos vai mostrar a lista de pedidos
  { path: 'pedidos', component: PedidoListComponent },
  // A URL /pedidos/novo vai mostrar o formulário de criação
  { path: 'pedidos/novo', component: PedidoFormComponent },
  // O ':id' é um parâmetro dinâmico para o ID do pedido
  { path: 'pedidos/editar/:id', component: PedidoFormComponent }
];
