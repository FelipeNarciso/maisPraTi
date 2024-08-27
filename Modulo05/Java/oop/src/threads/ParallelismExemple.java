package threads;
import java.util.List;
import java.util.concurrent.ForkJoinPool;

public class ParallelismExemple {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        ForkJoinPool forkJoinPool = new ForkJoinPool(Runtime.getRuntime().availableProcessors());

        forkJoinPool.submit(() -> {
            numbers.parallelStream().forEach(number -> {
                System.out.println("Número sendo processado: " + number + " - " + Thread.currentThread().getName());

                try{
                    Thread.sleep(1000);
                }catch (InterruptedException error){
                    error.printStackTrace();
                }
            });
        }).join();

        forkJoinPool.shutdown();
    }
}
