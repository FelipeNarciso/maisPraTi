package stack;

public class StackTest {
    public static void main(String[] args) {
        StackExemple stack = new StackExemple();


        stack.push(10);
        stack.push(100);
        stack.push(90);

        System.out.println("Elemento no topo: " + stack.peek());
        System.out.println("Elemento desempilhado: " + stack.pop());





    }
}
