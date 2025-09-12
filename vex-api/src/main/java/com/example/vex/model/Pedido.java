package com.example.vex.model;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "pedidos")
@Data // Lombok para gerar getters, setters, toString, etc.
public class Pedido {

    public static Object StatusPedido;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String descricao;

    @Column(name = "endereco_origem", nullable = false)
    private String enderecoOrigem;

    @Column(name = "endereco_destino", nullable = false)
    private String enderecoDestino;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusPedido status;

    @Column(name = "data_criacao", updatable = false)
    private LocalDateTime dataCriacao = LocalDateTime.now();


}

