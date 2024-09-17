package Abstração;

public class Pix extends FormaPagamento {

    private Double limiteDiario;
    private Double proximaCompra;

    public Pix(Double limiteDiario) {
        if(limiteDiario < 0){
            throw new IllegalArgumentException("O limite diário para Pix precisa ser positivo");
        }
        this.limiteDiario = limiteDiario;
        this.proximaCompra = 0.0;
    }

    @Override
    public void processarPagamento(double valor){
        if(valor < 0){
            throw new IllegalArgumentException("O valor não pode ser menor que 0");
        }

        proximaCompra = valor;
    }

    @Override
    public void validarPagamento(){
        if (this.proximaCompra == 0.0){
            throw new IllegalStateException("Não há uma compra pendente para validar.");
        }else if (proximaCompra > limiteDiario) {
            throw new IllegalArgumentException(String.format("Essa compra ultrapassa o limite diário de Pix. Limite disponível: R$ %.2f", limiteDiario));
        }

        System.out.println(String.format("Compra de R$ %.2f efetuada com sucesso!", proximaCompra));

        this.limiteDiario -= this.proximaCompra;
        this.proximaCompra = 0.0;
    }

    public static void main(String[] args) {
        Pix pix = new Pix(2000.00);

        pix.processarPagamento(200.00);

        pix.validarPagamento();

        pix.processarPagamento(5000.00);

        pix.validarPagamento();
    }
}
