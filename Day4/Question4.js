let choice=prompt("Enter your choice that u want to do :\n1.Addition \n 2.Subtraction \n 3.Multiplication \n 4.Division \n 5.Modulo \n 6. Square Root \n 7.Percentage");
let a=prompt("Enter 1st no.:")
let b=prompt("Enter 2nd no.:")
if (choice=="1")
{
    let j=Number(a)+Number(b);
    console.log("Addition:",j)
}
else if(choice=="2")
{
    let s= a-b;
    console.log("Subtraction:",s)
}
else if(choice=="3")
{
    let m= a*b;
    console.log("Multiplication:",m)
}
else if(choice=="4")
{
    let d= a/b;
    console.log("Division:",d)
}
else if(choice=="5")
{
    let md= a%b;
    console.log("Modulo:",md)
}
else if(choice=="6")
{
    let sq=Math.sqrt(a,b);
    console.log("Square root:",sq)
}
else if(choice=="7")
{
    let p=(a/100*b)
    console.log("Percentage:",p)
}
else 
{
    console.log("Invalid input! Choose valid no.")
}
