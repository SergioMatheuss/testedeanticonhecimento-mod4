// Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles 
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve 
// terminar quando for lido um número negativo. 


let inter = [10, 30, 90, 70, 50, 90, 80, 60, 70, 26, 30, 10, -1];
let i = 0;
let intei1 = 0;
let intei2 = 0;
let intei3 = 0;
let intei4 = 0;
while (i < inter.length)
{
    if(inter[i] < 0)
    {
        alert ('sucumba')
        break;
    }
    if (inter[i] >= 0  && inter [i]<= 25) {
        intei1++;
        i++;
    }            
    if (inter[i] >= 26 && inter[i] <= 50) { 
        intei2++;
        i++;
    }   
    if (inter [i]>= 51 && inter[i] <= 75) {
        intei3++;
        i++;
    }
    if (inter[i] >= 76 && inter[i] <= 100) {
        intei4++;
        i++;
    }
        
}
console.log (`[0-25]: ${intei1}`);
console.log (`[26-50]: ${intei2}`);
console.log (`[51-75]: ${intei3}`);
console.log (`[76-100]: ${intei4}`);

