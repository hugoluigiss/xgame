const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')
const nuvens = document.querySelector('.nuvens');
const somPulo = document.querySelector('.somPulo');
const gameOverSound = document.querySelector('.gameOverSound');
const monstro = document.querySelector('.monstro');
const fogo = document.querySelector('.fogo');


document.addEventListener('click', () => {
    somPulo.play()
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)

});

function novoJogo(){
    let novoJogo = confirm("Jogar Novamente?")
         if(novoJogo === true){
             location.reload();
         }else{
             location.reload();
         }
}

function ativaFogo(){
    fogo.classList.add('mostrarGame');
}

setTimeout(() => {
    ativaFogo()
    console.log("função ativada fogo")
},10000)


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const monstroPosition = monstro.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvensPosition = nuvens.offsetLeft;
    const fogoPosition = fogo.offsetLeft;


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        gameOverSound.play();
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './src/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = "50px"

        nuvens.style.animation = 'none'
        nuvens.style.left = `${nuvensPosition}px`

        monstro.style.animation = 'none'
        monstro.style.left = `${monstroPosition}px`

        fogo.style.animation = 'none'
        fogo.style.left = `${fogoPosition}px`

        clearInterval(loop)
        somPulo.src = ''
        novoJogo();
    }

    if (monstroPosition <= 90 && monstroPosition > 0 && marioPosition < 80) {
        gameOverSound.play();
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './src/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = "50px"

        nuvens.style.animation = 'none'
        nuvens.style.left = `${nuvensPosition}px`

        monstro.style.animation = 'none'
        monstro.style.left = `${monstroPosition}px`

        fogo.style.animation = 'none'
        fogo.style.left = `${fogoPosition}px`

        console.log( "perdeu com monstro")

        clearInterval(loop)
        somPulo.src = ''
        novoJogo();
    }

    if (fogoPosition <= 120 && fogoPosition > 0   && marioPosition < 80) {
        gameOverSound.play();
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './src/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = "50px"

        nuvens.style.animation = 'none'
        nuvens.style.left = `${nuvensPosition}px`

        monstro.style.animation = 'none'
        monstro.style.left = `${monstroPosition}px`

        fogo.style.animation = 'none'
        fogo.style.left = `${fogoPosition}px`

        console.log( "perdeu com fogo" + fogoPosition)
        clearInterval(loop)
        somPulo.src = ''
        novoJogo();
    }

}, 10);





