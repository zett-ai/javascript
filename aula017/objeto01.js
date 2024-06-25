let amigo = {
nome: 'Garibaldo',
sexo: 'não',
peso: 'pesado',
engordar(p){
    console.log('engordou');
    this.peso += p
}
}

amigo.engordar(' pa krlh')
console.log(`${amigo.nome} pesa ${amigo.peso}`)