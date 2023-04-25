//Objeto
let res = document.querySelector('div#result')

function iniciar(){
    for(let c = 0; c < 3; c++){
        vet.push(window.prompt(`Digite o ${c+1}° número: `))
    }
    res.innerHTML = `O vetor ficou assim: [${vet}]`
}

const vet = []

