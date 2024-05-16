//objetos//  //{} define objeto  // chave e valor

/*const pessoa = {
    nome: "Lucas",     //valor
    idade: 18,
    email: "lucas@teste.com",
    profissao: "Músico",
    empregada: true,
}

//usa o "." para acesssar
console.log(pessoa)

delete pessoa.empregada  // detela um valor

console.log(pessoa)*/


// adicionando uma função//
/*const pessoa = {
    nome: "Lucas",     //valor
    idade: 18,
    email: "lucas@teste.com",
    profissao: "Músico",
    empregada: true,
}

pessoa.falar = function() {
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e sou ${this.profissao}`
}

console.log(pessoa.falar())*/

//crie um objeto 

/*const notebook = {
    marca: "Samsung",
    cor: "Branco",
    ligado: true,
    tamanho: "15 polegadas"
}

console.log(notebook)*/

//for in - melhor com objetos
/*const pessoa = {
    nome: "Lucas",     //valor
    idade: 18,
    email: "lucas@teste.com",
    profissao: "Músico",
    empregada: true,
}    

for(let chave in pessoa){
    console.log(chave + ": " + pessoa[chave])
}*/


//for of - melhor com arrays, strings
/*let numeros = [10, 20, 100]

for(let valor of numeros){
    console.log(valor)
} 

let nomes = "Jaques Hyago"

for(let nome of nomes){
    console.log(nome)
}*/

//Exercício:
/*
    Você tem uma lista de objetos que representa diferente tipos de veiculos e suas caracteristicas. Seu objetivo é primeiro usar FOR IN  para listar todas as propriedades e valores de cada veículo. Depois, utilizar o FOR OF para listar apenas os modelos dos veículos
*/
/*const veiculo1 = {
    marca: 'Fiat',
    modelo: 'Palio',
    ano: '2020',
    cor: 'Branco',
    preco: 40500
}

const veiculo2 = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: '2021',
    cor: 'Preto',
    preco: 61000
}

const veiculos = [veiculo1, veiculo2]

for (let dados in veiculos){
    console.log(veiculos[dados])
}

console.log("\n")

for (let veiculo of veiculos){
    console.log(Modelo veículo: ${veiculo.modelo})
}*/


//forEach

/*let cores = ['Azul', 'Preto', 'Branco']

cores.forEach(function(cor, indice){
    console.log(indice + ": " + cor)
})*/

/*
    Construa um array de números e calcule a soma total dos números e também imprima cada número multioplicado por dois.
*/

/*let numeros = [1, 2, 3, 4]
let soma = 0

numeros.forEach(function(value, index){
    console.log(`Multiplicado por 2: `+ value*2) 
    soma += value
}) 
console.log('Soma igual a: '+ soma)*/

