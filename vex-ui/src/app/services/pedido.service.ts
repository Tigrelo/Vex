
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private readonly apiUrl = 'http://localhost:8080/api/pedidos';

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  criarPedido(pedido: Omit<Pedido, 'id' | 'status' | 'dataCriacao'>): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }
  getPedidoById(id: number): Observable<Pedido> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pedido>(url);
  }
  atualizarPedido(id: number, pedido: Omit<Pedido, 'id' | 'status' | 'dataCriacao'>): Observable<Pedido> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Pedido>(url, pedido);
  }

  deletarPedido(id: number): Observable<void> {
    // A URL será, por exemplo, http://localhost:8080/api/pedidos/5

    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
