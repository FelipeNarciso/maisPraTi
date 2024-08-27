package encapsulation2;

public final class Rectangle extends Shape{
    private final double width, heigth;

    public Rectangle(double width, double heigth) {
        this.width = width;
        this.heigth = heigth;
    }

    public double area(){
        return width * heigth;
    }
}
