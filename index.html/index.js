let numero = 0;


document.getElementById('texto').innerHTML = numero;

function botao(){
    let acrescentar = ++numero;
    document.getElementById("resposta").innerHTML = acrescentar;
}
function botao2(){
    let diminuir = --numero;
    document.getElementById("resposta").innerHTML = diminuir;
}