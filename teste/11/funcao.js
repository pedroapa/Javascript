//Praticar funções
/*Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira. */

function somar(n1, n2, n3){
    return n1 + n2 + n3
}

function media(n1, n2, n3){
    let num1 = n1
    let num2 = n2 
    let num3 = n3 
    
    let media = somar(num1, num2, num3) / 3
    return media
}

console.log(`Qual é a media dos números 5, 11, 36: `+ media(5, 11, 36))

