const listaDeNumerosSorteados = [];
const numeroLimite = 50;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

const titulo = document.querySelector('h1');
const mensagem = document.querySelector('p');
const botaoChute = document.getElementById('kick_button');
const botaoReiniciar = document.getElementById('reiniciar');
const campoChute = document.querySelector('input');


function exibirTextoNaTela(elemento, texto) {
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function inicializarJogo() {
    exibirTextoNaTela(titulo, 'Número Secreto');
    exibirTextoNaTela(mensagem,`Escolha um número entre 1 e ${numeroLimite}`);
    ocultarElemento(botaoReiniciar);
    limparCampoDeEntrada();
}

inicializarJogo();

function verificarChute() {
    const chute = parseInt(campoChute.value.trim()); // Removendo espaços extras e convertendo para número

    // Verificando se o chute é um número válido e dentro do intervalo
    if (isNaN(chute) || chute < 1 || chute > numeroLimite) {
        exibirTextoNaTela(mensagem, `Por favor, insira um número entre 1 e ${numeroLimite}.`);
        limparCampoDeEntrada();
        return;
    }

    if (chute === numeroSecreto) {
        exibirTextoNaTela(titulo, 'Acertou!');
        const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela(
            mensagem,
            `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        );
        finalizarJogo();
    } else {
        const dica = chute > numeroSecreto ? 'O número secreto é menor' : 'O número secreto é maior';
        exibirTextoNaTela(mensagem, dica);
        tentativas++;
        limparCampoDeEntrada();
    }
}


function gerarNumeroAleatorio() {
    if (listaDeNumerosSorteados.length === numeroLimite) {
        listaDeNumerosSorteados.length = 0;
    }

    let numero;
    do {
        numero = Math.floor(Math.random() * numeroLimite) + 1;
    } while (listaDeNumerosSorteados.includes(numero));

    listaDeNumerosSorteados.push(numero);
    return numero;
}

function limparCampoDeEntrada() {
    campoChute.value = '';
}

function finalizarJogo() {
    desativarElemento(botaoChute);
    mostrarElemento(botaoReiniciar);
    ocultarElemento(botaoChute);
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    inicializarJogo();
    ativarElemento(botaoChute);
    mostrarElemento(botaoChute);
    ocultarElemento(botaoReiniciar);
}

function mostrarElemento(elemento) {
    elemento.style.display = 'block';
    elemento.removeAttribute('disabled');
}

function ocultarElemento(elemento) {
    elemento.style.display = 'none';
    elemento.setAttribute('disabled', true);
}


function ativarElemento(elemento) {
    elemento.removeAttribute('disabled');
}

function desativarElemento(elemento) {
    elemento.setAttribute('disabled', true);
}

campoChute.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        verificarChute();
    }
});

botaoReiniciar.addEventListener('click', reiniciarJogo);
botaoChute.addEventListener('click', verificarChute);
