/* Task 1

var arr = [[]];

*/

/* Task 2

var arr = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]

*/

/* Task 3

for(var i=0; i<10; i++)
{
    document.write(i+1+"<br>");
}

*/

/* Task 4

var num = prompt("Enter a number to show its multiplication table: ");
var len = prompt("Enter length of multiplication table: ");

for(var i=1; i<=+len; i++)
{
    document.write(num+" * "+i+" = "+(num*i)+"<br>");
}

*/

/* Task 5

var fruits = ["apple","banana","mango","orange","strawberry"];
var len = fruits.length;

for(var i=0; i<len; i++)
{
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

*/

/* Task 6

document.write("<strong>Counting:</strong><br><br>");

for(var i=0; i<15; i++)
{
    document.write(i+1+",");
}

document.write("<br><br>");

document.write("<strong>Reverse Counting:</strong><br><br>");

for(var i=10; i>0; i--)
{
    document.write(i+",");
}

document.write("<br><br>");

document.write("<strong>Even:</strong><br><br>");

for(var i=0; i<=20; i++)
{
    if(i%2===0)
    {
        document.write(i+",");
    }
}

document.write("<br><br>");

document.write("<strong>Odd:</strong><br><br>");

for(var i=0; i<=20; i++)
{
    if(i%2===1)
    {
        document.write(i+",");
    }
}

document.write("<br><br>");

document.write("<strong>Series:</strong><br><br>");

var counter = 2;

for(var i=counter; i<=20; i++)
{
    if(i%2===0)
    {
        document.write(i+"K, ");
    }
    
}

*/


/* Task 7

var arr = ["cake","apple pie","cookie","chips","patties"];

var input = prompt("Welcome to the bakery\n\nWhat do you want to order, Sir/Ma'am?: ");

var len = arr.length;

var flag = 0;
for(var i=0; i<len; i++)
{
    if(arr[i]===input.toLocaleLowerCase())
    {
        alert(input+" is available at index "+i+" in our bakery");
        flag = 1;
        break;
    }
}

if(flag==0)
{
    alert("We are sorry. "+input+" is not available in our bakery.");
}

*/

/* Task 8

var arr = [24,53,78,91,12];

var len = arr.length;

var lg = arr[0];

for(var i=0; i<len; i++)
{
    if(lg<arr[i])
    {
        lg = arr[i];
    }
}

document.write("<b>Array Items:</b> ");

for(var i=0; i<len; i++)
{
    document.write(arr[i]+",");
}

document.write("<br><b>The Largest Number is:</b> "+lg);

*/

/* Task 9

var arr = [24,53,78,91,12];

var len = arr.length;

var sm = arr[0];

for(var i=0; i<len; i++)
{
    if(sm>arr[i])
    {
        sm = arr[i];
    }
}

document.write("<b>Array Items:</b> ");

for(var i=0; i<len; i++)
{
    document.write(arr[i]+",");
}

document.write("<br><b>The Smallest Number is:</b> "+sm);

*/

/* Task 10

for(var i=1; i<=20; i++) 
{
    document.write(5*i+", ");
    
}

*/