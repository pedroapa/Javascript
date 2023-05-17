//Criando controle
const cep = document.getElementById("cep")
const endereco = document.getElementById("logradouro")
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("localidade")
const estado = document.getElementById("uf")

function procCep(){
    let search = cep.value.replace("-", "")

        //Parte responsavel por AJAX
        const xhttp = new XMLHttpRequest()

        //Função que preenche os formularios
        function preencheFor(json){
            endereco.value = json.logradouro
            bairro.value = json.bairro 
            cidade.value = json.localidade 
            estado.value = json.uf
            //console.log('Chegou a resposta')
        }

        //Quando a resposta vir
        xhttp.onload = function(){
            //Verificar se deu certo
            if(xhttp.readyState == 4 && xhttp.status == 200){
                //console.log('Chegou a resposta')
                preencheFor(JSON.parse(this.responseText))
            }    
        }

        //Mandar para o endereço
        xhttp.open("GET", `https://viacep.com.br/ws/${search}/json/`)
        xhttp.send()

}

cep.addEventListener('mouseout', procCep)
