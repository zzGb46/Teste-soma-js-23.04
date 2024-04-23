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
    var body = document.body;
    body.style.background = "green";
}
}

function botao2(){
    let diminuir = numero-=1;
    document.getElementById("resposta").innerHTML = numero
}

