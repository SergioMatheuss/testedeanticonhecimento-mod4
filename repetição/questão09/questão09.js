// 9) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em 
// P.G. contendo 10 valores


// 'a' é o termo, 'r' é a razão, 'i' número de termo que queremos encontrar.
let a = 2;
let r = 4;
let i = 2000000;
for(n = a; n < i;){
    n *= r;
    document.write(`${n} \n`)
}