/* Task 1

var arr = [];

*/

/* Task 2

var arr = new Array();

*/

/* Task 3

var arr = ["Shah","Fahad"];

*/

/* Task 4

var arr = [1,2,3];

*/

/* Task 5 

var arr = [true,false];

*/

/* Task 6

var arr = [5,"Shah",true];

*/

/* Task 7

var arr = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];

var len = arr.length;

for(var i=0; i<len; i++)
{
    document.write((i+1)+")"+" "+arr[i]+"<br>");
}

*/

/* Task 8

var studentsNames = [];
var scores = [];
var total = 500;

for(var i=0; i<3; i++)
{
    studentsNames[i] = prompt("Enter Student Name: ");
}

for(var i=0; i<3; i++)
{
    scores[i] = prompt("Enter score: ");
}

for(var i=0; i<3; i++)
{
    document.write("Score of "+studentsNames[i]+" is "+scores[i]+". Percentage: "+(scores[i]/total)*100+"%"+"<br>");
}

*/

// Task 9

/* Task 9(a)

var colors = ["red","orange"];

colors.unshift(prompt("What color do you want in the beginning?: "));

document.write(colors);

*/

/* Task 9(b)

var colors = ["red","orange"];

colors.push(prompt("What color do you want at the end?: "));

document.write(colors);

*/

/* Task 9(c)

var colors = ["red","orange"];

colors.unshift(prompt("What color do you want in the beginning?: "));

colors.unshift("purple","blue");

document.write(colors);

*/

/* Task 9(d)

var colors = ["red","orange"];

colors.shift();

document.write(colors);

*/

/* Task 9(e)

var colors = ["red","orange"];

colors.pop();

document.write(colors);

*/

/* Task 9(f)

var colors = ["red","orange"];

var index = prompt("Enter index number: ");

var color = prompt("Enter color name: ");

colors.splice(+index,0,color);

document.write(colors);

*/

/* Task 9(g)

var colors = ["red","orange","green","purple"];

var index = prompt("Enter index number: ");

var numberOfColors = prompt("How many colors do you want to delete?: ");

colors.splice(+index,+numberOfColors);

document.write(colors);

*/

/* Task 10

var scores = [];

for(var i=0; i<4; i++)
{
    scores[i] = prompt("Enter student scores: ");
}

document.write("Scores of Students: "+scores+"<br>");
var sortedScores = scores;
sortedScores.sort();
document.write("Ordered Scores of Students: "+sortedScores);

*/

/* Task 11

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = [];

for(var i=0; i<3; i++)
{
    selectedCities[i] = cities[i];
}

document.write(selectedCities);

*/

/* Task 12

var arr = ["This","is","my","cat"];

document.write("Array: "+arr+"<br>");
document.write("String: "+arr.join(" "));

*/

/* Task 13

var arr = [];

for(var i=0; i<4; i++)
{
    arr.push(prompt("Enter item: "));
}

for(var i=0; i<4; i++)
{
    document.write("Out: "+arr[i]+"<br>");
}

*/

/* Task 14

var arr = [];

for(var i=0; i<4; i++)
{
    arr.unshift(prompt("Enter item: "));
}

for(var i=0; i<4; i++)
{
    document.write("Out: "+arr[i]+"<br>");
}

*/

/* Task 15

var arr = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
var len = arr.length;

document.write("<select>");

for(var i=0; i<len; i++)
{
    document.write("<option>"+arr[i]+"</option>");
}

document.write("</select>");

*/