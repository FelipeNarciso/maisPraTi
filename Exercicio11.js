//Progressão Aritmética//

const prompt = require('prompt-sync')()

let num = parseInt(prompt('Escolha um número: '))
let pa = parseInt(prompt('Escolha a Progressão Aritmética: '))
let soma = num
console.log(`A Progressão Aritmética de ${num} é:`)
console.log(num)
for(i = 1 ; i < 10 ; i++){
    console.log(num += pa)
    soma += num 
}
console.log(`A soma dos elementos é ${soma}`)