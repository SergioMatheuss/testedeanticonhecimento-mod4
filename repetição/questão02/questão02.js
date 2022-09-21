// Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e 
// mostrar : 
// a. A menor altura do grupo; 
// b. A maior altura do grupo; 


let alt = [1.72, 1.20, 1.31, 1.84, 1.91, 2.05, 1.60, 1.83, 1.96, 1.75, 1.95, 1.81, 1.72, 1.59];
//essa função deixa a gente pegar uma biblioteca matemática, essa "biblioteca" é um banco de "códigos". e eu estou pegando o maior e menor número da array.
const min = Math.min(...alt);
const max = Math.max(...alt);

console.log (min);
console.log (max);


    

