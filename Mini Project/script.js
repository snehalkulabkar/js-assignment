let quotes=[
    'A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)',
    'In order to understand recursion, one must first understand recursion. (Anonymous)',
    'There are only two kinds of programming languages: those people always bitch about and those nobody uses. (Bjarne Stroustrup)',
    'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. (Anonymous)',
    'It’s not a bug – it’s an undocumented feature. (Anonymous)',
    'if you wont understand javascript then its lol.(Anonymous)',
    'HTML,CSS,JS is just awesome language you just learn it now.(Anonymous)',
    'Programers is just amazing.(Anonymous)',
    'you love programming?? if yes then you are cool Guy.(Anonymous)',
    'Deletation of code is debugged code.(Anonymous)',
    'A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)',
    'Programming is like sex. One mistake and you have to support it for the rest of your life. (Michael Sinz)',
    'Walking on water and developing software from a specification are easy if both are frozen. (Edward V Berard)',
    'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. (Rick Cook)',
    'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. (Seymour Cray)',
    'One man’s crappy software is another man’s full-time job. (Jessica Gaston)',
    'There are two ways to write error-free programs; only the third one works. (Alan J. Perlis)',
    'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. (Anonymous)',
    'A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)',
];

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">

    <p>${quotes[index]}</p>
    
    </div>
    
    `;
    div.innerHTML=quote;
}


