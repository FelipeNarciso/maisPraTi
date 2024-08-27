package polymorphism;

//SOBRESCRITA

public class Cat extends Animal{
    @Override
    public void makeSound(){
        System.out.println("O gato faz miau!");
    }
}
