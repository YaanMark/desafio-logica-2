let vitorias = 200
let derrotas = 142
let saldoVitorias = calculaSaldo(vitorias, derrotas)
let rank = calculaRank(saldoVitorias)

console.log("O herói tem saldo de " + saldoVitorias + " e está no rank " + rank)



function calculaSaldo(vitorias, derrotas) {
    return vitorias - derrotas
}

function calculaRank(saldoVitorias) {
    let rank
    if(saldoVitorias < 10) {
        rank = "Ferro"
    }else if(saldoVitorias <= 20) {
        rank = "Bronze"
    }else if(saldoVitorias <= 50) {
        rank = "Prata"
    }else if(saldoVitorias <= 80) {
        rank = "Ouro"
    }else if(saldoVitorias <= 90) {
        rank = "Diamante"
    }else if(saldoVitorias <= 100) {
        rank = "Lendário"
    }else {
        rank = "Imortal"
    }
    return rank
}

