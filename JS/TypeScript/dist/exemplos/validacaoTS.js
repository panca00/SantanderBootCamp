"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function adicionarNumero(num1, num2, devePrintar, frase) {
    let resultado = num1 + num2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return num1 + num2;
}
let devePrintar = true;
let frase = 'O valor é:';
if (button) {
    button.addEventListener('click', () => {
        console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
    });
}
