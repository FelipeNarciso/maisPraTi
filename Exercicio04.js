//Lendo se os segmentos de reta formam um triângulo//

const prompt = require('prompt-sync')()

let s1 = parseInt(prompt('Digite o tamanho de um segmento de reta: '))
let s2 = parseInt(prompt('Digite o tamanho de um segmento de reta: '))
let s3 = parseInt(prompt('Digite o tamanho de um segmento de reta: '))


if((s1 + s2) > s3 && (s1 + s3) > s2 && (s2 + s3) > s1){
    console.log('Os números digitados formam um triângulo!')
}else{
    console.log('Os números digitados NÃO formam um triângulo!')
}