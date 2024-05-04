// Sorteando um valor //

const prompt = require('prompt-sync')()

let num = Math.floor((Math.random() * 5) + 1)
console.log('Tente advinhar o número entre 1 e 5!')   
let tentativa = parseInt(prompt('Escolha um número: '))

while(tentativa != num){
    if(tentativa > 5 || tentativa < 1 ){
        console.log('---------------------')
        tentativa = parseInt(prompt('[ERRO] Escolha um número entre 1 e 5!: '))
    }else{
        console.log('---------------------')
        tentativa = parseInt(prompt('Errou! Escolha outro um número: '))
    }
}
console.log('---------------------')
console.log('Parabéns, Você acertou!')

