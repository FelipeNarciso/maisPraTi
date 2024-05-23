// Definindo o objeto Hotel
/*class Hotel {
    constructor(id, nome, cidade, quartosTotais, quartosDisponiveis) {
      this.id = id;
      this.nome = nome;
      this.cidade = cidade;
      this.quartosTotais = quartosTotais;
      this.quartosDisponiveis = quartosDisponiveis;
      this.reservas = [];
    }
  
    // Função para fazer reserva
    fazerReserva(idReserva, nomeCliente) {
      if (this.quartosDisponiveis > 0) {
        this.quartosDisponiveis--;
        this.reservas.push({ idReserva, nomeCliente });
        console.log(`Reserva feita para ${nomeCliente} no hotel ${this.nome}`);
      } else {
        console.log(`Desculpe, não há quartos disponíveis neste hotel.`);
      }
    }
  
    // Função para cancelar reserva
    cancelarReserva(idReserva) {
      const reservaIndex = this.reservas.findIndex(reserva => reserva.idReserva === idReserva);
      if (reservaIndex !== -1) {
        this.quartosDisponiveis++;
        this.reservas.splice(reservaIndex, 1);
        console.log(`Reserva cancelada com sucesso.`);
      } else {
        console.log(`Reserva não encontrada.`);
      }
    }
  }
  
  // Array para armazenar os hotéis
  const hoteis = [];
  
  // Função para adicionar um novo hotel
  function adicionarHotel(id, nome, cidade, quartosTotais, quartosDisponiveis) {
    const novoHotel = new Hotel(id, nome, cidade, quartosTotais, quartosDisponiveis);
    hoteis.push(novoHotel);
    console.log(`Hotel ${nome} adicionado com sucesso.`);
  }
  
  // Função para buscar hotéis por cidade
  function buscarHoteisPorCidade(cidade) {
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
    if (hoteisNaCidade.length > 0) {
      console.log(`Hotéis disponíveis em ${cidade}:`);
      hoteisNaCidade.forEach(hotel => console.log(`${hotel.nome} - Quartos Disponíveis: ${hotel.quartosDisponiveis}`));
    } else {
      console.log(`Não há hotéis disponíveis em ${cidade}.`);
    }
  }
  
  // Função para listar todas as reservas
  function listarReservas() {
    console.log("Reservas:");
    hoteis.forEach(hotel => {
      hotel.reservas.forEach(reserva => {
        console.log(`Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`);
      });
    });
  }
  
  // Exemplo de Uso:
  adicionarHotel(1, "Hotel A", "São Paulo", 20, 20);
  adicionarHotel(2, "Hotel B", "Rio de Janeiro", 30, 30);
  adicionarHotel(3, "Hotel C", "São Paulo", 15, 15);
  
  buscarHoteisPorCidade("São Paulo");
  buscarHoteisPorCidade("Rio de Janeiro");
  
  hoteis[0].fazerReserva(1, "João");
  hoteis[0].fazerReserva(2, "Maria");
  hoteis[1].fazerReserva(3, "Pedro");
  
  listarReservas();
  
  hoteis[0].cancelarReserva(1);
  
  listarReservas();
  */






const prompt = require('prompt-sync')()

  class Hotel {
    constructor(id, nome, cidade, quartosTotais, quartosDisponiveis) {
      this.id = id;
      this.nome = nome;
      this.cidade = cidade;
      this.quartosTotais = quartosTotais;
      this.quartosDisponiveis = quartosDisponiveis;
      this.reservas = [];
    }
  
    // Função para fazer reserva
    fazerReserva(idReserva, nomeCliente) {
      if (this.quartosDisponiveis > 0) {
        this.quartosDisponiveis--;
        this.reservas.push({ idReserva, nomeCliente });
        console.log(`Reserva feita para ${nomeCliente} no hotel ${this.nome}`);
      } else {
        console.log(`Desculpe, não há quartos disponíveis neste hotel.`);
      }
    }
  
    // Função para cancelar reserva
    cancelarReserva(idReserva) {
      const reservaIndex = this.reservas.findIndex(reserva => reserva.idReserva === idReserva);
      if (reservaIndex !== -1) {
        this.quartosDisponiveis++;
        this.reservas.splice(reservaIndex, 1);
        console.log(`Reserva cancelada com sucesso.`);
      } else {
        console.log(`Reserva não encontrada.`);
      }
    }
  }
  
  // Array para armazenar os hotéis
  const hoteis = [];
  
  // Função para adicionar um novo hotel
  function adicionarHotel() {
    const id = parseInt(prompt("Digite o ID do hotel:"));
    const nome = prompt("Digite o nome do hotel:");
    const cidade = prompt("Digite a cidade do hotel:");
    const quartosTotais = parseInt(prompt("Digite o número total de quartos do hotel:"));
    const quartosDisponiveis = parseInt(prompt("Digite o número de quartos disponíveis no hotel:"));
    
    const novoHotel = new Hotel(id, nome, cidade, quartosTotais, quartosDisponiveis);
    hoteis.push(novoHotel);
    console.log(`Hotel ${nome} adicionado com sucesso.`);
  }
  
  // Função para buscar hotéis por cidade
  function buscarHoteisPorCidade() {
    const cidade = prompt("Digite a cidade para buscar hotéis:");
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
    if (hoteisNaCidade.length > 0) {
      console.log(`Hotéis disponíveis em ${cidade}:`);
      hoteisNaCidade.forEach(hotel => console.log(`${hotel.nome} - Quartos Disponíveis: ${hotel.quartosDisponiveis}`));
    } else {
      console.log(`Não há hotéis disponíveis em ${cidade}.`);
    }
  }
  
  // Função para listar todas as reservas
  function listarReservas() {
    console.log("Reservas:");
    hoteis.forEach(hotel => {
      hotel.reservas.forEach(reserva => {
        console.log(`Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`);
      });
    });
  }
  
  // Função para encontrar um hotel pelo ID
  function encontrarHotelPorId(idHotel) {
    return hoteis.find(hotel => hotel.id === idHotel);
  }
  
  // Função principal para interagir com o usuário
  function menuPrincipal() {
    let opcao;
    do {
      opcao = parseInt(prompt(
        "Escolha uma opção:\n" +
        "1. Adicionar hotel\n" +
        "2. Buscar hotéis por cidade\n" +
        "3. Fazer reserva\n" +
        "4. Cancelar reserva\n" +
        "5. Listar reservas\n" +
        "6. Sair"
      ));
  
      switch (opcao) {
        case 1:
          adicionarHotel();
          break;
        case 2:
          buscarHoteisPorCidade();
          break;
        case 3:
          fazerReserva();
          break;
        case 4:
          cancelarReserva();
          break;
        case 5:
          listarReservas();
          break;
        case 6:
          console.log("Saindo...");
          break;
        default:
          console.log("Opção inválida.");
      }
    } while (opcao !== 6);
  }
  
  // Função para fazer reserva
  function fazerReserva() {
    const idHotel = parseInt(prompt("Digite o ID do hotel onde deseja fazer a reserva:"));
    const hotel = encontrarHotelPorId(idHotel);
    if (hotel) {
      const idReserva = parseInt(prompt("Digite o ID da reserva:"));
      const nomeCliente = prompt("Digite o nome do cliente:");
      hotel.fazerReserva(idReserva, nomeCliente);
    } else {
      console.log("Hotel não encontrado.");
    }
  }
  
  // Função para cancelar reserva
  function cancelarReserva() {
    const idHotel = parseInt(prompt("Digite o ID do hotel onde deseja cancelar a reserva:"));
    const hotel = encontrarHotelPorId(idHotel);
    if (hotel) {
      const idReserva = parseInt(prompt("Digite o ID da reserva que deseja cancelar:"));
      hotel.cancelarReserva(idReserva);
    } else {
      console.log("Hotel não encontrado.");
    }
  }
  
  // Exemplo de Uso:
  menuPrincipal();