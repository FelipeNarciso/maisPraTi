import Abstração.*;
import Polimorfismo.Bicicleta;
import Polimorfismo.Carro;
import Polimorfismo.IMeioTransporte;
import Polimorfismo.Trem;

import java.util.ArrayList;
import java.util.List;

import Polimorfismo.Animal;
import Polimorfismo.Cachorro;
import Polimorfismo.Gato;
import Polimorfismo.Vaca;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
//        IMeioTransporte [] transportes = new IMeioTransporte[3];
//
//        transportes[0] = new Carro();
//        transportes[1] = new Bicicleta();
//        transportes[2] = new Trem();
//
//        for (IMeioTransporte transporte : transportes){
//            transporte.acelerar();
//            transporte.frear();
//            System.out.println("***********");
//        }
//
//        List<Animal> animal = new ArrayList<>();
//
//        animal.add(new Cachorro());
//        animal.add(new Gato());
//        animal.add(new Vaca());
//
//        for (Animal animais : animal){
//            animais.emitirSom();
//            System.out.println("***********");
//        }

        Empresa empresa = new Empresa();

        Funcionario gerente1 = new Gerente("João" , 12900.00);
        Funcionario desenvolvedor1 = new Desenvolvedor("Carlos" , 8500.00);
        Funcionario estagiario1 = new Estagiario("Maria" , 4500.00);

        empresa.adicionarFuncionario(gerente1);
        empresa.adicionarFuncionario(desenvolvedor1);
        empresa.adicionarFuncionario(estagiario1);

        empresa.calcularFolhaPagamento();

        empresa.promoverFuncionario(estagiario1);

        empresa.calcularFolhaPagamento();

        empresa.promoverFuncionario(estagiario1);

        empresa.calcularFolhaPagamento();

        estagiario1.verBonus();

    }
}