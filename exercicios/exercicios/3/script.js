//Objeto
num = document.querySelector('input#txtNum')
selete = document.querySelector('select#selNum')

function adicionar(){
    //Pegar o valor
    n = Number(num.value)

    if( vet.indexOf(n) || num.value.lenght == 0 || n < 1 || n > 100){
        //Mensagem que o numero ja existe
        window.alert(`Valor invalido ou ja encontrado na lista`)
    }
}

function finalizar(){

}

//Criação do vetor
const vet = []
