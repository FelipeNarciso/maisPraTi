package stack;

class Node{
    int data;
    Node next;


    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class StackExemple {
    private Node top;

    public StackExemple() {
        this.top = top;
    }

    public void push(int data){
        Node newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    public int pop(){
        if(isEmpty()){
            throw new RuntimeException("Stack is Empty");
        }

        int poppedData = this.top.data;
        this.top = this.top.next;

        return poppedData;
    }

    public int peek(){
        if(isEmpty()){
            throw new RuntimeException("Stack is Empty");
        }

        return this.top.data;
    }

    public boolean isEmpty(){
        return top == null;
    }
}
