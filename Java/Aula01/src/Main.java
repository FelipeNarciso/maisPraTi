import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        byte byteVar = 127;
        short shortVar = 32000;
        int intVar = 21000000;
        long longVar = 90000000000000000L;
        System.out.println("Byte " + byteVar);
        System.out.println("Short " + shortVar);
        System.out.println("Int " + intVar);
        System.out.println("Long " + longVar);

        float floatVar = 3.1415F;
        double doubleVar = 3.14159265;
        System.out.println("Float " + floatVar);
        System.out.println("Double " + doubleVar);
        System.out.printf("%.2f\n" , floatVar);

        char charVar = 'A';
        boolean booleanVar = true;

        System.out.println("Char " + charVar);
        System.out.println("Boolean " + booleanVar);

        String name = "Jaques";
        System.out.println("String " + name);

        System.out.print("Hello World!");
        System.out.println("Hellow World");
        System.out.println("Hellow World");

        Locale.setDefault(Locale.US);
        System.out.printf("%.2f\n" , floatVar);

        int a;
        int b;
        int c;
        double area;

        a = 5;
        b = 7;
        c = 3;

        area = (double) (a+b)/2 * c;
        System.out.println(area);

        Scanner sc = new Scanner(System.in);

        String nome = sc.next();
        System.out.println("Seu nome é " + nome);

        int idade = sc.nextInt();
        System.out.println("Sua idade é " + idade);

        double ano = sc.nextDouble();
        System.out.println("O ano é " + ano);

        char caracter = sc.next().charAt(0);
        System.out.println("O caracter é " + caracter);


    }
}