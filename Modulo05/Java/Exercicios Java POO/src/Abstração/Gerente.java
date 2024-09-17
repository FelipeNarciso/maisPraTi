package Abstração;

public class Gerente extends Funcionario{


    public Gerente(String nome, Double salario) {
        super(nome, salario);
        setCargoAtual("gerente");
    }

    @Override
    public void verSalario() {
        System.out.println("O salario base do gerente é: " + super.getSalario());
    }

    @Override
    public void verBonus() {
        double valor = super.getSalario() * super.getBonus();
        System.out.println(String.format("O bônus do funcionário é: R$ %.2f", valor));
    }

    @Override
    public double salarioCompleto() {
        double salario = (super.getSalario() * 1.10);
        return salario;
    }

    @Override
    public Double calcularBonus(){
        return 0.10;
    }
}
