package Abstração;

import java.util.ArrayList;

public class Empresa {

    private ArrayList<Double> folhaPagamento = new ArrayList<>();

    public void adicionarFuncionario(Funcionario funcionario){
        Double salario = funcionario.salarioCompleto();
        folhaPagamento.add(salario);
    }

    public void calcularFolhaPagamento(){
        double total = 0;
        for (Double valor : folhaPagamento) {
            total += valor;
        }
        System.out.println(String.format("Total da folha de pagamento: R$ %.2f", total));
    }

    public void promoverFuncionario(Funcionario funcionario){
        double bonusAnterior = funcionario.getBonus();
        String cargo = funcionario.getCargoAtual();
        double salarioAnterior = funcionario.salarioCompleto();
        double novoSalario = 0;
        double novoBonus = funcionario.getBonus();

        if(cargo == "estagiario"){
            novoSalario = salarioAnterior * 1.05;
            novoBonus = 0.05;
            funcionario.setCargoAtual("desenvolvedor");
        } else if (cargo == "desenvolvedor") {
            novoSalario = salarioAnterior * 1.10;
            novoBonus = 0.10;
            funcionario.setCargoAtual("gerente");
        }else{
            System.out.println("Não é possível ocorrer uma promoção de cargo, pois gerente é o cargo máximo");
            return;
        }

        int index = folhaPagamento.indexOf(salarioAnterior + (salarioAnterior * bonusAnterior));

        folhaPagamento.set(index, novoSalario);
        funcionario.setBonus(novoBonus);

    }

}