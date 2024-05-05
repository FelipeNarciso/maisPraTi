//Programa de vida saudável//

const prompt = require('prompt-sync')()

let horas = parseInt(prompt('Quantas horas de atividades físicas você pratica no mês? '))
let pontos = 0
if(horas < 10){
    pontos = horas * 2
}else if(horas >= 10 && horas <= 20){
    pontos = horas * 5
}else{
    pontos = horas * 10
}
let valor = pontos * 0.05

console.log(`Você teve um total de ${pontos} pontos e ganhou R$${valor.toFixed(2)}`)