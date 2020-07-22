var a = prompt("Enter User Name");

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

const cltime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    cltime.innerText = time;
}


setInterval(clock,1000);
