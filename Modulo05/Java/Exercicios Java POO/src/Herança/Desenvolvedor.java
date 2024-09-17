package Herança;

public class Desenvolvedor extends Funcionario{

    public Desenvolvedor(String nome, Double salario) {
        super(nome, salario);
    }

    public String calcularBonus(){
        double salario = getSalario();
        return String.format("O bônus do desenvolvedor é: R$ %.2f", salario * 0.10);
    }

    @Override
    public void trabalhar(){
        System.out.println("O desenvolvedor está codando...");
    }

    public static void main(String[] args) {
        Desenvolvedor desenvolvedor = new Desenvolvedor("Felipe" , 5000.00);

        System.out.println(desenvolvedor.getSalario());

        System.out.println(desenvolvedor.calcularBonus());

        desenvolvedor.trabalhar();
    }
}
