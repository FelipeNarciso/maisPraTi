package com.example.many_to_many.service;

import com.example.many_to_many.model.Aluno;
import com.example.many_to_many.model.Curso;
import com.example.many_to_many.repository.AlunoRepository;
import com.example.many_to_many.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    public Aluno criarAluno(Aluno aluno) {
        return (Aluno) alunoRepository.save(aluno);
    }

    public List<Aluno> listarTodosAlunos() {
        return alunoRepository.findAll();
    }

    public Aluno encontrarAlunoPorId(Long id) throws Throwable {
        return (Aluno) alunoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Aluno não encontrado com ID: " + id));
    }

    public void adicionarAlunoAoCurso(Long alunoId, Long cursoId) throws Throwable {
        Aluno aluno = encontrarAlunoPorId(alunoId);
        Curso curso = cursoRepository.findById(cursoId)
                .orElseThrow(() -> new RuntimeException("Curso não encontrado com ID: " + cursoId));

        curso.adicionarAluno(aluno);

        aluno.adicionarCurso(curso);

        alunoRepository.save(aluno);
        cursoRepository.save(curso);
    }


    public void removerAlunoDoCurso(Long alunoId, Long cursoId) throws Throwable {
        Aluno aluno = encontrarAlunoPorId(alunoId);
        Curso curso = (Curso) cursoRepository.findById(cursoId)
                .orElseThrow(() -> new RuntimeException("Curso não encontrado com ID: " + cursoId));

        curso.removerAluno(aluno);
        cursoRepository.save(curso);
    }

    public Set<Curso> listarCursosDoAluno(Long alunoId) throws Throwable {
        Aluno aluno = encontrarAlunoPorId(alunoId);
        return aluno.getCursos();
    }
}
