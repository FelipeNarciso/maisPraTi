//Exercitando Arrays e Funções//

//Exercício 01: Somar todos os elementos de um Array

/*let elementos = [1, 2, 3, 4]


function somaElementos(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma
}

console.log('A soma dos elementos é: ', somaElementos(elementos))*/

//Exercicio 02: Encontrar o maior número de um Array

/*let elementos = [1, 5, 7, 3, 10]

function maiorNumero(vetor){
    let maior = vetor[0]
    for(let i= 1; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
    }
    return maior
}

console.log('Dentro dos elementos a maior número é: ', maiorNumero(elementos))*/

//Exercício 03: Reverter um Array

/*let elementos = [2, 4, 8 , 10]

function reverterArray(vetor){
    let vetorResultado = []
    for(let i = vetor.length - 1 ; i >= 0; i--){
        vetorResultado.push(vetor[i])
    }
    return vetorResultado
}
console.log('O vetor invertido é: ', reverterArray(elementos))*/

//Exercício 04: Somar todos os elementos de uma matriz

/*function somaMatriz(matriz){
    let soma = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j  < matriz[i].length; j++){
            soma += matriz[i][j]
        }
    }
    return soma
}
console.log('A soma dos elementos contidos na nossa matriz é: ' , somaMatriz([[1, 2]], [3, 4]])*/




//Exercício 05: Encontrar o maior número em uma matriz

/*let matriz = [[1, 2, 3] , [4, 5, 6]]

function maiorNumeroMatriz(matriz){
    let maior = matriz[0][0]
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maior){
                maior = matriz[i][j]
            }
        }
    }
    return maior
}
console.log('O maior número da minha matriz é: ', maiorNumeroMatriz(matriz))*/






//Funções Avançadas: Strings

/*
    String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos, possuindo propriedades e métodos.
*/

//let nome = 'Dick Vigarista'


//Funções Avançadas: Matemáticas


/*let x = Math.ceil(10.100) // para cima
console.log(x)

let x1 = Math.floor(10.100) // para baixo
console.log(x1)

let x2 = Math.round(10.100) // media
console.log(x2)

let x3 = Math.random() // numero aleatorio

console.log(x3)*/



//Funções Avançadas: Datas

/*let data = new Date()

console.log(data.getDate()) /// Dia atual

let data = new Date()

console.log(data.getMonth() + 1) // Mês

let data = new Date()

console.log(data.getFullYear()) // Ano


let data = new Date()

console.log(data.toString()) 
data.setDate(data.getDate() + 720)
console.log(data.toString())*/


//Encontar a quantidade de milisegundos entre 2 datas

let data1 = new Date('2024-04-22' )

let data2 = new Date('2022-04-22')

let milisegundos = Math.abs(data1 - data2)

console.log(`A quantidade de milesegundos entre as duas datas é: ${milisegundos}`)
