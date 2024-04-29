//Array ou Vetor//

/*let lista_compras = Array()

lista_compras[0] = "Shampoo"
lista_compras[1] = "Condicionador"
lista_compras['x'] = 100

console.log(lista_compras)

let listaFrutas= ['banana' , 'morango']
console.log(listaFrutas)

let listaViagem = Array('Passagem' , 'Malas')
console.log(listaViagem)

//Arays Multidimensionais ou Matriz//

let lista_coisas = Array();

lista_coisas ['Frutas'] = Array()

lista_coisas['Frutas'][0] = 'Morango'
lista_coisas['Frutas'][1] = 'Uva'
lista_coisas['Frutas'][2] = 'Laranja'
lista_coisas['Frutas'][3] = 'Bergamota'

lista_coisas['Viagem'] = Array()

lista_coisas['Viagem'][0] = 'Passagem'
lista_coisas['Viagem'][0] = 'Malas'

console.log(lista_coisas)

//Incerção de elementos no final do Array//

lista_coisas['Frutas'].push('Banana')
console.log(lista_coisas)

//Incerção de elementos no começo do Array//

lista_coisas['Frutas'].unshift('Limão')
console.log(lista_coisas)

//Exclusão de elementos no final do Array//

lista_coisas['Frutas'].pop()
console.log(lista_coisas)

//Exclusão no começo do Array//

lista_coisas['Frutas'].shift()
console.log(lista_coisas)

//Procurar elementos dentro do Array//

let listaProdutos = Array('Computador' , 'Caneta' , 'Chuteira')
let aux = listaProdutos.indexOf('Computador')

if(aux === -1){
    console.log('Elemento não existe no array!')
}else{
    console.log(`O elemento existe e está na posição ${aux}`)
}

//Ordenando em ordem alfabética//

let listaProdutos = Array('Lousa' , 'Computador' , 'Caneta' , 'Chuteira' , 'Garrafa de água')
console.log(listaProdutos.sort())

//Ordenando números//

let listaProdutos = Array(1 , 3 , 4 , 2)
console.log(listaProdutos.sort())

//Função//

function calcularAreaTerreno(largura, comprimento){
    
    let area = largura * comprimento //Escopo de função!

    return area
}

//[area não é acessivel aqui]

let prompt = require('prompt-sync')()

let lg = prompt('Digite a largura do terreno em metros: ')
let cp = prompt('Digite o comprimento do terreno em metros: ')

//Chamada da função e passagem de parâmetros//
let resultado = calcularAreaTerreno(lg, cp)

console.log('O terreno possui ' + resultado + ' metros quadrados')



//Global - permite que a variavel seja acessada em qualquer parte do codigo//
let variavelGlobal;
let x = 5;
let y = -2;
//Função - apenas dentro da função.//
function variavelF (var1, var2){
    let variavelFuncao = var1 + var2 //Função
    return variavelFuncao;
}
variavelGlobal = variavelF(x,y); //Global
//Bloco - variaveis dentro de blocos como if, for, while...//
if (variavelGlobal > 0){
    let maior = true //Bloco
    if (maior){
        console.log('OK')
    }
}

//função anonima//

let exibirFuncao = function() {
    console.log('Olá')
}
exibirFuncao()

///////////////////////////////

let callbackSucesso = function(titulo){
    console.log(titulo)
}

let callbackErro = function(erro){
    console.log(erro)
}

function exibirFuncao(callbackSucesso, callbackErro){
    if(true){
        callbackSucesso('Funções de callback em caso de sucesso')
    }else { 
        callbackErro('Funções de callback em caso de erro')
    }
}
exibirFuncao(callbackSucesso , callbackErro)

////////////////////////////////////////////////

let soma = function (num1, num2) {
    return num1 + num2
}

let subtracao = function(num1 , num2) {
    return num1 - num2
}

let multiplicacao = function(num1, num2) {
    return num1 * num2
}

let divisao = function(num1, num2) {
    return num1 / num2
}

function calculadora(operacao, num1, num2 , soma, subtracao, multiplicacao, divisao) {
    switch(operacao){
        case "soma":
           let resultado = soma(num1, num2)
           return resultado
            break;
    }
}        


console.log(calculadora("soma", 10, 10, soma))*/