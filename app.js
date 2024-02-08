let listaDeNumerosSorteados = [];
let limite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Adivinhe o número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let palpite = document.querySelector('input').value;

    if (palpite == numeroAleatorio){
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número aleatório com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (palpite > numeroAleatorio){
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if(quantidadeDeElementos == 10) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    palpite = document.querySelector('input');
    palpite.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


