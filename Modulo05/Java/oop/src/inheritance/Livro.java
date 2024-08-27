package inheritance;

public final class Livro {
    public void ler(){
        System.out.println("O livro está sendo lido!");
    }

    public static void main(String[] args) {
        Livro meuLivro = new Livro();

        meuLivro.ler();
    }
}

