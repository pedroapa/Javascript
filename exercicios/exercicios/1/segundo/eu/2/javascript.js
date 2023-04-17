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
        genero = 'homem'

        //descobrir a imagem a ser usada
        if( oIdade >= 0 && oIdade <= 5 ){
            //Bebe
            img.setAttribute('src', 'img/bebe-menino.jpg')
        }else if( oIdade <= 13 ){
            //Criança
            img.setAttribute('src', 'img/garoto.jpg')
        }else if( oIdade <= 18 ){
            //Adolescente
            img.setAttribute('src', 'img/adolescente-homem.jpg')
        }else if( oIdade <= 40 ){
            //Jovem
            img.setAttribute('src', 'img/homem.jpg')
        }else if( oIdade <= 60 ){
            //Maduro
            img.setAttribute('src', 'img/homem-velho.png') 
        }else {
            img.setAttribute('src', 'img/idoso.jpg')
        }

        
    }

    if( oSexo[1].checked){
        genero = 'mulher'

        //descobrir a imagem a ser usada
        if( oIdade >= 0 && oIdade <= 5 ){
            //Bebe
            img.setAttribute('src', 'img/bebe-menina.jpg')
        }else if( oIdade <= 13 ){
            //Criança
            img.setAttribute('src', 'img/garota.jpg')
        }else if( oIdade <= 18 ){
            //Adolescente
            img.setAttribute('src', 'img/adolescente-mulher.jpg')
        }else if( oIdade <= 40 ){
            //Jovem
            img.setAttribute('src', 'img/mulher.jpg')
        }else if( oIdade <= 60 ){
            //Maduro
            img.setAttribute('src', 'img/mulher-velha.jpg') 
        }else {
            img.setAttribute('src', 'img/idosa.jpg')
        }
    }
    oRes.innerHTML = `Detectamos ${genero} com ${oIdade} anos <br>`
    oRes.appendChild(img)
 }


