package threads;

public class MyThread extends Thread{

    @Override
    public void run() {
        System.out.println("Thread em Execução");
    }

    public static void main(String[] args) {
        MyThread t1 = new MyThread();

        t1.start();
    }
}
