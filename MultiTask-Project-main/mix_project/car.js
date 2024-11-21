let movecar=document.getElementById("movecar");
let stopeedcar=document.getElementById("stopeedcar");
let inner=document.getElementById("inner");
let score=document.getElementById("score");
let card=document.getElementById("card");
let speed=document.getElementById("speed");
var count=0;



//random way moving car
movecar.addEventListener("animationiteration",a)
function a(){
    count++;
    
    var random2=(Math.floor(Math.random()*3)+1);
   
    if(random2==1)
    {
        movecar.style.left="00px";
    }else if(random2==2)
    {
        movecar.style.left="100px";
    }else if(random2==3){
        movecar.style.left="200px";
    }

    //*************level up*************
if(count>5&&count<=10)
{ 
    movecar.style["-webkit-animation-duration"]="1800ms"
}else if(count>10 && count<=15)
{
    movecar.style["-webkit-animation-duration"]="1500ms" 
}else if(count>15 && count<=20)
{
    movecar.style["-webkit-animation-duration"]="1300ms"
}else if(count>20&& count<=25 )
{
    movecar.style["-webkit-animation-duration"]="1100ms"
}else if(count>25 && count<=30)
{
    movecar.style["-webkit-animation-duration"]="900ms"
}else if(count>30 && count<=35)
{
    movecar.style["-webkit-animation-duration"]="750ms"
}else if(count>35 && count<=40)
{
    movecar.style["-webkit-animation-duration"]="600ms"
}else if(count>40)
{
    movecar.style["-webkit-animation-duration"]="500ms"
}

}





// stopeed car change position
window.addEventListener("keydown", a1);
function a1(e)
{
    if(e.keyCode=="39"){
                         var carleft=parseInt(window.getComputedStyle(stopeedcar).getPropertyValue("left"));
                         if(carleft<100)
                           {
                           stopeedcar.style.left= carleft +100+"px";
                           } 
                       }
 if(e.keyCode=="37"){
                        var carleft=parseInt(window.getComputedStyle(stopeedcar).getPropertyValue("left"));
                        if(carleft>-100)
                          {
                          stopeedcar.style.left= carleft -100+"px";
                          } 
                      }                   
}

//try to implement this one

//stopeed car change position through left and right clicking
let left=document.getElementById("left");
left.addEventListener("click", a2);
// console.log(left);
function a2()
{
    console.log("hiii");
    var carleft=parseInt(window.getComputedStyle(stopeedcar).getPropertyValue("left"));
    if(carleft>-100)
      {
      stopeedcar.style.left= carleft -100+"px";
      }
    
                         
                       }
let right=document.getElementById("right");
right.addEventListener("click", a3);
function a3()
{
    console.log("hee");
     
                          var carleft=parseInt(window.getComputedStyle(stopeedcar).getPropertyValue("left"));
                          if(carleft<100)
                            {
                            stopeedcar.style.left= carleft +100+"px";
                            }
}



//collosion game over
setInterval(() => {
    let moveleft=parseInt(window.getComputedStyle(movecar).getPropertyValue("left"));
    let movetop=parseInt(window.getComputedStyle(movecar).getPropertyValue("top"));
   
    let stopleft=parseInt(window.getComputedStyle(stopeedcar).getPropertyValue("left"));
    

    if(moveleft==(stopleft+100)&& (movetop>400 && movetop<460) )
    {
        //by using innertext
    //    inner.style.color="red";
    //    inner.style.textAlign="center";
    //    inner.style.fontSize="50px";
    //    inner.style.fontFamily="bloder";
    //   inner.innerText="Game is Over "+"Your Score "+ count;

//for inserting hmtl
   score.style.display="block";
   inner.style.display="none";
   card.innerText="ur score "+count;

    }
    
}, 10);





//after cursor over and leaving mooving car speed will changes
// speed.addEventListener("mouseover", a3);
// function a3()
// {
//     movecar.style["-webkit-animation-duration"]="1s";
//     // movecar.style["-webkit-animation-iteration-count"]="unset";
    
// }
// speed.addEventListener("mouseleave", a4);
// function a4()
// {
//     movecar.style["-webkit-animation-duration"]="2s";
   
// }