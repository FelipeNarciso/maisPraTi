package ListaSimplismenteEncadeada;

import java.util.ArrayList;

public class SistemaDeControleDeReversao {

    private ArrayList<String> undo;

    public SistemaDeControleDeReversao() {
        this.undo = new ArrayList<>();
    }

    public void salvarTexto(String texto){
        if(undo.isEmpty()){
            undo.add(texto);
        }else{
            String textoAnterior = undo.get(undo.size() - 1);
            undo.add(textoAnterior + texto);
        }
    }

    public void voltarTexto(){
        if(!undo.isEmpty()){
            undo.remove(undo.size() - 1);
        }else{
            throw new IllegalArgumentException("Você não tem nenhum texto salvo no momento!");
        }
    }

    public String verTexto(){
        if(!undo.isEmpty()){
            String texto = undo.get(undo.size() - 1);
            return "Texto salvo: " + texto.toString();
        }else{
            throw new IllegalArgumentException("Você não salvou nenhum texto ainda!");
        }
    }

    public static void main(String[] args) {
        SistemaDeControleDeReversao undo = new SistemaDeControleDeReversao();

        undo.salvarTexto("Isso é apenas um teste.");

        undo.salvarTexto(" O controle de versão está funcionando!");

        undo.salvarTexto(" Repito, isso é apenas um teste.");

        System.out.println(undo.verTexto());

        undo.voltarTexto();

        System.out.println(undo.verTexto());
    }
}
