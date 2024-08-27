//import abstraction.ContaBancaria;
//import encapsutation.BankAccount;
//import encapsutation.BankTransaction;
import polymorphism.Animal;
import polymorphism.Cat;
import polymorphism.Dog;

public class Main {
    public static void main(String[] args) {

//        ContaBancaria minhaConta = new ContaBancaria("Felipe", "37150934000", "09/06/2003");
//
//        minhaConta.depositar(200);
//        minhaConta.depositar(400);
//
//        minhaConta.sacar(100);
//
//        System.out.println(minhaConta.verSaldo());
//
//        System.out.println(minhaConta.verExtrato());

//        BankAccount account = new BankAccount("12345" , 1000);
//
//        BankTransaction depositTransaction = new BankTransaction(account, 15000, BankTransaction.TransactionType.DEPOSIT);
//
//        depositTransaction.execute();
//
//        System.out.println(depositTransaction.getDetails());

        Animal myAnimal = new Animal();
        Dog myDog = new Dog();
        Cat myCat = new Cat();

        myAnimal.makeSound();
        myDog.makeSound();
        myCat.makeSound();
    }
}