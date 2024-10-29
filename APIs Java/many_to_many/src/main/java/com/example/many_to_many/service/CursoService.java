package com.example.many_to_many.service;

import com.example.many_to_many.model.Aluno;
import com.example.many_to_many.model.Curso;
import com.example.many_to_many.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    public Curso criarCurso(Curso curso) {
        return (Curso) cursoRepository.save(curso);
    }

    public List<Curso> listarTodosCursos() {
        return cursoRepository.findAll();
    }

    public Curso encontrarCursoPorId(Long id) throws Throwable {
        return (Curso) cursoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Curso não encontrado com ID: " + id));
    }

    public Set<Aluno> listarAlunosDoCurso(Long cursoId) throws Throwable {
        Curso curso = encontrarCursoPorId(cursoId);
        return curso.getAlunos();
    }
}
