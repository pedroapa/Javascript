function acharMenor(){
    //let tamanho = arguments.lenght
    let menor = arguments[0]
    
    for(let c = 1; c < arguments.length; c++){
        if(arguments[c] < menor){
            menor = vet[c]
        }
    }
    return menor
    
}

const vet = [17, 2, 28]
let valorMenor = acharMenor(...vet)