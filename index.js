var name1 = prompt("Enter name of Player 1");
var name2 = prompt("Enter name of Player 2");
name1.toUpperCase();
name2.toUpperCase();
var randomNumber1 = Math.random();
randomNumber1=Math.ceil(randomNumber1*6) ;

var randomNumber2 = Math.random();
randomNumber2=Math.ceil(randomNumber2*6) ;

var image1 = "images/dice" + randomNumber1 + ".png";

var image2 = "images/dice" + randomNumber2 + ".png";



document.querySelector(".img1").setAttribute("src", image1);

document.querySelector(".img2").setAttribute("src", image2);



if(randomNumber1>randomNumber2)
{
document.querySelectorAll(".container p")[0].innerHTML="";
document.querySelectorAll(".container p")[1].innerHTML=name1+" wins!🚩";
document.querySelectorAll(".container p")[2].innerHTML=name2+" looses";
}
else if(randomNumber2>randomNumber1)
{
document.querySelectorAll(".container p")[0].innerHTML="";
document.querySelectorAll(".container p")[2].innerHTML=name2+" wins!🚩";
document.querySelectorAll(".container p")[1].innerHTML=name1+" looses";
}
else
{
  document.querySelectorAll(".container p")[1].innerHTML="";
  document.querySelectorAll(".container p")[2].innerHTML="";
}
document.querySelector("h1").onClick();
