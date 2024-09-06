package ListaSimplismenteEncadeada;
import java.util.ArrayList;

public class GerenciadorDeTarefas {
    private ArrayList<String> tarefas;         // Armazena as tarefas ativas
    private ArrayList<String> tarefasConcluidas; // Armazena as tarefas concluídas

    public GerenciadorDeTarefas() {
        this.tarefas = new ArrayList<>();
        this.tarefasConcluidas = new ArrayList<>();
    }

    public void AdicionarTarefas(String tarefa){
        if(this.tarefas.contains(tarefa)){
            throw new IllegalArgumentException("Você já adicionou essa tarefa!");
        }else{
            this.tarefas.add(tarefa);
        }
    }

    public void removerTarefa(int index){
        if(index > this.tarefas.size() || index < 0){
            throw new IndexOutOfBoundsException("Índex fora dos limites ou inválido!");
        }else{
            this.tarefas.remove(index);
        }
    }

    public void concluirTarefa(int index){
        String tarefa = tarefas.get(index);
        this.tarefasConcluidas.add(tarefa);
        this.tarefas.remove(index);
    }

    public String verTarefas() {
        if (!this.tarefas.isEmpty()) {
            return "Tarefas: " + this.tarefas.toString() + "\nTarefas Concluídas: " + this.tarefasConcluidas.toString();
        } else {
            throw new IllegalArgumentException("Você não possui nenhuma tarefa no momento!");
        }
    }


    public static void main(String[] args) {
        GerenciadorDeTarefas tarefas = new GerenciadorDeTarefas();

        tarefas.AdicionarTarefas("Lavar carro");
        tarefas.AdicionarTarefas("Lavar a louça");
        tarefas.AdicionarTarefas("Lavar a casa");

        System.out.println(tarefas.verTarefas());

        tarefas.removerTarefa(0);

        tarefas.concluirTarefa(1);

        System.out.println(tarefas.verTarefas());

    }
}
