console.log("change the background of the pageafter 5 seconds.");

var col = ['red', 'black', 'blue', 'yellow', 'green'];

function changeColor{
    setTimeout(function loop(){
        document.bgColor = col.shift();
        if (col.length)
        {
            setTimeout(loop, 5000);
        }
    },5000);
}
function start() {
    setInterval(changeColor(), 20000);
}
