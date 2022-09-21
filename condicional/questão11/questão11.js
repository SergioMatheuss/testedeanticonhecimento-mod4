// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
// normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir 
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado. 

let prod = 9.99;
//juros e descontos
let des10 = (prod*10) / 100;
let des15 = (prod*15) / 100;
let juros = (prod * 10) / 100;
let parcel = (prod / 2);

let pagadouro = parseInt(prompt('Forma de paguamento (entre 1 e 4): '))
if (pagadouro === 1) {
    nalata = prod - des10;    //pagamento sem juros. a vista com desconto
    document.write (`O seu desconto será 10% e o valor total, será = ${nalata}`)
} else if (pagadouro === 2) {
    nalata = prod - des15;
    document.write (`O seu desconto será de 5% e o valor total, será = ${nalata}`)
} else if (pagadouro === 3){
    document.write (`Em duas vezes, preço normal de etique sem juros = ${parcel}, por mês`)
} else if (pagadouro === 4) {
    roubo = juros * 2 + juros
    document.write (` Em duas vezes, preço normal de etiqueta mais juros de 10%, será = ${roubo}`)
}