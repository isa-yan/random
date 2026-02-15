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
var avoiding = document.getElementById('donttouchme');

/* logic 
1. generate a random number of both x and y
2. make the top and the left of the element these x and y's
3. on click, the elemnt moves in any direction away from the mouse 
*/

avoiding.addEventListener("click",() => {runaway();})


function runaway(){
    const newTop = Math.round((Math.random()) * 100);
    const newLeft = Math.round((Math.random()) * 100); 
    avoiding.style.top = newTop + "px"
    avoiding.style.left = newLeft + "px"
    console.log('ran!')
}