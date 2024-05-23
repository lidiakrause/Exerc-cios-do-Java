let btnVerificar = document.querySelector("#btnVerificar");
let ipValor = document.querySelector("#ipValor");
let ipResultado = document.querySelector("#ipResultado");

btnVerificar.onclick = function (){
    Impar ();
}

function Impar (){
    {
        if (Number (ipValor.value) % 2 === 1) {
         alert("O numero e impar");
       } else {alert = ("O Número é par");
           
       }
   }
       
}

