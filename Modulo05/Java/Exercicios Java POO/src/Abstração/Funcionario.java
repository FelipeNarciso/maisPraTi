package Abstração;


public abstract class Funcionario {

    private String nome;
    private Double salario;
    private Double bonus;
    private String cargoAtual;

    public Funcionario(String nome, Double salario) {
        this.nome = nome;
        this.salario = salario;
        this.bonus = calcularBonus();
        this.cargoAtual = getCargoAtual();
    }

    public Double getSalario() {
        return salario;
    }

    public String getCargoAtual() {
        return cargoAtual;
    }

    public void setCargoAtual(String cargoAtual) {
        this.cargoAtual = cargoAtual;
    }

    public Double getBonus() {
        return bonus;
    }

    public void setBonus(Double bonus) {
        this.bonus = bonus;
    }

    public abstract Double calcularBonus();

    public abstract void verSalario();

    public abstract void verBonus();

    public abstract double salarioCompleto();


}
