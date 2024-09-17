package Herança;

public class Gerente extends Funcionario{

    public Gerente(String nome, Double salario) {
        super(nome, salario);
    }

    public String calcularBonus(){
        double salario = getSalario();
        return String.format("O bônus do gerente é: R$ %.2f", salario * 0.20);
    }

    @Override
    public void trabalhar(){
        System.out.println("O gerente está trabalhando...");
    }

    public static void main(String[] args) {
        Gerente gerente = new Gerente("João" , 15000.00);

        System.out.println(gerente.getSalario());

        System.out.println(gerente.calcularBonus());

        gerente.trabalhar();
    }
}
