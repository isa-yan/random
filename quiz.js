let gay = document.getElementById('gay')

let gayd = document.getElementById('gayd')
let gays = document.getElementById('gays')
const dancingqueen = document.getElementById('queen')
let count = 0


let woord = document.getElementById('wordofgood')

gayd.onclick = function(){
    count++;
    if (count>=5){
        alert('honey...');
    }

}

gays.onclick = function(){
    alert('bitch you gay :D')
    dancingqueen.classList.add('fade-in');
    dancingqueen.style.zIndex = 100000;
    woord.textContent = 'YAY THEY CAME OUT'
    gayd.classList.add('fade-out')
    gays.classList.add('fade-out')
    
}

/* ok so um yeah this is the more actual part like avoiding*/
const speed = 10

let escapeVector = {
    x:0,
    y:0
}
