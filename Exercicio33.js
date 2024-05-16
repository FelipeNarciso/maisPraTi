//Multiplicando os elementos da diagonal principal pela média da secundária//

let matriz = []

for(i = 0; i < 3; i++){
    matriz[i] = []
    for(j = 0; j < 3; j++){
        matriz[i][j] = Math.floor(Math.random() * 11)
    }
}

let diagonalPrincipal = []
let diagonalSecundaria = []
let mediaDiagonalSecundaria = 0
let soma = 0
let multi = 0

console.log('Dada a matriz: ' , matriz)

for(i = 0; i < 3; i++){
    soma += matriz[i][2 - i]
    diagonalSecundaria.push(matriz[i][2 - i]) 
    for(j = 0; j < 3; j++){
        if(i === j){
            diagonalPrincipal.push(matriz[i][j])
            
        }
    }
}
mediaDiagonalSecundaria = (soma / 3).toFixed()

console.log('Os elementos da diagonal principal são: ' , diagonalPrincipal)
console.log('Os elementos da diagonal secundária são: ' , diagonalSecundaria)
console.log('A média dos elementos da diagonal secundária é: ' , mediaDiagonalSecundaria)

for(i = 0; i < 3; i++){
    multi = diagonalPrincipal[i] * mediaDiagonalSecundaria
    console.log(`${diagonalPrincipal[i]} X ${mediaDiagonalSecundaria} é igual a ${multi.toFixed()}`)
}

