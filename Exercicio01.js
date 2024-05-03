//Cálculo redução do tempo de vida de um fumante//

const prompt = require('prompt-sync')()

let qtd = prompt('Quantos cigarros você fuma por dia? ')
let anos = prompt('A quantos anos você fuma? ')
let total = (qtd * (365 * anos))
let min = 10 * total
let dias = min / (60 * 24) 
console.log(`Você perdeu ${dias.toFixed(1)} dias de vida por conta do cigarro!`)