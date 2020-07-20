while(true)
{
    let n=prompt("Enter a No. ")
    if(n>100)
    {
        console.log("Numbaer:"+n)
    }
    else if(n<100)
    {
        alert("Plz enter the no.which is greater than 100!")
    }
    else if(n==""){
        alert("can't be empty plz enter a no which is greater than 100")
    }
    else 
    {
        console.log("Number:"+n)
        break;
    }
}
