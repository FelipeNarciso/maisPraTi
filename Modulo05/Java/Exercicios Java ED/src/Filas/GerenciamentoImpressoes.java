package Filas;

import java.util.LinkedList;
import java.util.Queue;

public class GerenciamentoImpressoes {
    private Queue<String> trabalhosImpressao;

    public GerenciamentoImpressoes() {
        this.trabalhosImpressao = new LinkedList<>();
    }

    public void adicionarImpressao(String nomeImpressao){
        this.trabalhosImpressao.add(nomeImpressao);
    }

    public void iniciarProximaImpressao(){
        if(this.trabalhosImpressao.size() == 0){
            throw new IllegalArgumentException("No momento a fila de impressão está vazia!");
        }else{
            this.trabalhosImpressao.poll();
        }
    }

    public String verFilaImpressoes(){
        return "Fila de impressões: " + this.trabalhosImpressao.toString() + "\nPróxima impressão: " + this.trabalhosImpressao.peek();
    }

    public static void main(String[] args) {
        GerenciamentoImpressoes gerenciamentoImpressoes = new GerenciamentoImpressoes();

        gerenciamentoImpressoes.adicionarImpressao("Livro");
        gerenciamentoImpressoes.adicionarImpressao("Trabalho escola");
        gerenciamentoImpressoes.adicionarImpressao("Cópia de documento");

        System.out.println(gerenciamentoImpressoes.verFilaImpressoes());

        gerenciamentoImpressoes.iniciarProximaImpressao();

        System.out.println(gerenciamentoImpressoes.verFilaImpressoes());
    }

}
