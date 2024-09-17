package Abstração;

public class Estagiario extends Funcionario {

    double salario = super.getSalario();

    public Estagiario(String nome, Double salario) {
        super(nome, salario);
        setCargoAtual("estagiario");
    }

    @Override
    public void verSalario() {
        System.out.println("O salario base do estagiário é: " + super.getSalario());
    }

    @Override
    public void verBonus() {
        double valor = super.getSalario() * super.getBonus();
        System.out.println(String.format("O bônus do funcionário é: R$ %.2f", valor));
    }

    @Override
    public double salarioCompleto() {
        return salario;
    }

    @Override
    public Double calcularBonus(){
        return 0.0;
    }
}
