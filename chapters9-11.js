/* Task 1

var city = "karachi";
var input = prompt("Enter Your City Name: ");

if(input.toLowerCase()===city)
{
    alert("Welcome to the city of lights");

}
else{

}

*/

/* Task 2

var input = prompt("Enter your gender: ");
var result = input.toLowerCase();

if(result==="male")
{
    alert("Good Morning, Sir");
}
else if(result==="female")
{
    alert("Good Morning, Ma'am");
}

*/

/* Task 3

var input = prompt("Enter color: ");
var result = input.toLowerCase();

if(result==="red")
{
    alert("Must stop");
}
else if(result==="yellow")
{
    alert("Ready to move");
}
else if(result==="green")
{
  alert("Move now");
}

*/

/* Task 4

var remainingFuel = prompt("Enter remaining fuel in litres: ");

if(Number(remainingFuel)<0.25)
{
    alert("Please refill the fuel in your car");
}

*/

/* Task 5


a. alert will be displayed
b. alert will not be displayed
c. condition 2 and 4 will be displayed
d. alert will be displayed
e. alert for true will be displayed

*/

/* Task 6

var obtainedMarks = prompt("Enter obtanied marks: ");
var totalMarks = prompt("Enter total marks: ");
var percentage = (obtainedMarks/totalMarks)*100;

if(percentage>=80)
{
  document.write("Total Marks: "+totalMarks+"<br>");
  document.write("Marks Obtained: "+obtainedMarks+"<br>");
  document.write("Percentage: "+percentage+"%"+"<br>")  
  document.write("Grade: A-one"+"<br>");
  document.write("Remarks: Excellent"+"<br>");
}
else if(percentage>=70)
{
  document.write("Total Marks: "+totalMarks+"<br>");
  document.write("Marks Obtained: "+obtainedMarks+"<br>");
  document.write("Percentage: "+percentage+"%"+"<br>")  
  document.write("Grade: A"+"<br>");
  document.write("Remarks: Good"+"<br>");
}
else if(percentage>=60)
{
  document.write("Total Marks: "+totalMarks+"<br>");
  document.write("Marks Obtained: "+obtainedMarks+"<br>");
  document.write("Percentage: "+percentage+"%"+"<br>")  
  document.write("Grade: B"+"<br>");
  document.write("Remarks: You need to improve"+"<br>");
}
else if(percentage<60)
{
  document.write("Total Marks: "+totalMarks+"<br>");
  document.write("Marks Obtained: "+obtainedMarks+"<br>");
  document.write("Percentage: "+percentage+"%"+"<br>")  
  document.write("Fail"+"<br>");
  document.write("Remarks: Sorry"+"<br>");
}

*/

/* Task 7

var secretNumber = 7;
var input = Number(prompt("Guess Secret Number: "));

if(input===7)
{
    alert("Bingo! Correct Answer");
}
else if((input+1)===7)
{
    alert("Close enough to the correct answer");
}

*/

/* Task 8

var input = prompt("Enter a number: ");

if(+input%3===0)
{
    alert("The number is divisible by 3");
}

*/

/* Task 9

var input = prompt("Enter a number: ");

if(+input%2===0)
{
    alert("The number is even");
}
else {
    alert("The number is odd");
}

*/

/* Task 10

var input = prompt("Enter temperature: ");

if(+input>40)
{
    alert("It is too hot outside");
}
else if(+input>30)
{
    alert("The weather today is Normal");
}
else if(+input>20)
{
    alert("Today's weather is cool");
}
else if(+input>10)
{
    alert("OMG! Today's weather is so cool");
}

*/

/* Task 11

var firstNumber = prompt("Enter first number: ");
var secondNumber = prompt("Enter second number: ");
var op = prompt("Enter operator: ");

if(op==="+")
{
    alert(+firstNumber + +secondNumber);
}
else if(op==="-")
{
    alert(firstNumber-secondNumber);
}
else if(op==="*")
{
    alert(firstNumber*secondNumber);
}
else if(op==="/")
{
    alert(firstNumber/secondNumber);
}
else if(op==="%")
{
    alert(firstNumber%secondNumber);
}

*/