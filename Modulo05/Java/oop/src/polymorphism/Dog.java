package polymorphism;

//SOBRESCRITA
public class Dog extends Animal{
    @Override
    public void makeSound() {
        System.out.println("O cachorro late Au Au!");
    }
}
