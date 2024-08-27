package encapsulation2;

public abstract sealed class Shape permits Circle, Rectangle{

    public abstract double area();

    public static void main(String[] args) {
        Shape circle = new Circle(5.0);

        System.out.println("área do circulo: " + circle.area());

        Shape rectangle = new Rectangle(4.0, 5.0);
        System.out.println("Área do retângulo: " + rectangle.area());

        Point point = new Point(3, 5);

        System.out.println(point);

        System.out.println("X: " + point.x());

        System.out.println("Os pontos são iguais? " + point.equals(point));
    }

}

