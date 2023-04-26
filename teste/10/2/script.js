//Objeto
let res = document.querySelector('div#result')

function acharMenor(){
    let tamanho = vet.length
    let menor = vet[0]
    //window.alert(`TAMANHO: ${tamanho} e MENOR: ${menor}`)
    
    for(let c = 0; c < tamanho; c++){
        if(vet[c] < menor){
            menor = vet[c]
        }
    }
    return menor
    
}

function iniciar(){
    for(let c = 0; c < 3; c++){
        vet.push( Number(window.prompt(`Digite o ${c+1}° número: `)) )
    }
    res.innerHTML = `O vetor ficou assim: [${vet}]`

    //Continuação
   
    let valorMenor = acharMenor(...vet)
    res.innerHTML += `<br>O menor valor do vetor é: ${valorMenor}`
}

const vet = []