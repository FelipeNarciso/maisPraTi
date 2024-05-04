//Empresa de aluguel de carros//

const prompt = require('prompt-sync')()

console.log('Tipos de carros:')
console.log('Digite 1 para Popular.')
console.log('Digite 2 para Luxo.')
let carro = prompt('Qual tipo de carro foi alugado? ')
let dias = prompt('Por quantos dias o cliente alugou? ')
let km = prompt('Quantos km ele percorreu? ')
let preço = 0

if(carro == 1){
    preço = dias * 90
    if(km <= 100){
        preço += km * 0.20
    }else{
        preço += km * 0.10
    }
}else{
    preço = dias * 150
    if(km < 200){
        preço += km * 0.30
    }else{
        preço += km * 0.25
    }

}
console.log(`O valor a ser cobrado é de R$${preço.toFixed(2)}`)