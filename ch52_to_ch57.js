var pic = ["C:\Users\abdul\Documents\Semester6\Online Course MAD\Assignment9\Chapter 1 to 67 (JS)\chapter52-57\images\others\1.jpg","C:\Users\abdul\Documents\Semester6\Online Course MAD\Assignment9\Chapter 1 to 67 (JS)\chapter52-57\images\others\2.jpg"]

document.getElementById("pic1").src = "C:\Users\abdul\Documents\Semester6\Online Course MAD\Assignment9\Chapter 1 to 67 (JS)\chapter52-57\images\others"
document.getElementById("pic2").setAttribute("src",pic[1])


var img1 = document.getElementById("pic1")
img1.classList.add("modelOpen")
img1.classList.remove("modelClose")
img1.style.display = "block"
var src1 = document.getElementById("pic2").src

setTimeout(()=>{ img1.style.display = "none"; }, 550)