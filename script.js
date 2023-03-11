function somar(){
    let numero_caixa1 = document.getElementById('caixa1')
    let numero_caixa2 = document.getElementById('caixa2')
    let res = document.getElementById('resultado')

    let numero1 = Number(numero_caixa1.value)
    let numero2 = Number(numero_caixa2.value)
    let somar = numero1 + numero2

    res.innerHTML = (`O valor ${numero1} somando com ${numero2} é igual a ${somar}`)
    
}

function diminuir(){
    let numero_caixa3 = document.getElementById('caixa3')
    let numero_caixa4 = document.getElementById('caixa4')
    let res = document.getElementById('resultado2')

    let numero3 = Number(numero_caixa3.value)
    let numero4 = Number(numero_caixa4.value)
    let diminuir = numero3 - numero4

    res.innerHTML = (`O valor ${numero3} somando com ${numero4} é igual a ${diminuir}`)
}

