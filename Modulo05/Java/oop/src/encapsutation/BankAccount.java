package encapsutation;

public class BankAccount {

    private String accountNumber;

    private double balance;

    public BankAccount(String accountNumber, double inicialBalance) {
        this.accountNumber = accountNumber;
        this.balance = inicialBalance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount){
        if(amount > 0){
            this.balance += amount;
        }else{
            throw new IllegalArgumentException("O valor do depósito deve ser positivo.");
        }
    }

    public void withdraw(double amount){
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount;
        }else{
            throw new IllegalArgumentException("O valor do saque deve ser positivo.");
        }
    }

}
