package Polimorfismo;

public class Carro implements IMeioTransporte{

    @Override
    public void acelerar(){
        System.out.println("O carro está acelerando.");
    }

    @Override
    public void frear(){
        System.out.println("O carro está freiando.");
    }
}
