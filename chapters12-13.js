/* Task 1

var char = prompt("Enter a character: ");

var num = char.charCodeAt();

if(num>=65 && num<=90)
{
    alert("Capital Letter");
}

else if(num>=97 && num<=122)
{
    alert("Small Letter");
}

else if(num>=48 && num<=57)
{
    alert("A number");
}

*/

/* Task 2

var input1 = prompt("Enter First Number: ");
var input2 = prompt("Enter Second Number: ");

if(+input1<+input2)
{
    alert(input2);
}
else if(+input1>+input2)
{
    alert(input1);
}
else if(+input1===+input2)
{
    alert("Both input are equal");
}

*/

/* Task 3

var input = prompt("Enter a number: ");

if(+input>0)
{
    alert("Positive");
}
else if(+input===0)
{
    alert("Zero");
}
else
{
    alert("Negative");
}

*/

/* Task 4

var char = prompt("Enter a charachet: ");

if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u")
{
    alert(true);
}
else
{
    alert(false);
}

*/

/* Task 5

var pass = "FahAd";
var input = prompt("Enter password: ");
var flag = 0;


if(input===null || input==="")
{
  input = prompt("Please enter your password: ");

}

else{

    if(pass.length===input.length)
    {
        for(var i=0; i<pass.length; i++)
        {
            if(pass.charAt(i)===input.charAt(i))
            {
                flag = 1;
            }
            else{
                flag = 0;
                break;
            }
        }

        if(flag===1)
        {
            alert("Correct!");
        }
        else{
            alert("Incorrect Password");
        }
    }
    else{
        alert("Incorrect Passwrod");
    }
}

*/

/* Task 6

var greeting; 
var hour = 13; 
if (hour < 18) 
{ 
    greeting = "Good day";
} 
else{
    greeting = "Good evening"; 
}   

*/

/* Task 7

var time = prompt("Enter time");
time = +time;

if(time>=0000 && time<1200)
{
    alert("Good Morning");
}
else if(time>=1200 && time<1700)
{
    alert("Good Afternoon");
}
else if(time>=1700 && time<2100)
{
    alert("Good Evening");
}
else if(time>=2100 && time<=2359)
{
    alert("Good Night");
}

*/