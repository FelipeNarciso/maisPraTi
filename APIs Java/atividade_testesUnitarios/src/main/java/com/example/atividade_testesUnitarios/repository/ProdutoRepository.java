package com.example.atividade_testesUnitarios.repository;

import com.example.atividade_testesUnitarios.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}