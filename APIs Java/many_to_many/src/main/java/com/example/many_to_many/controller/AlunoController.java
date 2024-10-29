package com.example.many_to_many.controller;

import com.example.many_to_many.model.Aluno;
import com.example.many_to_many.model.Curso;
import com.example.many_to_many.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/aluno")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @PostMapping
    public ResponseEntity<Aluno> criarAluno(@RequestBody Aluno aluno) {
        Aluno novoAluno = alunoService.criarAluno(aluno);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoAluno);
    }

    @PostMapping("/{id}/cursos/{cursoId}")
    public ResponseEntity<Void> matricularAlunoEmCurso(@PathVariable Long id, @PathVariable Long cursoId) throws Throwable {
        alunoService.adicionarAlunoAoCurso(id, cursoId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}/cursos/{cursoId}")
    public ResponseEntity<Void> removerAlunoDeCurso(@PathVariable Long id, @PathVariable Long cursoId) throws Throwable {
        alunoService.removerAlunoDoCurso(id, cursoId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}/cursos")
    public ResponseEntity<Set<Curso>> listarCursosDoAluno(@PathVariable Long id) throws Throwable {
        Set<Curso> cursos = alunoService.listarCursosDoAluno(id);
        return ResponseEntity.ok(cursos);
    }
}
