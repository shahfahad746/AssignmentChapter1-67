/* task 1

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var sum = +firstNumber + +secondNubmer;
alert("Sum of "+firstNumber+" and "+secondNubmer+" is "+sum);

*/

/* task 2 

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var subtract = firstNumber - secondNubmer;
alert("Subtraction of "+firstNumber+" and "+secondNubmer+" is "+subtract);

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var multiplication = firstNumber * secondNubmer;
alert("Multiplication of "+firstNumber+" and "+secondNubmer+" is "+multiplication);

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var division = firstNumber / secondNubmer;
alert("Division of "+firstNumber+" and "+secondNubmer+" is "+division);

var firstNumber = prompt("Enter first number");
var secondNubmer = prompt("Enter second number");
var mod = firstNumber % secondNubmer;
alert("Modulus of "+firstNumber+" and "+secondNubmer+" is "+mod);

*/

/* task 3

var x;
document.write("Value after variabe declaration: "+x+"<br>");
x=3;
document.write("Initial Value: "+x+"<br>");
x++;
document.write("Value after increment is: "+x+"<br>");
x += 7;
document.write("Value after addition is: "+x+"<br>");
x--;
document.write("Value after decrement is: "+x+"<br>");
var remainder = x%3;
document.write("Remainder is: "+remainder+"<br>");
*/

/* task 4

var cost = 600;
document.write("Total cost to buy 5 tickets to a movie is "+(600*5)+"PKR");
*/

/* task 5

var tableNum = 3;

for(var i=0; i<10; i++)
{
    document.write(tableNum+"*"+(i+1)+"="+(tableNum*(i+1))+"<br>");
}

*/

/* task 6

var celsius = 37;
var fahrenheit = (celsius*(9/5)+32);
document.write(celsius+"<sup>o</sup>C is "+fahrenheit+"<sup>o</sup>F <br>");

celsius = ((fahrenheit-32)*(5/9));
document.write(fahrenheit+"<sup>o</sup>F is "+celsius+"<sup>o</sup>C <br>");

*/

/* task 7

var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;

var cost = (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges;

document.write("Price of Item 1 is "+priceItem1+"<br>");
document.write("Quantity of Item 1 is "+quantityItem1+"<br>");
document.write("Price of Item 2 is "+priceItem2+"<br>");
document.write("Quantity of Item 2 is "+quantityItem2+"<br>");
document.write("Shipping Charges "+shippingCharges);
document.write("<br><br>");
document.write("Total cost of your order is "+cost);

*/

/* Task 8

var marksObtained = 750;
var totalMarks = 900;
var percentage = (marksObtained/totalMarks)*100;
document.write("Total Marks: "+totalMarks);
document.write("Obtained Marks: "+marksObtained);
document.write("Percentage: "+percentage);

*/

/* Task 9

var dollars = 10;
var riyals = 25;
var rupees = (dollars*104.80)+(riyals*28);
document.write("Total Currency in PKR: "+rupees);
*/

/* Task 10

var x = 3;
var y = ((x+3)*10)/2;

*/

/* Task 11

var currentYear = prompt("Enter your current year: ");
var birthYear = prompt("Enter your birth year: "); 
document.write("Your age is: "+(currentYear-birthYear));

*/

/* Task 12

var radius = 20;
var pi = 3.142;
document.write('Radius of the circle is: '+radius+"<br>");
document.write("The circumference is: "+(2*pi*radius)+"<br>");
document.write("The area is: "+(pi*radius*radius));

*/

/* Task 13

var favSnack = prompt("Enter your favorite snack: ");
var currentAge = prompt("Enter your current age: ");
var maxAge = prompt("Enter max age: ");
var snacksPerDay = prompt("Enter amount of snacks per day: ");
var total = (maxAge-currentAge)*snacksPerDay;

document.write("Favourite Snack: "+favSnack+"<br>");
document.write("Current Age: "+currentAge+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of Snacks Per Day: "+snacksPerDay+"<br>");
document.write("You will need "+total+" "+favSnack+" to last until the ripe old age of "+maxAge);

*/