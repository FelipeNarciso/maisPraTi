package ListaDuplamenteEncadeada;
import java.util.Collections;
import java.util.LinkedList;


public class JogoDeCartas {
   private LinkedList<String> cartas;

    public JogoDeCartas() {
        this.cartas = new LinkedList<>();
    }

    public void adicionarCarta(String carta, String naipe){
        this.cartas.add(carta + " de " + naipe);
    }

    public void removerCarta(int index){
        if (index >= 0 && index < this.cartas.size()) {
            this.cartas.remove(index);
        } else {
            throw new IndexOutOfBoundsException("Índice fora dos limites ou inválido!");
        }
    }

    public void organizarCartas() {
        Collections.sort(cartas, (carta1, carta2) -> {
            String naipe1 = carta1.split(" de ")[1];
            String naipe2 = carta2.split(" de ")[1];
            return naipe1.compareTo(naipe2);
        });
    }

    public String verCartas(){
        if(this.cartas.isEmpty()){
            return "Você não possui nenhuma carta!";
        }else{
            return "Suas cartas: " + this.cartas.toString();
        }
    }

    public static void main(String[] args) {
        JogoDeCartas jogoDeCartas = new JogoDeCartas();

        jogoDeCartas.adicionarCarta("7", "ouro");
        jogoDeCartas.adicionarCarta("2", "espada");
        jogoDeCartas.adicionarCarta("5", "paus");
        jogoDeCartas.adicionarCarta("3", "ouro");
        jogoDeCartas.adicionarCarta("8", "paus");

        System.out.println(jogoDeCartas.verCartas());

        jogoDeCartas.organizarCartas();

        System.out.println(jogoDeCartas.verCartas());
    }
}

