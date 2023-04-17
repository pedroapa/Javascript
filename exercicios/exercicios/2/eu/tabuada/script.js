//Criando objetos
var vInputNum = document.getElementById('txtNum')
var vBotao = document.getElementById('btn')
var vSelect = document.getElementById('cTabuada')
var opt = document.getElementById('exp')
var res = document.getElementById('result')

function mostrarTabuada(){
    //Numero inserido pelo usuario
    var num = Number(vInputNum.value)
    opt.style.display = 'none'

    for(var i = 1; i <= 10; i++){
        //criando elemento dinamicamente
        var linha = document.createElement('option')
        linha.setAttribute('id', i)
        linha.innerHTML += `${num} * ${i} = ${num*i}<br>`
        //mostrando na tela
        vSelect.appendChild(linha)
    }

   
}



