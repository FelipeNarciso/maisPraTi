//Lendo vários numeros//

const prompt = require('prompt-sync')()
let soma = 0 
let menor = Infinity
let media = 0
let par = 0
let quantidade = 0
let num = 0
let continuar = 'S'

while(continuar === 'S'){
   num = parseInt(prompt('Digite um número: ')) 
   quantidade++
   soma += num
   if(num < menor){
    menor = num
   }
   if(num % 2 === 0){
    par++
   }
   media = soma / quantidade
   continuar = prompt('Desaja continuar? (S/N) ').toUpperCase()
   while(continuar !== 'S' && continuar !== 'N'){
    console.log('[ERRO] Escolha uma resposta válida!')
    continuar = prompt('Desaja continuar? (S/N) ').toUpperCase()
}
}
console.log(`O somatório entre os numeros escolhidos é ${soma}`)
console.log(`O menor valor digitado foi ${menor}`)
console.log(`A média entre os valores digitados foi ${media.toFixed(2)}`)
console.log(`Dos números adicionados, ${par} são pares`)