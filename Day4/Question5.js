let s =prompt("Enter your sales ");
if (s>=0 && s<=5000)
{
    let r = s/100*2;
    console.log("Your sales :"+s);
    console.log("Your reward based on your sales:",r);
}
else if (s>5000 && s<=10000)
{
    console.log("Your sales :"+s) ;
    console.log("Your reward based on sales:",s/100*5);
}
else if(s>10000 && s<=20000)
{
    console.log("Your sales :"+s);
    console.log("Your reward based on your sales :",s/100*7);
}
else
{
    console.log("Your sales :"+s);
    console.log("Your reward based on your sales :",s/100*10);
}

