//Cálculo velocidade do carro e aplicando multa//

const prompt = require('prompt-sync')()

let velocidade =(parseInt(prompt('Qual a velocidade do seu carro? ')))
let multa = 0
if(velocidade > 80){
    for(i = velocidade; i > 80; i--){
        multa += 5
    }
    console.log(`A velocidade da via é 80 km/h, você foi multado em R$${multa},00!`)
}else{
    console.log('Você está na velocidade da via!')
}