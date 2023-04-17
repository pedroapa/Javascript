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
    var img = document.createElement('img')
    img.setAttribute('id', 'imagem')
    
    var genero = ''

    if( oSexo[0].checked){
        //Sexo masculino
        genero = 'Homem'

        //descobrir a imagem a ser usada
        if( oIdade >= 0 && oIdade <= 5 ){
            //Bebe
            img.setAttribute('src', 'img/bebe-menino.jpg')
        }else if( oIdade <= 13){
            //Criança
            img.setAttribute('src', 'img/garoto.jpg')
        }else if( oIdade <= 18 ){
            img.setAttribute('src', 'img/garoto.jpg')
        }

        
    }

    if( oSexo[1].checked){
        genero = 'Mulher'
    }

    oRes.appendChild(img)

 }
