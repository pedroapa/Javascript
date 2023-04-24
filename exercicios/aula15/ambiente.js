let num = [5, 8, 2, 9, 3]
console.log(num)
num.push('1')
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`Primeiro valor é ${num[0]}`)
console.log('Agora vamos organizar na ordem crescente: ')
num.sort()
console.log(num)
let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor esta na posição ${pos}`)
}
