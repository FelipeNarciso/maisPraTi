class lista{
    constructor(nome, quantidade){
        this.nome = nome;
        this.quantidade = quantidade;
    }

    validateData(){
        for(let i in this){
            if(i[i] === undefined || this[i] === ""){
                return false
            }
        }
        return true
    }
}

class Database{

    constructor(){
        const id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id' , 0)
        }
    }

    createLista(lista) {
        const id = getNextId()
        localStorage.setItem(id, JSON.stringify(lista))
        localStorage.setItem('id' , id)
    }
}

function getNextId(){
    const nextId = localStorage.getItem('id')
    return parseInt(nextId) + 1
}

// function getId() {
//     let id = crypto.randomBytes(2).toString("hex");
//     return id;
// }

function registerLista(){
    let nome = document.getElementById('txtProduto').value
    let quantidade = document.getElementById('qtdProduto').value

    const lista = new lista(nome, quantidade)

    if(lista.validateData()){
        Database.createLista(lista)
    }
}

