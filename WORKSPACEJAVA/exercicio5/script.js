document.addEventListener("DOMContentLoaded", () => {
    const btnComparar = document.querySelector("#btnComparar");
    const ipValor1 = document.querySelector("#ipValor1");
    const ipValor2 = document.querySelector("#ipValor2");
    const ipResultado = document.querySelector("#ipResultado");

    btnComparar.addEventListener("click", () => {
        const valor1 = parseFloat(ipValor1.value);
        const valor2 = parseFloat(ipValor2.value);
        let resultado;

        if (valor1 > valor2) {
            resultado = valor1;
        } else if (valor2 > valor1) {
            resultado = valor2;
        } else {
            resultado = valor1; // ou valor2, já que são iguais
        }

        ipResultado.value = resultado;
    });
});