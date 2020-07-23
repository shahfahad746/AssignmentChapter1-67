/* Task 1

var a = prompt("Enter a number: ");
document.write("The value of a is: "+a+"<br><br>");
document.write("...........................<br>");

document.write("The value of ++a is: "+(++a)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The value of a++ is: "+(a++)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The value of --a is: "+(--a)+"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The value of a-- is: "+(a--)+"<br>");
document.write("Now the value of a is: "+a);

*/

/* Task 2

var a = 2, b = 1;

var result = --a - --b + ++b + b--;

document.write("a is: "+a+"<br>");
document.write("b is: "+b+"<br>");
document.write("result is: "+result);

*/

/* Task 3

var name = prompt("Enter your name: ");

alert("Welcome "+name+" to the website");

*/

/* Task 5

var x = prompt("Enter a number: ");
var defaultTable = 5;

if(x===null || x==="")
{
    for(var i=0; i<10; i++)
    {
        document.write(defaultTable+" * "+(i+1)+" = "+(defaultTable*(i+1))+"<br>");
    }
}
else{

    for(var i=0; i<10; i++)
    {
        document.write(x+" * "+(i+1)+" = "+(x*(i+1))+"<br>");
        
    }

}


*/


/* Task 6

var subject1 = prompt("Enter first subject: ");
var obtainedMarks1 = prompt("Enter Marks obtainend in first subject: ");
var subject2 = prompt("Enter second subject: ");
var obtainedMarks2 = prompt("Enter Marks obtainend in second subject: ");
var subject3 = prompt("Enter third subject: ");
var obtainedMarks3 = prompt("Enter Marks obtainend in third subject: ");

var totalMarks = 100;

var percentage1 = (obtainedMarks1/totalMarks)*100;
var percentage2 = (obtainedMarks2/totalMarks)*100;
var percentage3 = (obtainedMarks3/totalMarks)*100;

document.getElementById("subject1").innerHTML = subject1;
document.getElementById("obtainedMarks1").innerHTML = obtainedMarks1;
document.getElementById("percentage1").innerHTML = percentage1+"%";

document.getElementById("subject2").innerHTML = subject2;
document.getElementById("obtainedMarks2").innerHTML = obtainedMarks2;
document.getElementById("percentage2").innerHTML = percentage2+"%";


document.getElementById("subject3").innerHTML = subject3;
document.getElementById("obtainedMarks3").innerHTML = obtainedMarks3;
document.getElementById("percentage3").innerHTML = percentage3+"%";

document.getElementById("totalMarksSum").innerHTML = 300;
document.getElementById("obtainedMarksSum").innerHTML = (+obtainedMarks1 + +obtainedMarks2 + +obtainedMarks3);
document.getElementById("percentageSum").innerHTML = ((percentage1+percentage2+percentage3)/3)+"%";

*/