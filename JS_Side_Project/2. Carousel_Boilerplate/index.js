const dots = document.querySelectorAll(".Dots button");
const imges = document.querySelectorAll(".mainImg img");

let i = 0;
let j = imges.length;
//next page
function next(){
    document.getElementById("img-" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("img-" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}
//previous page
function prev(){
    document.getElementById("img-" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("img-" + (i+1)).classList.add("active");
    indicator(i+1);
}
//dot color change
function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "gray";
    });
    document.querySelector(".Dots button:nth-child(" + num + ")").style.backgroundColor = "black";
}
//dot click
function dot(index){
    imges.forEach(function(img){
        img.classList.remove("active");
    });
    document.getElementById("img-" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}
