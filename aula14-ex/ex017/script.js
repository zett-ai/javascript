function tabuada() {
    const num = document.getElementById('txtnum')
    const tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('digita ratao')
    } else {
        const n = Number(num.value)
        tab.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            const item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab{c}`
            tab.appendChild(item)
        }
    }
}