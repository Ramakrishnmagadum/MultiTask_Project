const selectmenu=document.querySelectorAll("select");
const currenttime=document.querySelector("h1");
let setalarambtn=document.querySelector("button");
const content=document.querySelector(".content");

let alaramtime,
isalaramset=false,
ringtone=new Audio("alaram.mp3");


for(let i=12;i>0;i--)
{
    i=i<10?"0"+i:i;
let option=`<option value="${i}" >${i} </option>`;
selectmenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}



for(let i=59;i>0;i--)
{
    i=i<10?"0"+i:i;
let option=`<option value="${i}" >${i} </option>`;
selectmenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}




for(let i=2;i>0;i--)
{
 let ampm=i==1?"AM":"PM";  
let option=`<option value="${ampm}" >${ampm} </option>`;
selectmenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}


//current time
setInterval(() => {
    let date=new Date(),
    h=date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds(),
    ampm="AM";
    

    if(h>=12)
    {
        h=h-12;
        ampm="PM";
    }

    //if hour value is 0, set this value to 12
h=h==0?h=12:h;
//addding a before hr, min, sec if this value is less than 10
h=h<10?"0"+h:h;
m=m<10?"0"+m:m;
s=s<10?"0"+s:s;
  currenttime.innerText=`${h}:${m}:${s} ${ampm}`;

if(alaramtime==`${h}:${m}:${ampm}`){
    // console.log("Alaram Ringing");
    ringtone.play();
    ringtone.loop=true;

}

}, 1000);

function setalaram(){
    if(isalaramset)
    {
        alaramtime="";
        ringtone.pause();
        content.classList.remove("disable");
        setalarambtn.innerText="Set Alaram"
       return isalaramset=false;
    }
let time=`${selectmenu[0].value}:${selectmenu[1].value}:${selectmenu[2].value}`;

if(time.includes("Hour")||time.includes("Minute")||time.includes("AMPM")){
    return alert("please select valide time")
}
isalaramset=true;
alaramtime=time;

content.classList.add("disable");
setalarambtn.innerText="clear Alaram";
}

setalarambtn.addEventListener("click", setalaram);
































// var hour;
// var minute;
// var second;
// //for set alaram
// function alaramset(){
//     clearInterval(displaytime);
//     var hour=prompt("enter a hours in digit");
//     var minute=prompt("enter a minute");
//     var second=prompt("enter a second");    
// }


// function check()
// {
//     console.log(second);
// //     if(h==hour&&m==minute&&s==second)
// //     {
// // clearInterval(displaytime);


// //     }
// }