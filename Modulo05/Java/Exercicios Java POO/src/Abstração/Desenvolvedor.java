package Abstração;

public class Desenvolvedor extends Funcionario{

        private double salario = (super.getSalario() * 1.05);

        public Desenvolvedor(String nome, Double salario) {
            super(nome, salario);
            setCargoAtual("desenvolvedor");
        }

        @Override
        public void verSalario() {
            System.out.println("O salario base do desenvolvedor é: " + super.getSalario());
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
            return 0.05;
        }
}