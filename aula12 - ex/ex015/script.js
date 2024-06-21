function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.legth == 0 || fano.value > ano) {
        window.alert('malou ratao')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `tu tem ${idade} de idade, ratao`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'macho'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'ace.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'zoro.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'curry.png')
            } else {
                //véi
                img.setAttribute('src', 'ryo.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'fêmea'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'ace.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'zoro.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'curry.png')
            } else {
                //véi
                img.setAttribute('src', 'ryo.png')
            }

        } else {
            gênero = '???'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'ace.png')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'zoro.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'curry.png')
            } else {
                //véi
                img.setAttribute('src', 'ryo.png')
            }
        }
        res.innerHTML = `<p>Tu é ${gênero} com ${idade} anos.</p>`
        res.style.textAlign = 'center'
        res.appendChild(img)
        img.style.borderRadius = '50%'
    }
}