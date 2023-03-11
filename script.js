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

function multiplicar(){
    let numero_caixa5 = document.getElementById('caixa5')
    let numero_caixa6 = document.getElementById('caixa6')
    let res = document.getElementById('resultado3')

    let numero5 = Number(numero_caixa5.value)
    let numero6 = Number(numero_caixa6.value)
    let multiplicar = numero5 * numero6

    res.innerHTML = (`O valor ${numero5} somando com ${numero6} é igual a ${multiplicar}`)
}

function dividir(){
    let numero_caixa7 = document.getElementById('caixa7')
    let numero_caixa8 = document.getElementById('caixa8')
    let res = document.getElementById('resultado4')

    let numero7 = Number(numero_caixa7.value)
    let numero8 = Number(numero_caixa8.value)
    let dividir = numero7 / numero8
    
    res.innerHTML = (`O valor ${numero7} somando com ${numero8} é igual a ${dividir}`)
}

