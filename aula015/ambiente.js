let num = [5, 8, 9, 2, 1,]
num[5] = 7 
num.push(3) //coloca o nmr automaticamente na ordem
num.length
num.sort() // coloca os elementos em ordem crescente

console.log(num);
console.log(`o vetor tem ${num.length} posições`);
console.log(`o primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(11) //indexOf procura um elemento específico
if (pos == -1){
    console.log('o valor ta no teu c');
} else {
    console.log(`o valor tá na posição ${pos}`);
}
