var randomnum1 = Math.floor(Math.random()*6)+1;
var randomimgsource1 = "images/dice"+randomnum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimgsource1);

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomimgsource2 = "images/dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimgsource2);

if(randomnum1 > randomnum2)
{
  document.getElementById("win").innerHTML = "🚩Player 1 Wins!";
}
else if(randomnum1 < randomnum2)
{
  document.getElementById("win").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.getElementById("win").innerHTML = "Draw!";
}
