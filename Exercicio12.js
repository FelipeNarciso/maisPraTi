//Sequência de Fibonacci//

const prompt = require('prompt-sync')()

let num = parseInt(prompt('Escolha o numero inicial da sequência: '))
let sf = num
console.log(`A sequência de Fibonacci de ${num} é:`)
console.log(num)
console.log(num)
for(i = 2; i < 10; i++){
   let soma = num + sf
   console.log(soma)
   num = sf
   sf = soma
}
