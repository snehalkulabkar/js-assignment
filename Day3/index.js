//using conditional statement

let a=prompt("Enter your marks :")

if(a>=75)
{
  document.write("A+ grade")
} 
else if(a>=60 && a<=75)
{
  console.log("A grade")
}
else if(a>=40 && a<=60){
  console.log("B grade")
}
else if (a>=35 && a<=40)
{
  console.log("C grade")
}
else
{
  console.log("D grade")
}

//using ternary operator

let b=prompt("Enter your marks :")

console.log((b>=75)?console.log("A+ grade"):
(b>=60 && b<=75)?console.log("A grade"):
(b>=40 && b<=60)?console.log("B"):
(b>=35 && b<=40)?console.log("c grade"):conaole.log("D grade"))     

//using switch 

let c = prompt("Enter your marks")

switch(c)
{
case (c>=75):
  console.log("A+ grade")
  break;
case (c>=60 && c<=75):
  console.log("A grade")
  break;
case (c>=40 && c<=60):
  console.log("B grade")
  break;
case (c>= 35 && c<= 40):
  condole.log("C grade")
  break;
 default :
 console.log("D grade")
}