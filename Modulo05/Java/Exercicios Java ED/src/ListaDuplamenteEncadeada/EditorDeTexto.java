package ListaDuplamenteEncadeada;
import java.util.LinkedList;

public class EditorDeTexto {
    private LinkedList<String> historico;
    private LinkedList<String> historicoMudancas;

    public EditorDeTexto() {
        this.historico = new LinkedList<>();
        this.historicoMudancas = new LinkedList<>();
    }

    public void salvarTexto(String texto){
        if(historico.isEmpty()){
            historico.add(texto);
        }else{
            String textoAnterior = historico.getLast();
            historico.add(textoAnterior + texto);
        }
    }

    public void voltarTexto(){
        if(!historico.isEmpty()){
            historicoMudancas.add(historico.getLast());
            historico.remove(historico.size() - 1);
        }else{
            throw new IllegalArgumentException("Você não tem nenhum texto salvo no momento!");
        }
    }

    public void desfazerUltimaAcao(){
        if(!historicoMudancas.isEmpty()){
            String ultimaAcao = historicoMudancas.getLast();
            historico.add(ultimaAcao);
        }else{
            throw new IllegalArgumentException("Você não fez nenhuma ação ainda!");
        }
    }

    public String verTexto(){
        if(!historico.isEmpty()){
            return "Texto salvo: " + historico.getLast();
        }else{
            throw new IllegalArgumentException("Você não salvou nenhum texto!");
        }
    }

    public static void main(String[] args) {
        EditorDeTexto texto = new EditorDeTexto();

        texto.salvarTexto("Isso é um teste.");

        texto.salvarTexto(" Testando");

        System.out.println(texto.verTexto());

        texto.voltarTexto();

        System.out.println(texto.verTexto());

        texto.desfazerUltimaAcao();

        System.out.println(texto.verTexto());
    }
}
