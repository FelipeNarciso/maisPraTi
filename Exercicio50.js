//Sistema de reserva de hotéis//

const prompt = require('prompt-sync')()

let hoteis = [
    {id: 1, nome: 'ACAPULCO' , cidade: 'PORTO ALEGRE' , quartosTotais: 150, quartosDisponiveis: 87}
]
let reservas = [

]

paginaInicial()
function paginaInicial(){
    console.log('Bem vindo ao sistema de reserva de hotéis!')
    console.log('Navegue pelas funcionalidades do sistema através das alternativas!')
    console.log('1: Adicionar hotel.')
    console.log('2: Descobrir hotéis na minha cidade')
    console.log('3: Fazer uma reserva')
    console.log('4: Cancelar reserva')
    console.log('5: Listar reservas')
    console.log('0: Encerrar atendimento')
    escolha = parseInt(prompt('Escolha uma alternativa: '))
    testeAlternativa()
}






function testeAlternativa(){
    while(escolha < 0 || escolha > 5 || isNaN(escolha)){
        console.log('[ERRO] Escolha uma alternativa válida!')
        escolha = parseInt(prompt('Escolha uma alternativa: '))
    }
    switch(escolha){
        case 0:
            console.log('Atendimento ENCERRADO. Obrigado por utilizar nossos serviços!');
            break;
        case 1:
            alternativa1();
            break;
        case 2:
            alternativa2();
            break;
        case 3:
            alternativa3();
            break;
        case 4:
            alternativa4()
            break;
        case 5:
            alternativa5()
            break; 
    }

}



function alternativa1() {
    console.log('--------------');
    console.log('Adicionando um novo hotel:');
    let id
    let nome
    do {
        id = parseInt(prompt('Qual o ID desse hotel: '));

        if (isNaN(id)) {
            console.log('[ERRO] ID só pode conter números!');
        } else if (hoteis.some(hotel => hotel.id === id)) {
            console.log('[ERRO] Esse ID já está cadastrado! Tente novamente');
        }
    } while (isNaN(id) || hoteis.some(hotel => hotel.id === id));

    do {
        nome = prompt('Qual o nome desse hotel: ').toUpperCase();

        if (hoteis.some(hotel => hotel.nome === nome)) {
            console.log('[ERRO] Já existe um hotel cadastrado com esse nome! Tente novamente');
        }
    } while (hoteis.some(hotel => hotel.nome === nome));

    let cidade = prompt('Qual a cidade onde se encontra esse hotel: ').toUpperCase();

    let quartosTotais = parseInt(prompt('Qual a quantidade de quartos totais do hotel: '));
    while (isNaN(quartosTotais) || quartosTotais <= 0) {
        if (isNaN(quartosTotais)) {
            console.log('[ERRO] Quantidade de quartos totais só pode conter números!');
        } else if (quartosTotais <= 0) {
            console.log('[ERRO] O hotel precisa ter no mínimo 1 quarto!');
        }
        quartosTotais = parseInt(prompt('Qual a quantidade de quartos totais do hotel: '));
    }

    let quartosDisponiveis = parseInt(prompt('Qual a quantidade de quartos disponíveis nesse hotel: '));
    while (isNaN(quartosDisponiveis) || quartosDisponiveis > quartosTotais || quartosDisponiveis <= 0) {
        if (isNaN(quartosDisponiveis)) {
            console.log('[ERRO] Quantidade de quartos disponíveis só pode conter números!');
        } else if (quartosDisponiveis > quartosTotais) {
            console.log('[ERRO] A quantidade de quartos disponíveis precisa ser menor ou igual que a quantidade total!');
        } else if (quartosDisponiveis <= 0) {
            console.log('[ERRO] Precisa ter pelo menos 1 quarto disponível!');
        }
        quartosDisponiveis = parseInt(prompt('Qual a quantidade de quartos disponíveis nesse hotel: '));
    }
    hoteis.push({ id: id, nome: nome, cidade: cidade, quartosTotais: quartosTotais, quartosDisponiveis: quartosDisponiveis })
    console.log('Hotel adicionado com sucesso!');
    console.log('Voltando para o menu...');
    console.log('----------------');
    paginaInicial();
}



function alternativa2(){
    console.log('------------')
    console.log('Buscar hoteis por cidade:')
    let busca = prompt('Em qual cidade você está procurando hotéis? ').toUpperCase()
    let encontrouHotel = false
    for(chave of hoteis){
        if(chave.cidade === busca){
            console.log(`Encontramos o hotel ${chave.nome} em ${busca}`)
            encontrouHotel = true
        }
    }
            if(!encontrouHotel){
            console.log(`Nenhum hotel encontrado em ${busca}`)
            let escolha = prompt('Deseja realizar uma nova perquisa? (S/N) ').toUpperCase()
                while(escolha !== 'S' && escolha !== 'N'){
                    console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                    escolha = prompt('Deseja realizar uma nova perquisa? (S/N) ').toUpperCase()
                }
                if(escolha === 'S'){
                    alternativa2()
                }else{
                    console.log('Voltando para o menu...')
                    console.log('------------------')
                    paginaInicial()
                }
                return
        }
    let reserva = prompt('Deseja aproveitar e fazer uma reserva em um desses hoteis? (S/N) ').toUpperCase()
    while(reserva !== 'S' && reserva !== 'N'){
        console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
        reserva = prompt('Deseja aproveitar e fazer uma reserva em um desses hoteis? (S/N) ').toUpperCase()
    }
    if(reserva === 'S'){
        alternativa3()
    }else{
        console.log('Voltando para o menu...')
        console.log('------------------')
        paginaInicial()
    }
}

function alternativa3(){
    let id = Math.floor(Math.random() * 999)
    for(let i = 0; i < reservas.length; i++){
        if(reservas[i].idReserva === id){
            id = Math.floor(Math.random() * 999)
            break
        }
    }
    console.log('---------------')
    console.log('Fazendo a reserva de um hotel:')
    let nomeCliente = prompt('Qual seu nome: ').toUpperCase()
    while(nomeCliente.length === 0){
        console.log('[ERRO] É necessário adicionar um nome!')
        nomeCliente = prompt('Qual seu nome: ').toUpperCase()
    }
    let nome = prompt('Qual o nome do hotel que deseja se hospedar? ').toUpperCase()
    while(nome.length === 0){
        console.log('[ERRO] É necessário adicionar um nome!')
        nome = prompt('Qual o nome do hotel que deseja se hospedar? ').toUpperCase()
    }
    let hotelEncontrado = false
    let hotel
    for(chave of hoteis){
        if(nome === chave.nome){
            hotelEncontrado = true
            hotel = chave
            break
        }   
    }    
        if(!hotelEncontrado){
            console.log('[ERRO] Não encontramos esse hotel em nosso sistema!')
            console.log('Verifique se está escrito corretamente e tende novamente')
            let pergunta = prompt('Deseja retornar ao menu e ver os hoteis disponível na cidade que deseja? (S/N): ').toUpperCase()
            while(pergunta !== 'S' && pergunta !== 'N'){
                console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                pergunta = prompt('Deseja retornar ao menu e ver os hoteis disponível na cidade que deseja? (S/N): ')
            }
            if(pergunta === 'S'){
                console.log('--------------------')
                paginaInicial()
                return
            }else{
                nome = prompt('Qual o nome do hotel que deseja se hospedar? ').toUpperCase()
            }
        }
        let quartos = parseInt(prompt('Você necessita de quantos quartos? '))
        while(quartos <= 0 || isNaN(quartos)){
            console.log('[ERRO] Você precisa escolher no mínimo 1 quarto!')
            quartos = parseInt(prompt('Você necessita de quantos quartos? '))
        }
        while(hotel.quartosDisponiveis < quartos){
            console.log(`Infelizmente esse hotel só tem ${hotel.quartosDisponiveis} quartos disponíveis :(`)
            let escolha = prompt('Deseja escolher novamente a quantidade de quartos que necessita? (S/N)? ').toUpperCase()
            while(escolha !== 'S' && escolha !== 'N'){
                console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                escolha = prompt('Deseja escolher novamente a quantidade de quartos que necessita? (S/N)? ').toUpperCase()
            }
            if(escolha === 'S'){
                quartos = parseInt(prompt('Você necessita de quantos quartos? '))
            }else{
                console.log('Voltando para o menu...')
                console.log('-------------------------')
                paginaInicial()
                return;
            }

            while(isNaN(quartos)){
                console.log('[ERRO] Quantidades de quartos precisa ser um número!')
                quartos = parseInt(prompt('Você necessita de quantos quartos? '))
            }
            while(quartos < 0){
                console.log('[ERRO] Você precisa escolher no mínomo 1 quarto!')
                quartos = parseInt(prompt('Você necessita de quantos quartos? '))
            }
        }
        hotel.quartosDisponiveis -= quartos
        console.log('Reserva efetuada com sucesso!')
        console.log(`Seu ID é ${id}, guarde esse número se quiser cancelar a reserva!`)
        reservas.push({idReserva: id, idHotel: hotel.id, nomeHotel: hotel.nome, nomeDoCliente: nomeCliente } )
        console.log('Voltando para o menu...')
        console.log('-------------------------')
        paginaInicial()
    
} 

function alternativa4(){
    console.log('--------------')
    console.log('Cancelando sua reserva:')
    let id = parseInt(prompt('Qual o id da reserva? '))
        while(isNaN(id)){
            console.log('[ERRO] ID é apenas números!')
        }
        for(i = 0; i < reservas.length; i++){
            if(reservas[i].idReserva === id){
                console.log(`Encontramos uma reserva com o ID ${id}`)
                let pergunta = prompt('Tem certeza que dejesa cancelar? (S/N): ' ).toUpperCase()
                while(pergunta !== 'S' && pergunta !== 'N'){
                    console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                    resposta = prompt('Tem certeza que dejesa cancelar? (S/N): ' )
                }
                if(pergunta === 'S'){
                    console.log(`Reserva ID ${id} cancelada com sucesso!`)
                    reservas.splice(i)
                    console.log('Voltando para o menu...')
                    console.log('--------------------')
                    paginaInicial()
                    return
                }else{
                    console.log('Retornando para cancelamento...')
                    alternativa4()
                }
                
            }
        }
        console.log('Nenhuma reserva encontrada com esse ID!')
        let escolha = prompt('Deseja ver a lista completa de reservas, para ver o ID? (S/N)? ').toUpperCase()
            while(escolha !== 'S' && escolha !== 'N'){
                console.log('[ERRO] Digite apenas "S" para SIM e "N" para NÃO!')
                escolha = prompt('Deseja ver a lista completa de reservas, para ver o ID? (S/N)? ').toUpperCase()
            }
            if(escolha === 'S'){
                console.log('Abrindo a lista de reservas')
                console.log('-------------------------')
                alternativa5()
                alternativa4()
                return;
            }else{
                console.log('Voltando para o menu...')
                console.log('-------------------------')
                paginaInicial()
            }
}
    
function alternativa5(){
    if(reservas.length === 0){
        console.log('Não existe nenhuma reserva registrada!')
        console.log('Voltando para o menu...')
        console.log('-------------------------')
        paginaInicial()
    }else{
        console.log('Lista das reservas: ')
        console.log(reservas)
        console.log('-------------------------')
        paginaInicial()
    }
}

