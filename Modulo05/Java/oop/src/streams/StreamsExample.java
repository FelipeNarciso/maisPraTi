package streams;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamsExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        List<Integer> evenNumbers = numbers.stream().filter(
                n -> n % 2 == 0)
                .map(n -> n * 2).collect(Collectors.toUnmodifiableList());

        System.out.println(evenNumbers);

        List<String> names = Arrays.asList("Sherlock", "Tony", "Bruce", "Murdock", "Aang", "Logan", "Bilbo");

        int sum = numbers.stream().reduce(0, Integer::sum);
        System.out.println("Soma: " + sum);

        names.stream().map(String::toUpperCase).forEach(System.out::println);

        //Peguem um parágrafo de texto e usem streams para contar o número de palávras únicas, ignorem maiúsculas, minúsculas e removam pontuações

        String frase = "Isso é apenas uma frase, repito, é apenas uma frase";

        long contador = Arrays.stream(frase.toLowerCase().replaceAll("[^a-zA-Z\\s]", "").split("\\s+"))
                .distinct()
                .count();

        System.out.println("Números de palavras únicas: " + contador);
    }
}
