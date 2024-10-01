let rank = rankVerifieredStatus(11, 0)
console.log(rank)

function rankVerifieredStatus(wins, losses) {
    winsAmount = wins - losses

    if(winsAmount <= 10) {
        rankVerifier = "Ferro"
    } else if(winsAmount >= 11 && winsAmount <= 20) {
        rankVerifier = "Bronze"
    }else if(winsAmount >= 21 && winsAmount <= 50) {
        rankVerifier = "Prata"
    }else if(winsAmount >= 51 && winsAmount <= 80) {
        rankVerifier = "Ouro"
    }else if(winsAmount >= 81 && winsAmount <= 90) {
        rankVerifier = "Diamante"
    }else if(winsAmount >= 91 && winsAmount <= 100) {
        rankVerifier = "Lendário"
    }else if(winsAmount >= 101) {
        rankVerifier = "Imortal"
    }
    return (`O Herói tem ${winsAmount} vitórias e está no nível ${rankVerifier}`)
}
