/*task1

var a = prompt("Enter base")
var b = prompt("Enter power")
power(a,b)

function power(a,b){
    var temp=1
    for(var i =0 ;i<b;i++){
        temp = temp * a;
    }
    console.log(temp)
}*/

/*task2

var year = prompt("Enter year")
leapYear(year)
function leapYear(y){
    if(y%4 == 0 && y&100 == 0 && y%400 == 0){
        console.log("Leap Year")
    }
    else{
        console.log("No Leap Year")
    }
}*/

/*task3

var a = prompt("Enter a")
var b = prompt("Enter b")
var c = prompt("Enter c")
area(a,b,c)
function calS(a,b,c){
    var sum = a+b+c
    var result = sum/2
    return result;
}
function area(a,b,c){
    var s = calS(a,b,c)
    var sa = s-a
    var sb = s-b
    var sc = s-c
    var a = s*sa*sb*sc
    console.log(a)
    console.log(s)
}*/

/*task4
var ma = prompt("Enter Math number")
var en = prompt("Enter English number")
var sc = prompt("Enter Science number")

main(ma,en,sc)

function ave(n1,n2,n3){
    var sum = parseFloat(n1)+parseFloat(n2)+parseFloat(n3)
    return sum/3;
}
function per(n1,n2,n3){
    return ((parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/300)*100;
}


function main(n1,n2,n3){
    var average = ave(n1,n2,n3)
    var percentage = per(n1,n2,n3)
    console.log("average "+average+" percentage "+percentage+"%")
}*/

/*task5

var sent = prompt("Enter String")
var word = prompt("Enter word")
indexOf(sent,word)

function indexOf(sentence,word){
    var se = sentence.split("");
    var wo = word.split("");
    for(var i =0 ;i< se.length; i++){
        var j=0
        while(j<wo.length && wo[j] == se[i]){
             i++
             j++   
        }
        if(j== wo.length){
            console.log(i-j)
            break;
        }
    }
}*/


/*task6

var str = prompt("Enter String")
fun(str)

function fun(str){
    var string = str.split("")
    for(var i=0 ;i< string.length;i++){
        if(string[i] == "a" || string[i] == "e" ||  string[i] == "i" ||  string[i] == "o" ||  string[i] == "u" ){
            for(var j=i; j<=string.length;j++){
                string[j]=string[j+1]
                string.length = string.length-1
            }
        }
    }
    console.log(string)
}*/

/*task7

var str = prompt("Enter String")
fun(str)

function fun(str){
    var string = str.split("")
    var count=0;
    for(var i=0 ; i< string.length;i++){
        switch(string[i]){
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break;
        }
    }
    if(count==2){
        console.log("OK")
    }
    else{
        console.log("NO")
    }
}*/

/*task8

var num = prompt("Enter number")
meter(num)
centm(num)
inch(num)
feet(num)

function meter(number){
    console.log(""+parseFloat(number)*1000+" m")
}
function centm(number){
    console.log(""+parseFloat(number)*1000*3.28084*12*2.54+" cm")
}
function feet(number){
    console.log(""+parseFloat(number)*1000*3.28084+" f")
}
function inch(number){
    console.log(""+parseFloat(number)*1000*3.28084*12+" inch")
}*/

/*task9

var num = prompt("Enter number")
fun(num)

function fun(n){
    if(n>40){
        n = (parseFloat(n)-40)*12
        console.log(""+n)
    }
}*/

/*task10

var num = prompt("Enter Number")
fun(num)
function fun(amount){
	console.log("Required notes of Rs. 100 "+parseInt(amount) / 100);
	console.log("Required notes of Rs. 50  "+(parseInt(amount) % 100) / 50);
	console.log("Required notes of Rs. 10  "+(((parseInt(amount) % 100) % 50) / 10));
	console.log("Amount still remaining Rs. "+(((parseInt(amount) % 100) % 50) % 10));

}*/