let gay = document.getElementById('gay')

let gayd = document.getElementById('gayd')
let gays = document.getElementById('gays')
const dancingqueen = document.getElementById('queen')
let count = 0


let woord = document.getElementById('wordofgood')

gayd.onclick = function(){
    count++;
    if (count===5){
        alert('honey...');
    }
    if (count === 10){
        alert('why')
    }

    if (count >= 12){
        alert('dang person y')
        gayd.innerHTML='<a href="new"><button>no</button></a>'

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

/* logic 
1. generate a random number of both x and y
2. make the top and the left of the element these x and y's
3. on click, the elemnt moves in any direction away from the mouse 
*/

gayd.addEventListener("click",() => {runaway();})


function runaway(){
    const newTop = Math.round((Math.random()) * 500);
    const newLeft = Math.round((Math.random()) * 500); 
    gayd.style.top = newTop + "px"
    gayd.style.left = newLeft + "px"
}