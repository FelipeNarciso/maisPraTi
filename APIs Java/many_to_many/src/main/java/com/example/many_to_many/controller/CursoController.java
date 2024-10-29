package com.example.many_to_many.controller;

import com.example.many_to_many.model.Aluno;
import com.example.many_to_many.model.Curso;
import com.example.many_to_many.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/curso")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    @PostMapping
    public ResponseEntity<Curso> criarCurso(@RequestBody Curso curso) {
        Curso novoCurso = cursoService.criarCurso(curso);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCurso);
    }

    @GetMapping("/{id}/alunos")
    public ResponseEntity<Set<Aluno>> listarAlunosDoCurso(@PathVariable Long id) throws Throwable {
        Set<Aluno> alunos = cursoService.listarAlunosDoCurso(id);
        return ResponseEntity.ok(alunos);
    }
}
