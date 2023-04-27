function limpaVet(){
    /*
    console.log(`O tamanho do vetor ${arguments.length}`)
    console.log(`O vetor se encontra assim  ${vet}`)
    vet.pop()
    console.log(`O vetor se encontra assim ${vet} agora`)
    vet.pop()
    console.log(`O vetor se encontra assim ${vet} agora`)
    vet.pop()
    console.log(`O vetor se encontra assim ${vet} agora`)
    vet.pop()
    console.log(`O vetor se encontra assim ${vet} agora`)
    */

    for(let c = 1; c < arguments.length; c++){
        console.log(`O vetor se encontra assim  ${vet}`)
        vet.pop()
    }
    
}

let vet = [5, 1, 2, 9]

limpaVet(...vet)


//console.log(vet.length)
/*

//tentar mandar um vetor sem usar o negocio certo no parametro.

usar laço para ir excluindo os valores do vetor
*/
