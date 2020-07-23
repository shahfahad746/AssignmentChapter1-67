/*task1

function display(){
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value

    document.getElementById("data").innerHTML = "First name is "+fname+" Last name is "+lname

}*/


/*task2

function data(){
    document.getElementById("d").innerHTML = "It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger.It features exclusively free content and no commercial ads and is owned and supported by the Wikimedia Foundation, a non-profit organization funded primarily through donations. Wikipedia was launched on January 15, 2001, and was created by Jimmy Wales and Larry Sanger."
}*/

/*task3

function display(){


    var btn = document.createElement("button")
    btn.innerHTML = "Delete"
    btn.onclick = function(){
        var td = event.target.parentNode; 
        var tr = td.parentNode; // the row to be removed
        tr.parentNode.removeChild(tr);
    }

    var btn1 = document.createElement("button")
    btn1.innerHTML = "Edit"
    btn1.onclick = function(){
        
    }


    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value

    var table = document.getElementById("table")

    var row = table.insertRow(0)
    row.setAttribute("id","row")
    var cel1 = row.insertCell(0)
    var cel2 = row.insertCell(1)

    cel1.innerHTML = fname
    cel2.innerHTML = lname
    document.getElementById("row").appendChild(btn)
    document.getElementById("row").appendChild(btn1)


    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""

}*/