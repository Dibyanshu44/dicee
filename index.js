var x=Math.floor(Math.random()*6+1);

var y=Math.floor(Math.random()*6+1);
document.querySelector("img.img1").setAttribute("src","./images/dice"+x+".png");
document.querySelector("img.img2").setAttribute("src","./images/dice"+y+".png");
if(x>y){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(y>x){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw, Both lose 🤡";
}