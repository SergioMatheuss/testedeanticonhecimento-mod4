// Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
// calcule seu peso ideal, utilizando as seguintes fórmulas: 
// ● para homens: (72.7 * h) – 58; 
// ● para mulheres: (62.1 * h) – 44.7. 


let alt = 0; 
let sex = 'F';
let peso = 0;
if (sex === 'M'){
    document.write (`tua massa ideal é:`,((alt*72.7)-58))
} else {
    document.write (`tua massa ideal é:`,((alt*62.1)-44.7))
}