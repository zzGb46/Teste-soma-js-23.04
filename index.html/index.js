let numero = 0;
document.getElementById("texto").innerHTML = numero;

function botao(){
    let aumentar = numero+=1;
    document.getElementById("resposta").innerHTML = numero;

let valor = 5;

if(numero == valor){
    var body = document.body;
    body.style.background = "red";
}
else if (numero == 10){
    var body = document.body;
    body.style.background = "red";
}
else if(numero == 1){
    var body = document.body;
    body.style.background = "red";
}

else{
    const body = document.body;
    body.style.background = "yellow"
}
}

function botao2(){
    let diminuir = numero-=1;
    document.getElementById("resposta").innerHTML = numero

    let valor2 = 2;
    if(numero == valor2){
var body = document.body;
body.style.background = "orange";
    }
}

