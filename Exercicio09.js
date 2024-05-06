//Aplicativo para ler salários de homens e mulheres//

const prompt = require('prompt-sync')()

let salarioH = 0
let salarioM = 0

let sexo = parseInt(prompt('Qual o sexo do funcionário? (1 para HOMEM e 2 para MULHER) '))
let salario = parseFloat(prompt('Digite o salário do funcinário: '))

while(sexo != 0){
    if(sexo == 1){
        salarioH += salario
        console.log('-----------------------')
        sexo = parseInt(prompt('Qual o sexo do funcionário? (1 para HOMEM e 2 para MULHER e 0 para ENCERRAR) '))
        if(sexo == 0){
            console.log(`salario homens igual ${salarioH} e mulhre igual ${salarioM}`)
        }else{
            salario = parseFloat(prompt('Digite o salário do funcinário: '))
        }
    }else if(sexo == 2){
        salarioM += salario
        console.log('-----------------------')
        sexo = parseInt(prompt('Qual o sexo do funcionário? (1 para HOMEM e 2 para MULHER e 0 para ENCERRAR) '))
        if(sexo == 0){
            console.log(`salario homens igual ${salarioH} e mulhre igual ${salarioM}`)
        }else{
            salario = parseFloat(prompt('Digite o salário do funcinário: '))
        }
    }else{
        console.log('[ERRO] Escolha uma alternativa disponível!')
        console.log('-----------------------')
        sexo = parseInt(prompt('Qual o sexo do funcionário? (1 para HOMEM e 2 para MULHER e 0 para ENCERRAR) '))
        salario = parseFloat(prompt('Digite o salário do funcinário: '))
    }
}
console.log(`O total de salário pago aos homens é R$ ${salarioH.toFixed(2)} e o total de salário pago as mulheres é R$${salarioM.toFixed(2)}`)