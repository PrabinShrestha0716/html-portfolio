var randomNumber1;
randomNumber1= Math.floor(Math.random()*6+1);
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
console.log(randomNumber1);

var randomNumber2;
randomNumber2= Math.floor(Math.random()*6+1);
console.log(randomNumber2)
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image1 = document.querySelectorAll("img")[0]; 

image1.setAttribute("src", randomImageSource1);

var image2 = document.querySelectorAll("img")[1]; 

image2.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML="Prabin wins 🥇 ";
}
    else if( randomNumber1<randomNumber2){
        document.querySelector("h2").innerHTML="Pratiksha wins 🏆";
}
    else{
   
    document.querySelector("h2").innerHTML="Both players draw";
}
function refreshPage() {
    setTimeout(function() {
        location.reload();
    }, 250); // 2000 milliseconds = 2 seconds delay
}