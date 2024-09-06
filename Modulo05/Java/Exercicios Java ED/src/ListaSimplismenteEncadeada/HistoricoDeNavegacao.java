package ListaSimplismenteEncadeada;
import java.util.ArrayList;
import java.util.NoSuchElementException;

public class HistoricoDeNavegacao {

    private ArrayList<String> historico;

    public HistoricoDeNavegacao() {
        this.historico = new ArrayList<>();
    }

    public void adicionarUrl(String url) {
        if(historico.size() < 10){
            historico.add(url);
        }else{
            historico.remove(0);
            historico.add(url);
        }
    }

    public String verHistorico(){
        if(!historico.isEmpty()){
            return "Histórico de Navegação: " + historico.toString();
        }else{
            throw new IllegalArgumentException("O seu histórico de navegação está vazio!");
        }
    }

    public static void main(String[] args) {
        HistoricoDeNavegacao historicoDeNavegacao = new HistoricoDeNavegacao();

        historicoDeNavegacao.adicionarUrl("google.com.br");
        historicoDeNavegacao.adicionarUrl("youtube.com");
        historicoDeNavegacao.adicionarUrl("facebook.com");
        historicoDeNavegacao.adicionarUrl("instagram.com.br");
        historicoDeNavegacao.adicionarUrl("github.com.br");
        historicoDeNavegacao.adicionarUrl("meet.com.br");
        historicoDeNavegacao.adicionarUrl("google.com.br");
        historicoDeNavegacao.adicionarUrl("facebook.com.br");
        historicoDeNavegacao.adicionarUrl("chatgpt.com.br");
        historicoDeNavegacao.adicionarUrl("gemini.com.br");
        historicoDeNavegacao.adicionarUrl("google.com.br");
        historicoDeNavegacao.adicionarUrl("instagram.com.br");

        System.out.println(historicoDeNavegacao.verHistorico());
    }
}
