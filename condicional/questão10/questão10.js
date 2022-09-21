// O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar 
// umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
 
// Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo 
// com a tabela abaixo. 

let peso = 40;
let altura = 1.31;
let imc = peso % (altura*altura);

if (imc <= 18.5) {
    document.write ('vara pau.')
} else if (imc >= 18.5 && imc <= 25) {
    document.write ('Ta batendo a proteína na risca.')
} else if (imc >= 25 && imc <= 30) {
    document.write ('Ta roliço.')
} else if (imc > 30) {
    document.write ('ta igual o monark.')
}