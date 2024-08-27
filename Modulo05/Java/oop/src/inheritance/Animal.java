package inheritance;

import java.util.SplittableRandom;

public abstract class Animal {
    String nome;

    public Animal(String nome){
        this.nome = nome;
    }

    public abstract void emitirSom();

    public void dormir(){
        System.out.println(this.nome + "Está dormindo");
    }

}
