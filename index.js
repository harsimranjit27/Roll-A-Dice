const imgArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

const btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    let randomImg1 = Math.floor(Math.random()*5);
    document.querySelector(".img1").src = imgArray[randomImg1];
    // console.log("Img1: "+randomImg1);
    let randomImg2 = Math.floor(Math.random()*5);
    document.querySelector(".img2").src = imgArray[randomImg2];
    // console.log("Img2: "+randomImg2);
    if(randomImg1>randomImg2){
        document.querySelector(".winner-name").innerHTML="Player 1";
    }
    else if(randomImg1<randomImg2){
        document.querySelector(".winner-name").innerHTML="Player 2";
    }
    else{
        document.querySelector(".winner-name").innerHTML="Draw";
    }
});