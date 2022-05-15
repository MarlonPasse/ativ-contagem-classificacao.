
//Sistema de contagem e classificação
//FAÇA UM PROGRAMA QUE RECEBA 15 NÚMEROS INTEIROS E IMPRIMA NA TELA A SOMATÓRIA DOS 15 NÚMEROS

//Resolvenndo sem laço de repetição

//let n1 = 50;
//let n2 = 30;
//let n3 = 90;
//let resultado = 0;

//resultado = resultado + n1 + n2 + n3;

//console.log("A soma dos números é " + resultado);


//resolvendo exercicio com utilizacao do FOR

let entrada = require('readline-sync');

let resultado = 0;

for (let i = 1; i <= 3; i++){

let n1 = parseInt(entrada.question("Digite um numero: ") );
resultado = resultado + n1;

}

console.log("A soma dos números é" + resultado);


//FIM!!

