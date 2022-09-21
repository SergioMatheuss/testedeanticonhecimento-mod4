// Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
// 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de 
// aproveitamento, usando a fórmula: 
// MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7

let nota1 = 2;
let nota2 = 4;
let nota3 = 8;
let me = (nota1 + nota2 + nota3 / 3)
let ma = (nota1 + nota2 * 2 + nota3 * 3 + me)/7;

if (me >= 9) {
    document.write(`${me}, A, Aprovado.`)
} else if (me >= 7.5 && me <= 9) {
    document.write(`${me}, B, Aprovado.`)
} else if (me >= 6 && me<= 7.5) {
    document.write(`${me}, C, Aprovado.`)
} else if (me >= 4 && me <= 6) {
    document.write(`${me}, D, Reprovado.`)
} else if (me < 4) {
    document.write(`${me}, E, Reprovado.`)
}
