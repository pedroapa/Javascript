//Objeto
num = document.querySelector('input#txtNum')
selete = document.querySelector('select#selNum')
res = document.querySelector('div#result')

function adicionar(){
    //Pegar o valor
    n = Number(num.value)
    
    if( n < 1 || n > 100 || num.value.lenght == 0 || vet.indexOf(n) != -1){
        //Mensagem que o numero ja existe
        window.alert(`Valor invalido ou ja encontrado na lista`)
        num.value = ''
    }else{
        //Guardar o valor dentro do vetor
        vet.push(n)
        num.value = ''

            //Mostrar dentro do select
        //Criando um elemento
        let opcao = document.createElement('option')
        opcao.innerHTML = `Valor ${n} adicionado`
        selete.appendChild(opcao)

        console.log(`DENTRO DO VETOR: `+ vet)
    }

    

    console.log(`Testando se o valor esta no vetor: ${vet.indexOf(n)}`)
}

function acharMaior(){

}

function finalizar(){
    res.innerHTML += `Ao todo, temos ${arguments.lenght} cadastrados.`
}

//Criação do vetor
const vet = []
