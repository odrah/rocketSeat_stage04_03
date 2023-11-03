/*
    Nesse desafio, você irá solicitar ao usuário que ele insira 
    **dois números** e, a partir daí, calcular:

    - [ ]  A soma dos dois números;
    - [ ]  A subtração dos dois números;
    - [ ]  A multiplicação dos dois números;
    - [ ]  A divisão dos dois números;
    - [ ]  O resto da divisão dos dois números;

    Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

    - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
    - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.



*/

let n1 = Number(prompt("Insira o primeiro número: "))
let n2 = Number(prompt("Insira o segundo número: "))

let soma = n1 + n2
let sub = n1 - n2
let multi = n1 * n2
let div = n1 / n2 
let restDiv = n1 % n2
let parImpar
let iguais

if((soma%2) == 0 ){
  parImpar = "Par"
}else{
  parImpar = "Impar"
}

if(n1 === n2 ){
  iguais = "Iguais"
}else{
  iguais = "Diferentes"
}


alert(`
  A soma dos dois números é: ${soma}
  A subtração dos dois números é: ${sub}
  A multiplicação dos dois números é: ${multi}
  A divisão dos dois números é: ${div}
  O resto da divisão dos dois números é: ${restDiv}
  A soma dos dois números é: ${parImpar}
  Os dois numeros inseridos são: ${iguais}
`)