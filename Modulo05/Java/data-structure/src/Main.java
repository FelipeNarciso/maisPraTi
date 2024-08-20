import list.CustomList;
import list.SinglyLinkedList;
import java.util.ArrayList;
import java.util.LinkedList;
import list.Catalogo;

public class Main {
    public static void main(String[] args) {
//        CustomList list = new CustomList();

//        list.add(10);
//        list.add(5);
//        list.add(20);
//        list.add(30);
//        list.add(50);
//        list.add(70);
//
//        System.out.println(list.toString());
//
//        list.remove(5);
//
//        System.out.println(list.get(4));
//
//        System.out.println(list.toString());

//        SinglyLinkedList lista = new SinglyLinkedList();
//
//        lista.add(30);
//        lista.add(10);
//        lista.add(20);
//        lista.add(50);
//        lista.add(40);

//        System.out.println("Elemento no índice 0: " + lista.get(0));
//        System.out.println("Elemento no índice 1: " + lista.get(1));
//        System.out.println("Elemento no índice 2: " + lista.get(2));
//        System.out.println("Elemento no índice 3: " + lista.get(3));
//        System.out.println("Elemento no índice 4: " + lista.get(4));
//
//        lista.remove(0);
//
//        System.out.println("Elemento no índice 0: " + lista.get(0));
//
//        list.remove(1);
//        System.out.println("Elemento no índice 1: " + lista.get(1));

        ArrayList<Integer> list = new ArrayList<>();

        list.add(89);
        list.add(90);
        list.add(92);

//        System.out.println(list.get(0));
//        list.remove(1);
//        System.out.println(list.size());

        LinkedList<Integer> linkedList = new LinkedList<>();

        linkedList.add(99);
        linkedList.add(90);
        linkedList.add(870);
        linkedList.add(891);

//        Imagine que o aplicativo precisa exibir uma lista de produtos em uma página de catálogo.
//        O ArrayList pode ser usado para armazenar esses produtos, pois o acesso aos detalhes do produto por índice
//        (para exibição na página) é muito rápido.

//        Catalogo catalogo =  new Catalogo("camiseta", 150);

//        System.out.println(catalogo.toString());

    }
}