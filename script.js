//-----------{exercicio 1}---------------
const animais = ["Leão", "Girafa", "Macaco", "Elefante", "Zebra"];

function contarItensDoArray(lista) {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        contador++;
    }
    return contador;
}

const quantidadeTotalDeAnimais = contarItensDoArray(animais);
document.getElementById('arrayExercicio1').textContent = JSON.stringify(animais);
document.getElementById('resultadoExercicio1').textContent = quantidadeTotalDeAnimais;


//-----------{exercicio 2}---------------

function separarParImpar(numeros) {
    var pares = [];
    var impares = [];

    function separar(i, p, imp) {
        if (i >= numeros.length) return;

        var atual = numeros[i];
        if (atual % 2 === 0) {
            pares[p] = atual;
            separar(i + 1, p + 1, imp);
        } else {
            impares[imp] = atual;
            separar(i + 1, p, imp + 1);
        }
    }

    separar(0, 0, 0);
    return [pares, impares];
}

const botao = document.getElementById('botaoSeparar');
const campoDeEntrada = document.getElementById('entradaDeNumeros');
const campoDeResultado = document.getElementById('resultadoExercicio2');

botao.addEventListener('click', function() {
    
    const textoDoInput = campoDeEntrada.value;

    if (!textoDoInput) {
        campoDeResultado.textContent = "Por favor, digite alguns números.";
        return;
    }
    
    const arrayDeStrings = textoDoInput.split(',');
    const arrayDeNumeros = arrayDeStrings.map(str => Number(str.trim())).filter(n => !isNaN(n));
    const resultadoDaSeparacao = separarParImpar(arrayDeNumeros);
    
    campoDeResultado.textContent = JSON.stringify(resultadoDaSeparacao, null, 2);
});
