package abstraction;
import java.util.ArrayList;

//Desenvolvam classe ContaBancaria com constructor, getters, setters, depositar, sacar, transferir, exibirExtrato, registrarExtrato
//validações, exceções, arrayList

public class ContaBancaria {

    private ArrayList<String> extrato = new ArrayList<>();

    private int saldo;

    private String nome;

    private String cpf;

    private String dataNascimento;


    public ContaBancaria(String nome, String cpf, String dataNascimento) {
        if(cpf.length() != 11){
            throw new IllegalArgumentException("O CPF só pode ter 11 dígitos!");
        }else{
            this.cpf = cpf;
        }
        this.nome = nome;

        this.dataNascimento = dataNascimento;
    }

    public void depositar(int valor) {
        this.saldo += valor;
        extrato.add("Depósito realizado: " + valor);
    }

    public int verSaldo() {
        return saldo;
    }

    public void sacar(int valor){
        this.saldo -= valor;
        extrato.add("Saque realizado: " + valor);
    }

    public String verExtrato(){
        return extrato.toString();
    }

}
