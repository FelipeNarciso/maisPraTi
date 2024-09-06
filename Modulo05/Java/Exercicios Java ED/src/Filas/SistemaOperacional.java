package Filas;
import java.util.Queue;
import java.util.LinkedList;

public class SistemaOperacional {
    private Queue<String> processos;
    private String processosExecucao;


    public SistemaOperacional() {
        this.processos = new LinkedList<>();
        this.processosExecucao = "Nenhum";
    }

    public void adicionarProcesso(String processo){
        this.processos.add(processo);
    }

    public void executarProximoprocesso(){
        if(this.processos.size() == 0){
            throw new IllegalArgumentException("Todos os processos já foram executados");
        }else{
            this.processosExecucao = this.processos.peek();
            this.processos.poll();
        }
    }

    public String verProcessos(){
        if(this.processos.size() == 0){
            return "No momento não tem nenhum processo na fila!" + "\nProcesso em execução: " + this.processosExecucao;
        }else{
            return "Fila de processos: " + this.processos.toString() + "\nPróximo processo na fila: " + this.processos.peek() + "\nProcesso em execução: " + this.processosExecucao;
        }
    }

    public static void main(String[] args) {
        SistemaOperacional sistemaOperacional = new SistemaOperacional();

        sistemaOperacional.adicionarProcesso("Abrir IntelliJ");
        sistemaOperacional.adicionarProcesso("Abrir VS Code");
        sistemaOperacional.adicionarProcesso("Abrir GitHub");

        System.out.println(sistemaOperacional.verProcessos());
        System.out.println("****************************");

        sistemaOperacional.executarProximoprocesso();

        System.out.println(sistemaOperacional.verProcessos());
        System.out.println("****************************");

        sistemaOperacional.executarProximoprocesso();

        System.out.println(sistemaOperacional.verProcessos());
        System.out.println("****************************");

        sistemaOperacional.executarProximoprocesso();

        System.out.println(sistemaOperacional.verProcessos());
        System.out.println("****************************");


    }
}
