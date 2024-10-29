package com.example.many_to_many.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String descricao;

    @ManyToMany(mappedBy = "cursos")
    private Set<Aluno> alunos = new HashSet<>();

    public void adicionarAluno(Aluno aluno) {
        this.alunos.add(aluno);
        aluno.getCursos().add(this);
    }

    public void removerAluno(Aluno aluno) {
        this.alunos.remove(aluno);
        aluno.getCursos().remove(this);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Curso)) return false;
        Curso curso = (Curso) o;
        return id != null && id.equals(curso.id);
    }

    @Override
    public int hashCode() {
        return 31;
    }
}

