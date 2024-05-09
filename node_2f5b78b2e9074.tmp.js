//Função calcular peso ideal//

const prompt = require('prompt-sync')()

let alt = parseInt(prompt('Qual sua altura (em cm): '))
let sexo = prompt('Qual seu sexo (M/F): ').toUpperCase()
while(sexo !== 'M' || sexo !== 'F'){
    console.log('[ERRO] Sexo inválido!')
    sexo = prompt('Qual seu sexo (M/F): ').toUpperCase()
}

function pesoIdeal(alt , sexo){
    if(sexo === 'M'){
        let pesoIdeal = 72.7 * alt - 58
    }else{
        let pesoIdeal = 62.1 * alt - 44.7
    }

}
pesoIdeal()
console.log(`Seu peso ideal é  ${pesoIdeal}`)