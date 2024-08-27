package abstraction;

public class Ps5 {
    private String marca = "Sony";

    private String cor = "Branco";

    private boolean ligado = false;


    public String getMarca(){
        return this.marca;
    }

    public String getCor(){
        return this.cor;
    }

    public void setCor(String cor){
        this.cor = cor;
    }

    public boolean getLigado(){
        return this.ligado;
    }

    public void setLigado(boolean ligado){
        this.ligado = ligado;
    }

    public static void main(String[] args) {
        Ps5 ps5 = new Ps5();

        System.out.println(ps5.ligado);
    }
}
