package Abstração;

public class CartaoCredito extends FormaPagamento {

    private Double limiteCartao;
    private Double proximaCompra;

    public CartaoCredito(Double limiteCartao) {
        if(limiteCartao < 0){
            throw new IllegalArgumentException("O cartão não pode ter limite negativo.");
        }
        this.limiteCartao = limiteCartao;
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
        }else if (proximaCompra > limiteCartao) {
            throw new IllegalArgumentException(String.format("Você não tem limite disponível no cartão. Limite disponível: R$ %.2f", limiteCartao));
        }

        System.out.println(String.format("Compra de R$ %.2f efetuada com sucesso!", proximaCompra));

        this.limiteCartao -= this.proximaCompra;
        this.proximaCompra = 0.0;
    }

    public static void main(String[] args) {
        CartaoCredito cartaoCredito = new CartaoCredito(1500.00);

        cartaoCredito.processarPagamento(350.50);

        cartaoCredito.validarPagamento();

        cartaoCredito.processarPagamento(2000.00);

        cartaoCredito.validarPagamento();
    }
}
