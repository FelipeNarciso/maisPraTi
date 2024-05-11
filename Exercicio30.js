//Somando as linhas e colunas de uma matriz e adcionando em vetores//

let matriz = []

for(i = 0; i < 5; i++){
    matriz[i] = []
    for(j = 0; j < 5; j++){
        matriz[i][j] = Math.floor(Math.random() * 10)
    }
}

let vetorSL = []
let vetorSC = []

for( i = 0; i < 5; i++){
    vetorSL[i] = 0
    vetorSC[i] = 0
}

for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){
        vetorSL[i] += matriz[i][j]
        vetorSC[j] += matriz[i][j]
    }
}

console.log('Dada a Matriz:' , matriz)
for(i = 0; i < 5; i++){
    console.log(`A soma da linha ${i} da Matriz é ${vetorSL[i]}`)
}
console.log('---------------')
for(i = 0; i < 5; i++){
    console.log(`A soma da coluna ${i} da Matriz é ${vetorSC[i]}`)
}

