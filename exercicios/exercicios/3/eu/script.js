//Objeto
num = document.querySelector('input#txtNum')
selete = document.querySelector('select#selNum')
res = document.querySelector('div#result')

function adicionar(){
    if(viuRelatorio){
        res.innerHTML = ''
        viuRelatorio = false
    }

    //Pegar o valor
    n = Number(num.value)
        
    if( n < 1 || n > 100 || num.value.length == 0 || vet.indexOf(n) != -1){
        //Mensagem de erro
        window.alert(`Valor invalido ou ja encontrado na lista`)
        num.value = ''
    }else{
        //Guardar o valor dentro do vetor
        vet.push(n)
        //Limpa o valor do input
        num.value = ''

            //Mostrar dentro do select
        //Criando um elemento
        let opcao = document.createElement('option')
        opcao.innerHTML = `Valor ${n} adicionado`
        selete.appendChild(opcao)
        inseriu = true
    }
}

function acharMaior(){
    let maior = arguments[0]

    for(let c = 0; c < arguments.length; c++){
        if(arguments[c] > maior){
            maior = arguments[c]
        }
    }
    return maior
}

function acharMenor(){
    let menor = arguments[0]

    for(let c = 0; c < arguments.length; c++){
        if(arguments[c] < menor){
            menor = arguments[c]
        }
    }
    return menor
}

function somaTudo(){
    let soma = 0

    for(let c = 0; c < arguments.length; c++){
        soma += arguments[c]
    }
    return soma
}

function media(){
    let media = somaTudo(...vet) / arguments.length 
    return media
}

function finalizar(){
    if(inseriu){
        //Mostra um relatorio na tela
        res.innerHTML += `<p>Ao todo, temos ${arguments.length} cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${acharMaior(...vet)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${acharMenor(...vet)}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${somaTudo(...vet)}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media(...vet)}.</p>`
        viuRelatorio = true
    }else{
        //Mensagem de erro
        window.alert('Adicione valores antes de finalizar!')
    }
    
}

//Criação do vetor
const vet = []
let viuRelatorio = false
let inseriu = false
