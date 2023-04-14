//Criação dos objetos
var vInputIni = document.querySelector('input#txtIni')
var vInputFim = document.querySelector('input#txtFim')
var vInputPas = document.querySelector('input#txtPas')
var vBotao = document.querySelector('input#btn')
var res = document.querySelector('div#result')

//Criando escutador no botão
vBotao.addEventListener('click', contar)

function contar(){
    /*
    //Pegar os valores inseridos
    var vInicio = Number(vInputIni.value)
    var vFim = Number(vInputFim.value)
    var vPasso = Number(vInputPas.value)
    */
    var vInicio = 10
    var vFim = 40
    var vPasso = 5

    if( vInputIni.value.length == 0 || vInputFim.value.length == 0 || vInputPas.value.length == 0){
        res.innerText = 'Impossível contar!'
    }else{
        //Proteção quando n passos = 0
        if( vPasso.value == 5 ){
            window.alert('Passo Invalido! Considerando PASSO 1')
            vPasso.value = 1
        }

        //Limpa o que esta escrito na div
        res.innerText = ''
    
        while( vInicio <= vFim ){
            res.innerHTML += `${vInicio} --> `
            vInicio += vPasso
        }
        res.innerText += '#'
    }

}