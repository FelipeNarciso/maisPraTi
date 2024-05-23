//Array de objetos sobre transações financeiras//

let transações = [
    {id: 1 , valor: 1634.45 , data: '01/04/2024' , categoria: 'carro'},
    {id: 2 , valor: 525.89 , data: '03/04/2024' , categoria: 'escola'},
    {id: 3 , valor: 328.99 , data: '10/04/2024' , categoria: 'mercado'},
    {id: 4 , valor: 128.99 , data: '12/04/2024' , categoria: 'mercado'},
    {id: 5 , valor: 487.66 , data: '15/04/2024' , categoria: 'luz'},
    {id: 6 , valor: 110.00 , data: '20/04/2024' , categoria: 'internet'},
    {id: 7 , valor: 287.55 , data: '28/04/2024' , categoria: 'mercado'},
    {id: 8 , valor: 150.00 , data: '30/04/2024' , categoria: 'saude'},
]

function gastoMensal(){
   let total = {}
    transações.forEach(function (chave) {
        let tipo = chave.categoria
        let valor = chave.valor
        if(!total[tipo]){
            total[tipo] = {
                gastos: [],
                total: 0
            }
        }
        total[tipo].gastos.push(valor)
        total[tipo].total += valor
    });
   return total
}
console.log('O gasto em um período de 30 dias foi:' , gastoMensal())





