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
    var img = document.createElement('img', 'div')
    img.createAttribute('id', 'imagem')
    
    var genero = ''

    if( oSexo[0].checked){
        //Sexo masculino
        genero = 'Homem'
    }

    if( oSexo[1].checked){
        genero = 'Mulher'
    }

 }
