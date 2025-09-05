package com.example.vex.repository;

import com.example.vex.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    // Spring Data JPA cria os métodos CRUD automaticamente!
}