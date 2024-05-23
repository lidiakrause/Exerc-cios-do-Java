document.addEventListener("DOMContentLoaded", () => {
    const btnComparar = document.querySelector("#btnComparar");
    const ipValor1 = document.querySelector("#ipValor1");
    const ipValor2 = document.querySelector("#ipValor2");
    const ipValor3 = document.querySelector("#ipValor3");
    const ipValor4 = document.querySelector("#ipValor4");
    const ipResultado = document.querySelector("#ipResultado");

    btnComparar.addEventListener("click", () => {
        const valor1 = parseFloat(ipValor1.value);
        const valor2 = parseFloat(ipValor2.value);
        const valor3 = parseFloat(ipValor3.value);
        const valor4 = parseFloat(ipValor4.value);

        // Encontrar o menor valor
        const menorValor = Math.min(valor1, valor2, valor3, valor4);

        // Definir o valor do campo de resultado
        ipResultado.value = menorValor;
    });
});