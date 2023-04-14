 //Criando objetos/ligação
 oNasc = window.document.querySelector('input#cNasc')
 oSexo = window.document.getElementsByName('tSexo')
 oBotao = window.document.querySelector('input#cBtn')
 oRes = window.document.querySelector('div#result')

 //Criando um escutador, disparador de eventos
 oBotao.addEventListener('click', verificar)   

 function verificar(){
        //Pegando os valores
    oData = new Date()
    oIdade = Number(oData.getFullYear()) - Number(oNasc.value)
    var genero = ''

    if( oSexo[0].checked){
        //Sexo masculino
        window.alert('Você escolheu sexo masculino')
    }

    if( oSexo[1].checked){
        window.alert('Você escolheu sexo feminino')
    }

 }
