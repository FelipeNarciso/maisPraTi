package com.example.many_to_many.repository;

import com.example.many_to_many.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository <Curso, Long> {
}
