function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if( fano.value.length == 0 || fano.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        window.alert(`Ta tudo ok e O valor de fano =  ${fano.value}`)
    }
}
