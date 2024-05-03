// Cálculo preço da viagem//

const prompt = require('prompt-sync')()

let distancia = prompt('Qual a distância (em km) que deseja percorrer? ')
let passagem = 0
if(distancia <= 200){
    passagem = 0.50 * distancia
}else{
    passagem = 0.45 * distancia
}
console.log(`O valor da passagem fica R$${passagem.toFixed(2)}`)