function organizar(num1, num2){
   if(num2 < num1){
        let aux = num1
        vet[0] = num2 
        vet[1] = aux
   }
   console.log(`O vetor organizado ficou: ${vet}`)
}

const vet = [24, 8]
console.log(`O vetor se encontra assim: ${vet}`)
organizar(...vet)

