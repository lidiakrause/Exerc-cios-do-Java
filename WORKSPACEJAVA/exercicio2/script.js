let SOMAR = document.querySelector("#somar");
let ipValorQuilo = document.querySelector("#ipValorQuilo");
let ipQuantidadeQuilo = document.querySelector("#ipQuantidadeQuilo");
let ipValorPagar = document.querySelector("#ipValorPagar");

SOMAR.onclick = function() {
    somarValores();
}

function somarValores() {
    let valorQuilo = Number(ipValorQuilo.value);
    let quantidadeQuilo = Number(ipQuantidadeQuilo.value);
    let valorPagar = valorQuilo * quantidadeQuilo;
    ipValorPagar.value = valorPagar.toFixed(2);
}