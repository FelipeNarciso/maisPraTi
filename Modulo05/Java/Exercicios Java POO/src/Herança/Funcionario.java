package Herança;

public class Funcionario {
    protected String nome;
    protected Double salario;

    public Funcionario(String nome, Double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public Double getSalario() {
        return salario;
    }

    public void  trabalhar(){
        System.out.println("O funcionário está trabalhando...");
    }

}

