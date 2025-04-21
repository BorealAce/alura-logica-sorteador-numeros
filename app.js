function sortear() {
    let qtd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (isNaN(qtd) || isNaN(de) || isNaN(ate)) {
        alert('Por favor, preencha todos os campos com números válidos.');
        return;
    }

    if (de >= ate) {
        alert('O valor "Do número" deve ser menor que "Até o número".');
        return;
    }

    if (qtd > (ate - de + 1)) {
        alert('A "Quantidade de números" deve ser menor ou igual ao intervalo definido "Do número" até o "Até o número".');
        return;
    }

    for (let i = 0; i < qtd; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    habilitarBotaoReiniciar();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function habilitarBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
}

function desabilitarBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    desabilitarBotaoReiniciar();
}