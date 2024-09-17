package Abstração;

public class Boleto extends FormaPagamento {

    private Double valorMaximo;
    private Double proximaCompra;

    public Boleto(Double valorMaximo) {
        if(valorMaximo < 0){
            throw new IllegalArgumentException("O valor de limite máximo precisa ser positivo.");
        }
        this.valorMaximo = valorMaximo;
        this.proximaCompra = 0.0;
    }

    @Override
    public void processarPagamento(double valor){
        if(valor < 0){
            throw new IllegalArgumentException("O valor do boleto precisa ser positivo");
        }

        proximaCompra = valor;
    }

    @Override
    public void validarPagamento(){
        if(proximaCompra == 0.0){
            throw new IllegalStateException("Não há uma compra pendente para validar.");
        }else if (proximaCompra > valorMaximo) {
            throw new IllegalArgumentException(String.format("O valor ultrapassa o limite máximo para pagamento de boletos! Limite: R$ %.2f", valorMaximo));
        }

        System.out.println(String.format("Pagamento de um boleto no valor de R$ %.2f efetuado com sucesso!", proximaCompra));
        proximaCompra = 0.0;
    }

    public static void main(String[] args) {
        Boleto boleto = new Boleto(10000.00);

        boleto.processarPagamento(8000.00);

        boleto.validarPagamento();

        boleto.processarPagamento(15000.00);

        boleto.validarPagamento();
    }
}
