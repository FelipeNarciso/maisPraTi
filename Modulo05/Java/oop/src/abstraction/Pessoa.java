package abstraction;

public class Pessoa {

    private String nome;

    private char genero;

    private String CPF;

    private String nascimento;

    private int idade;

    private double altura;

    private double peso;


    public Pessoa(String nome, int idade){

        {
            System.out.println("Olá alunos!");
        }


        this.nome = nome;
        this.idade = idade;
    }


    public String getNome(){
        return this.nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }


    public static void main(String[] args) {
        Pessoa minhaPessoa = new Pessoa("Jaques" , 23);

        minhaPessoa.nome = "João";
        minhaPessoa.altura = 1.60;
        System.out.println(minhaPessoa.nome);
        System.out.println(minhaPessoa.altura);

        Pessoa segundaPessoa = new Pessoa("Jaques" , 23);

        segundaPessoa.nome = "Maria";
        segundaPessoa.altura = 1.70;
        System.out.println(segundaPessoa.nome);
        System.out.println(segundaPessoa.altura);
    }

}


