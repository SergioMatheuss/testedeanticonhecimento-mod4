// Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
// estado civil seja “CASADA”, solicitar o tempo de casada (anos).

let nome = 'nojenta'; 
let sex = 'F';
let eci = 'CASADA';


if (sex == 'F' && eci == 'CASADA') {
    resultado = window.prompt('Quantos anos de casada?');
    document.write (`Você é casada a ${resultado} anos`);
    
};