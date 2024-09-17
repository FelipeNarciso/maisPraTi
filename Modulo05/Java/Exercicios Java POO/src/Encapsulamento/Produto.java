package Encapsulamento;

public class Produto {
    private String nome;
    private Double preco;
    private Integer quantidadeEstoque;

    public Produto(String nome, Double preco, Integer quantidadeEstoque) {

        if(nome == "" || preco < 0 || quantidadeEstoque < 0){
            throw new IllegalArgumentException("Argumentos inválidos! (Nome não pode ser vazio. Preço e estoque não podem ser negativos)");
        }else{
            this.nome = nome;
            this.preco = preco;
            this.quantidadeEstoque = quantidadeEstoque;
        }
    }

    public String verNome() {
        return "Nome do produto: " + nome;
    }

    public String verPreço() {
        return String.format("Preço: R$ %.2f", preco);
    }

    public String verEstoque() {
        return "Quantidade em estoque: " + quantidadeEstoque;
    }

    public void alterarNome(String novoNome){
        if(novoNome == ""){
            throw new IllegalArgumentException("O novo nome não pode ser vazio!");
        }else{
            nome = novoNome;
        }
    }

    public void alterarPreço(Double novoPreco){
        if(novoPreco < 0){
            throw new IllegalArgumentException("O novo preço não pode ser negativo");
        }else{
            preco = novoPreco;
        }
    }

    public void alterarEstoque(Integer novoEstoque){
        if(novoEstoque < 0){
            throw new IllegalArgumentException("O novo estoque não pode ser negativo");
        }else{
            quantidadeEstoque = novoEstoque;
        }
    }

    public void aplicarDesconto( double porcentagem){
        if(porcentagem > 50){
            throw new IllegalArgumentException("Não é permitido descontos acima de 50%!");
        }else{
            this.preco = preco - (preco * (porcentagem / 100));

        }
    }

    public static void main(String[] args) {
        Produto camiseta1 = new Produto("Camiseta Polo", 199.90, 50);

        System.out.println(camiseta1.verNome());
        System.out.println(camiseta1.verPreço());
        System.out.println(camiseta1.verEstoque());

        camiseta1.alterarNome("Camiseta Térmica");
        camiseta1.alterarPreço(129.90);
        camiseta1.alterarEstoque(80);

        camiseta1.aplicarDesconto(20);

        System.out.println(camiseta1.verNome());
        System.out.println(camiseta1.verPreço());
        System.out.println(camiseta1.verEstoque());


    }
}
