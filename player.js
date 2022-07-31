
//personagens
const alice = document.querySelector('.alice');
const cachorro = document.querySelector('.cachorro');
const gato = document.querySelector('.gato');
const mario3d = document.querySelector('.mario3d');
const vaca = document.querySelector('.vaca');

//paineis e botao jogar
const caixaPersonagens =document.querySelector('.caixaJogadores')
const jogo = document.querySelector('.gameBoard')
const botaoJogar = document.querySelector('.botaoJogar');
const todosPersonagens = document.querySelectorAll('img');


//SELEÇÃO DE PERSONAGENS PARA O JOGO
cachorro.addEventListener('click', () => {
    mario.src = './src/cachorro.gif'
    selecionaCachorro();
});

alice.addEventListener('click', () => {
    mario.src = './src/alice.gif'
    selecionaAlice();
});

gato.addEventListener('click', () => {
    mario.src = './src/cat-run.gif'
    selecionaGato();
});

mario3d.addEventListener('click', () => {
    mario.src = './src/mario3d.gif'
    selecionaMario3d();
});

vaca.addEventListener('click', () => {
    mario.src = './src/vaca.gif'
    selecionaVaca();
});


//BOTÃO JOGAR NOVAMENTE.
botaoJogar.addEventListener('click',() => {
    caixaPersonagens.classList.add('esconderPersonagens');
    jogo.classList.add('mostrarGame');
});


function selecionaCachorro(){
    cachorro.classList.add('personagemSelecionado');
    alice.classList.remove('personagemSelecionado');
    gato.classList.remove('personagemSelecionado');
    mario3d.classList.remove('personagemSelecionado');
    vaca.classList.remove('personagemSelecionado');
}

function selecionaAlice(){
    cachorro.classList.remove('personagemSelecionado');
    alice.classList.add('personagemSelecionado');
    gato.classList.remove('personagemSelecionado');
    mario3d.classList.remove('personagemSelecionado');
    vaca.classList.remove('personagemSelecionado');
}

function selecionaGato(){
    cachorro.classList.remove('personagemSelecionado');
    alice.classList.remove('personagemSelecionado');
    gato.classList.add('personagemSelecionado');
    mario3d.classList.remove('personagemSelecionado');
    vaca.classList.remove('personagemSelecionado');
}

function selecionaMario3d(){
    cachorro.classList.remove('personagemSelecionado');
    alice.classList.remove('personagemSelecionado');
    gato.classList.remove('personagemSelecionado');
    mario3d.classList.add('personagemSelecionado');
    vaca.classList.remove('personagemSelecionado');
}

function selecionaVaca(){
    cachorro.classList.remove('personagemSelecionado');
    alice.classList.remove('personagemSelecionado');
    gato.classList.remove('personagemSelecionado');
    mario3d.classList.remove('personagemSelecionado');
    vaca.classList.add('personagemSelecionado');
}

