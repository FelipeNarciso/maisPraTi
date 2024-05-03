// Jogo de JoKenPo //

const prompt = require('prompt-sync')()

console.log('Bem-Vindo ao jogo de JoKenPo!')
console.log('Digite 1 para PEDRA! \nDigite 2 para PAPEL!  \nDigite 3 para TESOURA!')
let tentativa = parseInt(prompt('Escolha uma alternativa: '))
    while(tentativa >= 1 && tentativa <= 3){
        let tentativaMaquina = Math.floor((Math.random() * 3) + 1)
        console.log('------------------------')
        console.log('Você escolheu',escolha(tentativa))
        console.log('A maquina escolheu',escolha(tentativaMaquina))
        if(tentativa == 1 && tentativaMaquina == 2){
            console.log('Você perdeu!')
        }else if(tentativa == 2 && tentativaMaquina == 3){
            console.log('Você perdeu!')
        }else if(tentativa == 3 & tentativaMaquina == 1){
            console.log('Você perdeu!')
        }else if(tentativa == tentativaMaquina){
            console.log('Empate!')
        }else{
            console.log('Você ganhou!')
        }
        console.log('////////////////////////////')
        console.log('Digite 1 para PEDRA! \nDigite 2 para PAPEL!  \nDigite 3 para TESOURA!')
        tentativa = parseInt(prompt('Escolha uma alternativa: '))
    }
    console.log('Alternativa inválida! Jogo encerrado!')

    function escolha(alternativa) {
        switch(alternativa){
            case 1:
                return 'PEDRA'
                break
            case 2:
                return 'PAPEL'
                break
            case 3: 
                return 'TESOURA'
                break
            default:
                return 'Alterativa inválida' 
        }
    }

