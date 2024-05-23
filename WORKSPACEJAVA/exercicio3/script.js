let SOMAR = document.querySelector("#somar");
let ipSaldo = document.querySelector("#ipSaldo");
let ipResultado = document.querySelector("#ipResultado");
let h2Titulo = document.querySelector("#h2Titulo");

SOMAR.onclick = function(){ 
    somarValores();
}

function somarValores(){
    let saldo = parseFloat(ipSaldo.value);
    if (!isNaN(saldo)){
        let reajuste = saldo * 1.01;  // Aplica o reajuste de 1%
        ipResultado.value = reajuste.toFixed(2);
    } else {
        ipResultado.value = "Entrada inválida";
    }
}