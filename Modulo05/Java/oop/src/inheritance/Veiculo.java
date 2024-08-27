package inheritance;

public class Veiculo {
    public String fabricante;

    public String modelo;

    public String tipo;

    public String categoria;

    public String anoFabricacao;

    public int capacidade;

    public double potencia;

    private String nrChassi;

    public Veiculo(String fabricante, String modelo, String tipo, String categoria, String anoFabricacao, int capacidade, double potencia, String nrChassi) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.tipo = tipo;
        this.categoria = categoria;
        this.anoFabricacao = anoFabricacao;
        this.capacidade = capacidade;
        this.potencia = potencia;
        this.nrChassi = nrChassi;
    }

    public void ligar(){
        System.out.println("O veiculo está ligado!");
    }

    public void acelerar(){
        System.out.println("Estou acelerando!");
    }
}
