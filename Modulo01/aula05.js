//switch case

//const prompt = require("prompt-sync")();


/*console.log('Digite um número: ')
let dia = parseInt(prompt("Insira um número do dia da semana: "));
let numDia;


switch(dia) {
    case 1:
        numDia = 'Domingo';
        break;
    case 2:
        numDia = 'Segunda-feira';
        break;
    case 3:
        numDia = 'Terça-feira';
        break;
    case 4:
        numDia = 'Quarta-feira';
        break;
    case 5:
        numDia = 'Quinta-feira';
        break;
    case 6:
        numDia = 'Sexta-feira';
        break;
    case 7:
        numDia = "Sábado";
        break;
    default:
        console.log('Digite um número de 1 a 7!')
        break;
        
}
console.log("O dia da semana é: " , numDia)*/



// Estrutura de Repetição

/*let contador = 0;
let multiplicando = 5;

//Variável; condição; incremento\\

for(contador = 0; contador <=10; contador++){
    console.log(`${multiplicando} * ${contador} = ` , multiplicando * contador)
}*/


/*for(let i = 0; i <= 100; i+=2) {
    console.log(i)
}*/

/*let i = 10;

while(i >= 1){
    console.log(i)
    i--;

}*/

/*let valor = 0;

while(valor <= 100) {
    console.log(valor)
    valor+=5;
}*/


const prompt = require('prompt-sync')()
/*let senha

do{
    senha= prompt("Digite a senha:")
}while(senha !== "1234")

console.log("senha correta")*/

const numeroCorreto = Math.floor((match.ramdon() * 10)+1)
let tentativa
console.log(numeroCorreto)

do{
    tentativa = parseInt(prompt("adivinhe um número entre 1 e 10"))
    if(tentativa < numeroCorreto){
        console.log("tente um número maior")
    }else if(tentativa > numeroCorreto){
        console.log("Tente um número menor")
    }
}while(tentativa != numeroCorreto)
console.log("Parabéns! Você acertou!")