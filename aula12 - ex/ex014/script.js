function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if (hora >= 0 && hora < 12) {
        //dia
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //noite
        img.src = 'fumasa.png'
        document.body.style.background = '#515154'
    }
}