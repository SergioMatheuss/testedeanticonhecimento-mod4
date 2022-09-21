// Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem 
// decrescente. 



let a = 7;
let b = 8; 
let c = 2;
// descobrir o maior    
if (a>b && a>c)
    document.write(`${a} `);
else if(b>a && b>c)
    document.write(`${b} `);
else if(c>a && c>b)
    document.write(`${c} `);
// descobrir o meio
if((a>b && a<c) || (a<b && a>c))
    document.write(`${a} `);
else if((b<a && b>c) || (b>a && b<c))
    document.write(`${b} `);
else if((c<a && c>b) || (c>a && c<b))
    document.write(`${c} `);
// descobrir o menor    
if (a<b && a<c)
    document.write(`${a} `);
else if(b<a && b<c)
    document.write(`${b} `);
else if(c<a && c<b)
    document.write(`${c} `);
