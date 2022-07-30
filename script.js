setTimeout(()=>{
    document.querySelector('.inicializacao').style.display = 'none'
}, 2000)

document.body.addEventListener('keyup', (event)=>{
    let sound = ''
    let som = false
    switch (event.code) {
        case 'KeyA':
            sound = "dish2"
            som = true
            break;
        case 'KeyS':
             sound = "box1"
             som = true
            break;
        case 'KeyD':
            sound = "box2"
            som = true
            break;
        case 'KeyF':
            sound = "dish3"
            som = true
            break;
        case 'KeyW':
            sound = "box3"
            som = true
            break;
        case 'KeyE':
            sound = "box4"
            som = true
            break;
        case 'KeyQ':
            sound = "dish4"
            som = true
            break;
        case 'KeyR':
            sound = "dish1"
            som = true
            break;
        case 'KeyX':
            sound = "bassDrum"
            som = true
            break;
    }

    if(som){
        playSound(sound)
    }

})

document.body.addEventListener('keyup', (e)=>{
    if(e.code == 'Escape'){
        
        if(document.querySelector('.controles').style.display == 'none'){
            document.querySelector('.controles').style.display = 'flex'
        } else {
            document.querySelector('.controles').style.display = 'none'
        }
        
    }
})

document.querySelector('button.play').addEventListener('click', () =>{
    let song = document.querySelector('input#song').value

    if(song !== ''){
        let songArray = song.split('')
        playComposition(songArray)
    }

})

function playSound(sound){
    let audioElement = document.querySelector(`#${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    if(audioElement){
        document.querySelector('img#bateria').src = `./image/${sound}.png`
        audioElement.currentTime = 0
        audioElement.play()
        setTimeout(()=>{
            document.querySelector('img#bateria').src = './image/bateria.png'
        }, 300)
    }
    if(keyElement){
        keyElement.classList.add('active')
        setTimeout(()=>{
            keyElement.classList.remove('active')
        }, 300)
    }
}

function mostrarTeclado(){
    if(document.querySelector('.controles').style.display == 'none'){
        document.querySelector('.controles').style.display = 'flex'
    } else {
        document.querySelector('.controles').style.display = 'none'
    }
}

function fecharComposicao(){
    document.querySelector('.composicao').style.display = 'none'
}

function abrirComposicao(){
    document.querySelector('.composicao').style.display = 'flex'
}

function playComposition(songArray){
    fecharComposicao()
    let wait = 0
    let soundMusic = []

    for(let k=0;k<songArray.length; k++){

        switch (songArray[k]) {
            case 'a':
                soundMusic[k] = "dish2"
                break;
            case 's':
                soundMusic[k] = "box1"
                break;
            case 'd':
                soundMusic[k] = "box2"
                break;
            case 'f':
                soundMusic[k] = "dish3"
                break;
            case 'w':
                soundMusic[k] = "box3"
                break;
            case 'e':
                soundMusic[k] = "box4"
                break;
            case 'q':
                soundMusic[k] = "dish4"
                break;
            case 'r':
                soundMusic[k] = "dish1"
                break;
            case 'x':
                soundMusic[k] = "bassDrum"
                break;
        }

        setTimeout(()=>{
            playSound(soundMusic[k]);
        }, wait)
        wait += 250
    }
}