//faca um programs que imprima na tela a tabuada de um numero 
//qualquer escolhido pelo usuario ate o 10 

let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada:"));

// tabuada X=========
// 2 x 1 =2
// 2 x 2 =
//2 x 3 =
// 2 x 4 = 

// 1 numero dentro da condicao do for - inicializacao - variavel 
// 2 numero dentro da condicao do for - condicao - verifica a volta da variavel
// 3 numero dentro da condicao do for - incremento - soma as voltas 
// i++ igual a =1 i=1

console.log(`=====TABUADA ${tabuadaEscolhida}======`)

for (let i = 1; i <= 10; i++) {
   // 2 x 4 =
   console.log(tabuadaEscolhida  + " X " + i + " = " + (tabuadaEscolhida * i ))
    
}