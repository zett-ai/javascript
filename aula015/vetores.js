let valores = [8, 1, 7, 4, 9]
valores.sort()

// console.log(valores)

// for (let pos = 0; pos < valores.length; pos++){
//     console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
// }


//for in
for (let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
}