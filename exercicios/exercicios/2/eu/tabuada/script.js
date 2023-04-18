//Criando objetos
var vInputNum = document.getElementById('txtNum')
var vBotao = document.getElementById('btn')
var vSelect = document.getElementById('cTabuada')
var opt = document.getElementById('exp')
var res = document.getElementById('result')
var rodou = false

function mostrarTabuada(){

    //Numero inserido pelo usuario
    var num = Number(vInputNum.value)

    if(vInputNum.value.length == 0){
        window.alert('Por favor dite um número!')
    }else {
        opt.style.display = 'none'

        if(!rodou){
            for(var i = 1; i <= 10; i++){
                //criando elemento dinamicamente
                var linha = document.createElement('option')
                linha.setAttribute('id', i)
                linha.innerHTML += `${num} * ${i} = ${num * i}<br>`
                //mostrando na tela
                vSelect.appendChild(linha)
                rodou = true
            }
        }else {
            for(var i = 1; i <= 10; i++){
                opcao = document.getElementById(i)
                opcao.innerHTML = `${num} * ${i} = ${num * i}<br>`
            }
        }
            
    }
 
}



