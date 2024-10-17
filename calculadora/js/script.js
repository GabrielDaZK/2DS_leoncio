// faz referencia aos elementos Dom
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btnCalcular = document.querySelector('#btn-calcular')
//alert(numero1)
const resultado = document.querySelector('.resultado')
const adicao = document.querySelector('.adicao')
const subtracao = document.querySelector('.subtracao')
const multiplicacao = document.querySelector('multiplicacao')
const divisao = document.querySelector('.divisao')

// cria a função calcular  

function calcular () {
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)
    if (typeof n1 === 'number'
        && typeof n2 === 'number') {
    const adicao = `À soma de ${n1} e ${n2} = ${n1+n2}`
    //alert(adicao)
    adicao.innerHTML = add
} else {
    alert('por favor , digite um numero correto')
}

btnCalcular.addEventListener('click', function(evento){
    evento.preventDefault() // tirar o comportamento padrão
    calcular ()
})

// adociona executar de eventos
