import java.util.Locale;
import java.util.Scanner;
import util.Utilitarios;

public class Main {
    public static void main(String[] args) {
//        byte byteVar = 127;
//        short shortVar = 32000;
//        int intVar = 21000000;
//        long longVar = 90000000000000000L;
//        System.out.println("Byte " + byteVar);
//        System.out.println("Short " + shortVar);
//        System.out.println("Int " + intVar);
//        System.out.println("Long " + longVar);
//
//        float floatVar = 3.1415F;
//        double doubleVar = 3.14159265;
//        System.out.println("Float " + floatVar);
//        System.out.println("Double " + doubleVar);
//        System.out.printf("%.2f\n" , floatVar);
//
//        char charVar = 'A';
//        boolean booleanVar = true;
//
//        System.out.println("Char " + charVar);
//        System.out.println("Boolean " + booleanVar);
//
//        String name = "Jaques";
//        System.out.println("String " + name);
//
//        System.out.print("Hello World!");
//        System.out.println("Hellow World");
//        System.out.println("Hellow World");
//
//        Locale.setDefault(Locale.US);
//        System.out.printf("%.2f\n" , floatVar);
//
//        int a;
//        int b;
//        int c;
//        double area;
//
//        a = 5;
//        b = 7;
//        c = 3;
//
//        area = (double) (a+b)/2 * c;
//        System.out.println(area);
//
//        Scanner sc = new Scanner(System.in);
//
//        String nome = sc.next();
//        System.out.println("Seu nome é " + nome);
//
//        int idade = sc.nextInt();
//        System.out.println("Sua idade é " + idade);
//
//        double ano = sc.nextDouble();
//        System.out.println("O ano é " + ano);
//
//        char caracter = sc.next().charAt(0);
//        System.out.println("O caracter é " + caracter);

        Scanner sc = new Scanner(System.in);

        //Exercício 01: Conversão de Celcius para Fahrenheit

//        double celcius = 25.0;
//
//        double fahrenheit = (celcius * 1.8) + 32;
//
//        System.out.println("A temperatura em Fahrenheit é: " + fahrenheit);

//        int idade = 17;
//
//        if(idade >= 18) {
//            System.out.println("Você é maior de idade");
//        }else{
//            System.out.println("Você é menor de idade");
//        }

        //Exercício 2: Par ou ímpar

//        System.out.print("Digite um número: ");
//
//        int numero = sc.nextInt();
//
//        if(numero % 2 == 0){
//            System.out.println(numero + " É par!");
//        }else{
//            System.out.println(numero + " É ímpar!");
//        }

        //De para de dias com switch case:

//        System.out.print("Digite um número: ");
//
//        int dia = sc.nextInt();
//
//        switch (dia){
//            case 1:
//                System.out.println("Domingo");
//                break;
//
//            case 2:
//                System.out.println("Segunda");
//                break;
//
//            case 3:
//                System.out.println("Terça");
//                break;
//
//            case 4:
//                System.out.println("Quarta");
//                break;
//
//            case 5:
//                System.out.println("Quinta");
//                break;
//
//            case 6:
//                System.out.println("Sexta");
//                break;
//
//            case 7:
//                System.out.println("Sábado");
//                break;
//
//            default:
//                System.out.println("Dia inexistente");
//                break;


        //Exercício 03: Verifique se o ano é bissexto:

//            System.out.print("Digite um ano: ");
//
//            int ano = sc.nextInt();
//
//            if(ano % 400 == 0){
//                System.out.println(ano + " É bissexto");
//            } else if(ano % 100 == 0){
//                System.out.println(ano + " Não bissexto");
//            } else if (ano % 4 == 0) {
//                System.out.println(ano + " É bissexto");
//            } else{
//                System.out.println(ano + " Não bissexto");
//            }

        //Exercício 4: Calculadora simples!
//
//            System.out.print("Digie um número: ");
//
//            double num1 = sc.nextDouble();
//
//            System.out.print("Digie um número: ");
//
//            double num2 = sc.nextDouble();
//
//            System.out.print("Digie um operador: +, -, /, *");
//
//            char operador = sc.next().charAt(0);
//
//            switch (operador){
//                case '+':
//                    System.out.println("A soma dos números é: " + (num1 + num2));
//                    break;
//
//                case '-':
//                    System.out.println("A soma dos números é: " + (num1 - num2));
//                    break;
//
//                case '*':
//                    System.out.println("A multiplicação dos números é " + (num1 * num2));
//                    break;
//
//                case '/':
//                    System.out.println("A divisão dos números é " + (num1 / num2));
//
//
//            }

        //Exercício 5: Simule um login básico que permita somente três tentativas de login antes de bloquear o usuário:

//        int count = 0;
//
//        while(true) {
//
//            if (count == 3) {
//                System.out.println("Exedeu o limite de tentativa!");
//                break;
//            }
//
//            System.out.println("Digite o usuário: ");
//
//            String user = sc.nextLine();
//
//            System.out.println("Informe a senha: ");
//
//            String password = sc.nextLine();
//
//            if (user.equals("Admin") && password.equals("Admin")) {
//                System.out.println("Login efetuado com sucesso!");
//                break;
//            } else {
//                System.out.println("Senha ou usuário incorreto");
//                count++;
//            }
//
//        }


        //Estruturas de repetição: for

//        for(int i = 0; i < 10; i++) {
//
//            System.out.println(i);
//        }
//
//        int i = 0;
//
//        while(i < 10){
//            System.out.println("O valor de i é: " + i);
//            i++;
//        }

//        int i = 0;
//
//        do {
//            System.out.println("O valor de i é: " + i);
//            i++;
//        }while(i < 10);

//        String texto = "Java é melhor que aquela linguagem";
//
//        int comprimento = texto.length();
//        System.out.println(comprimento);
//
//        String maiusculas = texto.toUpperCase();
//        System.out.println(maiusculas);
//
//        String minusculas = texto.toLowerCase();
//        System.out.println(minusculas);
//
//        boolean contains = texto.contains("Java");
//        System.out.println(contains);
//
//        String substituto = texto.replace("Java", "JavaScript");
//        System.out.println(substituto);
//
//        String substring = texto.substring(0, 4);
//        System.out.println(substring);

//        double num = 50.30;
//
//        double arredondado = Math.round(num);
//        System.out.println(arredondado);
//
//        double arredondadoCima = Math.ceil(num);
//        System.out.println(arredondadoCima);
//
//        double arredondadoBaixo = Math.floor(num);
//        System.out.println(arredondadoBaixo);
//
//        double raizQuadrada = Math.sqrt(num);
//        System.out.println(raizQuadrada);
//
//        double absoluto = Math.abs(num);
//        System.out.println(absoluto);
//
//        double aleatorio = Math.random();
//        System.out.println(aleatorio);

        //Fatorial de um número:

//        System.out.print("Escolha um número para saber seu fatorial: ");
//
//        int num = sc.nextInt();
//        int resultado = 1;
//
//        for(int i = 1; i <= num; i++){
//            resultado *= i;
//        }
//        System.out.println(resultado);

        //Sequência de Fibonacci:

//        System.out.print("Escolha um número para saber a quantidade da sequência de Fibonacci: ");
//
//        int fibonacci = sc.nextInt();
//        int res = 1;
//
//        for (int i = 0; i <= fibonacci; i++) {
//
//        }

//        int[] vetorInicializado = {1, 2, 3, 4, 5};
//
//        String[] palavras = {"teste"};


        ///////////////////////////////////      AULA02     ////////////////////////////////////////////////////////////
//
//        int[] vetor = new int[5];
//
//        vetor[0] = 10;
//        vetor[1] = 20;
//        vetor[2] = 30;
//        vetor[3] = 40;
//        vetor[4] = 50;
//
//        vetor[4] = 100;
//
//        System.out.println("Elementos do array 'vetor: ");
//        for (int i = 0; i < vetor.length; i++) {
//            System.out.println("Elemento na posição " + i + ": " + vetor[i]);
//        }
//        ;
//
//
//        System.out.print("Soma do array 'vetor': ");
//
//        int soma = 0;
//
//        for (int i = 0; i < vetor.length; i++) {
//            soma += vetor[i];
//        }
//        ;
//        System.out.println(soma);
//
//        int max = vetor[0];
//
//        for (int i = 0; i < vetor.length; i++) {
//            if (vetor[i] > max) {
//                max = vetor[i];
//            }
//        }
//        ;
//        System.out.println(max);
//
//        //Reverter o Array
//
//        int start = 0;
//        int end = vetor.length - 1;
//        while (start < end) {
//            int temp = vetor[start];
//            vetor[start] = vetor[end];
//            vetor[end] = temp;
//
//            start++;
//            end--;
//        }
//
//        System.out.println("Elementos do array 'vetor: ");
//        for (int i = 0; i < vetor.length; i++) {
//            System.out.println("Elemento na posição " + i + ": " + vetor[i]);
//        };
//
//        //Adicionando elementos em um array
//
////        int[] newArray = new int[vetor.length + 1];
////
////        for(int i = 0; i < vetor.length; i++){
////            newArray[i] = vetor[i];
////        };
////        newArray[vetor.length] = 1;
//
//
//        //Removendo o elemento do array
//
//        int count = 0;
//
//        for(int i = 0; i < vetor.length; i++){
//            if(vetor[i] != 10){
//                count++;
//            };
//        };
//
//        int[] newArray = new int[count];
//
//        int index = 0;
//
//
//        //Pesquisar elementos em um array
//
//        for(int i = 0; i < vetor.length; i++){
//            if(vetor[i] == 20){
//                System.out.println(i);
//            };
//        };
//
//        int[][] matriz = {
//                {1,2,3},
//                {3, 5, 6},
//                {10,11, 18},
//        };
//
//        for(int[] row : matriz){
//            for(int value : row) {
//                System.out.println(value + "");
//            }
//        }
//
//        //Somar elementos da matriz
//
//        int somaMatriz = 0;
//
//        for(int[] row : matriz){
//            for(int value : row) {
//                somaMatriz += value;
//            }
//        }
//        System.out.println(somaMatriz);
//
//        //Somando diagonal principal e secundária
//
//        int somaPrincipal = 0;
//        int somaSecundaria = 0;
//
//
//        for(int i = 0; i < matriz.length; i++){
//            for(int j = 0; j < matriz[i].length; j++){
//                if(i == j){
//                    somaPrincipal+= matriz[i][j];
//                };
//                if((i + j) == matriz.length - 1){
//                    somaSecundaria += matriz[i][j];
//                }
//            }
//        }
//        System.out.println("Soma da matriz principal: " + somaPrincipal);
//        System.out.println("Soma da matriz principal: " + somaSecundaria);
//;
//
//        //Rotacionando a matriz
//
//        int n = matriz.length;
//
//        int[][] rotacionada = new int [n][n];
//
//        for(int i = 0; i < matriz.length; i ++){
//            for(int j = 0 ; j < matriz.length; j++){
//                rotacionada[j][n - 1 - i] = matriz[i][j];
//            }
//        }
//
//        //Encontrando o elemento
//
//        int numeroAlvo = 2;
//
//        for(int i = 0; i < matriz.length; i++){
//            for(int j = 0; j < matriz[i].length; j++){
//                if(matriz[i][j] == numeroAlvo){
//                    System.out.println("Número " + numeroAlvo + " encontrado na linha " + i + " coluna " + j);
//                }
//            }
//        }

        ///////////////////////////////////      AULA03     ////////////////////////////////////////////////////////////

        //Método

        /*[modificador] tipoRetorno nomeDoMétodo ([parâmetros]) {
                bloco de código!
            }

        */

     Geometria geo = new Geometria();

        double areaRetangulo = geo.calcularAreaRetangulo(5.0, 3.0);

        System.out.println(areaRetangulo);


        System.out.println(Geometria.multiplicar(10, 10));


        ContaBancaria contaBancaria = new ContaBancaria();

        contaBancaria.depositar(400);
        contaBancaria.depositar(1000);

        System.out.println(contaBancaria.consultaSaldo());

        Utilitarios.Print("Olá mundo!");

    }
}