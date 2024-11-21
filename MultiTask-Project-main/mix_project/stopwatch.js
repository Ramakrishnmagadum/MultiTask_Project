let [seconds,minutes,hours]=[0,0,0];
let display_time=document.getElementById("display_time");
let timer=null;

function logic(){
    
    seconds++;
    if(seconds==60)
    {
        minutes++;
       seconds=0;
       if(minutes==60)
       {
        hours++;
        minutes=0;
       }  
    }
    let h=hours<10 ?"0":"";
    let m=minutes<10 ?"0":"";
  let s=seconds<10 ?"0":"";
    display_time.innerHTML=h+hours+":"+m+minutes+":"+s+ seconds;

}

function watchstart(){
    if(timer!=null){
        clearInterval(timer);
    }
   timer= setInterval(logic,1000);
}

function watchstop(){
    clearInterval(timer);

}

function watchreset()
{
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    display_time.innerHTML="00:00:00";

}