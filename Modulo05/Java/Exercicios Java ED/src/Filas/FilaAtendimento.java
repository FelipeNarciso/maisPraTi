package Filas;
import java.util.LinkedList;
import java.util.Queue;

public class FilaAtendimento {
    private Queue<String> clientes;

    public FilaAtendimento() {
        this.clientes = new LinkedList<>();
    }

    public void adicionarNaFila(String nomeCliente){
        this.clientes.add(nomeCliente);
    }

    public void chamarProximo(){
        if(this.clientes.size() == 0){
            throw new IllegalArgumentException("No momento a fila está vazia!");
        }else{
            this.clientes.poll();
        }
    }

    public String verFila(){
        return "Fila de clientes: " + this.clientes.toString() + "\nPróximo atendimento: " + this.clientes.peek();
    }

    public static void main(String[] args) {
        FilaAtendimento filaAtendimento = new FilaAtendimento();

        filaAtendimento.adicionarNaFila("João");
        filaAtendimento.adicionarNaFila("Maria");
        filaAtendimento.adicionarNaFila("José");
        filaAtendimento.adicionarNaFila("Paulo");
        filaAtendimento.adicionarNaFila("Amanda");
        filaAtendimento.adicionarNaFila("Felipe");

        System.out.println(filaAtendimento.verFila());

        filaAtendimento.chamarProximo();

        System.out.println(filaAtendimento.verFila());
    }
}
