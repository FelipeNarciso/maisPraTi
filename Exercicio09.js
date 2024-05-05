//Aplicativo ler salários de homens e mulheres//

const prompt = require('prompt-sync')()

let salarioH = 0
let salarioM = 0
console.log('Qual o sexo do funcionário?')
console.log('Digite 0 para cancelar')
console.log('Digite 1 para homem')
console.log('Digite 2 para mulher')
let sexo = prompt('Escolha uma alternativa: ')

if(sexo > 2 || sexo < 0){
    console.log('[ERRO] Alternativa inválida!')
    console.log('Qual o sexo do funcionário?')
    console.log('Digite 0 para cancelar')
    console.log('Digite 1 para homem')
    console.log('Digite 2 para mulher')
    let sexo = prompt('Escolha uma alternativa: ')
}else{
    while(sexo != 0){
        let salario = prompt('Qual o salário desse funcionário? ')
        if(sexo == 1){
            salarioH +=  salario
        }else{
            salarioM += salario
        }
        console.log('---------------------------')
        console.log('Qual o sexo do funcionário?')
        console.log('Digite 0 para cancelar')
        console.log('Digite 1 para homem')
        console.log('Digite 2 para mulher')
        sexo = prompt('Escolha uma alternativa: ')
    }

}
console.log(`O total de salário pago aos homens é ${salarioH} e o total de salário pago as mulheres é ${salarioM}`)


