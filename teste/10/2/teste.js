function acharMenor(){
    let tamanho = vet.length
    let menor = vet[0]
    console.log(`TAMANHO: ${tamanho} e MENOR: ${menor}`)
    
    for(let c = 0; c < tamanho; c++){

        if(arguments[c] < menor){
            menor = vet[c]
        }
    }
    
    return menor
}

const vet = [11, 35, 5]
let valorMenor = acharMenor(...vet)
console.log(`O menor número do vetor é: ${valorMenor}`)