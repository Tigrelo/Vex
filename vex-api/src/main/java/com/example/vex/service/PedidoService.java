package com.example.vex.service;

import com.example.vex.model.Pedido;
import com.example.vex.model.StatusPedido;
import com.example.vex.repository.PedidoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PedidoService {

    private final PedidoRepository pedidoRepository;

    public List<Pedido> listarTodos() {
        return pedidoRepository.findAll();
    }

    public Pedido criarPedido(Pedido pedido) {
        // A referência ao enum também foi corrigida
        pedido.setStatus(StatusPedido.AGUARDANDO_COLETA);
        pedido.setDataCriacao(LocalDateTime.now());
        return pedidoRepository.save(pedido);
    }

    public Pedido buscarPorId(Long id) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        return pedido.orElseThrow(() -> new RuntimeException("Pedido não encontrado! ID: " + id));
    }

    public Pedido atualizarPedido(Long id, Pedido pedidoAtualizado) {
        Pedido pedidoExistente = buscarPorId(id);
        pedidoExistente.setDescricao(pedidoAtualizado.getDescricao());
        pedidoExistente.setEnderecoOrigem(pedidoAtualizado.getEnderecoOrigem());
        pedidoExistente.setEnderecoDestino(pedidoAtualizado.getEnderecoDestino());
        return pedidoRepository.save(pedidoExistente);
    }

    public void deletarPedido(Long id) {
        if (!pedidoRepository.existsById(id)) {
            throw new RuntimeException("Pedido não encontrado! ID: " + id);
        }
        pedidoRepository.deleteById(id);
    }
}
