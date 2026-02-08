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




/* 2/2/2026 so i'm going to bed soon but um yeah mental note to add something
to put the buttons under the picture and add something on top the dancing queen so yeah :D */

/*function areugay(admitit){
    admitit = prompt("are you gay")
    if (admitit!=""){
        alert("Honey, you clicked on this quiz for a reason. You're probably gay and that's ok :D")
    }else{
        alert("WHY DID YOU CLICK ON THIS QUIZ JUST TO LEAVE IT EMPTYHOLY FUCK")
    }


}



areugay();

*/