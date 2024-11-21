let innerbox=document.getElementById("innerbox");




//number of operation
let count=0;
let h=0;

//match win
//colwise winning check
let winarr=[0,0,0,0,0,0,0,0,0];
let colcrosswin=[0,0,0];
let colcirclewin=[0,0,0];
function colwin(h){

    if(h%3==0)
    {
        if(winarr[h]==2)
        {
            colcrosswin[0]= colcrosswin[0]+1;
        }else if(winarr[h]==1)
        {
            colcirclewin[0]= colcirclewin[0]+1;
        }
    }
    if(h%3==1)
    {
        if(winarr[h]==2)
        {
            colcrosswin[1]= colcrosswin[1]+1;
        }else if(winarr[h]==1)
        {
            colcirclewin[1]= colcirclewin[1]+1;
        }
    }
    if(h%3==2)
    {
        if(winarr[h]==2)
        {
           colcrosswin[2]= colcrosswin[2]+1;
        }else if(winarr[h]==1)
        {
            colcirclewin[2]= colcirclewin[2]+1;
        }
    }
//for colwin check

for(let e=0;e<3;e++)
{
if(colcrosswin[e]==3)
{ 
    
    innerbox.innerText="cross win";

}
else if(colcirclewin[e]==3){
    // console.log("circle is win");
    innerbox.innerText="circle is win";
}
}
}

//row-wise winning check
let winarr2=[0,0,0,0,0,0,0,0,0];
let rowcrosswin=[0,0,0];
let rowcirclewin=[0,0,0]; 
function rowwin(p){

    if(p==0||p==1||p==2)
    {
        if(winarr2[p]==2)
        {
            rowcrosswin[0]= rowcrosswin[0]+1;
        }else if(winarr2[p]==1)
        {
            rowcirclewin[0]= rowcirclewin[0]+1;
        }
    }
    if(p==3||p==4||p==5)
    {
        if(winarr2[p]==2)
        {
            rowcrosswin[1]= rowcrosswin[1]+1;
        }else if(winarr2[p]==1)
        {
            rowcirclewin[1]= rowcirclewin[1]+1;
        }
    }
    if(p==6||p==7||p==8)
    {
        if(winarr2[p]==2)
        {
           rowcrosswin[2]= rowcrosswin[2]+1;
        }else if(winarr2[p]==1)
        {
            rowcirclewin[2]= rowcirclewin[2]+1;
        }
    }
//for rowwin check
for(let e=0;e<3;e++)
{
if(rowcrosswin[e]==3)
{
    // console.log("cross is win");
    innerbox.innerText="cross is win";
}
else if(rowcirclewin[e]==3){
    // console.log("circle is win");
    innerbox.innerText="circle is win";
}
}
}

//diagonally check

let winarr3=[0,0,0,0,0];
let crosswin=[0,0];
let circlewin=[0,0]; 
function lastwin(s){

    if(s==0||s==2||s==4)
    {
        if(winarr3[s]==2)
        {
            crosswin[0]= crosswin[0]+1;
        }else if(winarr3[s]==1)
        {
            circlewin[0]= circlewin[0]+1;
        }
    }
    if(s==1||s==2||s==3)
    {
        if(winarr3[s]==2)
        {
            crosswin[1]= crosswin[1]+1;
        }else if(winarr3[s]==1)
        {
            circlewin[1]= circlewin[1]+1;
        }
    }
    
//for rowwin check
for(let e=0;e<2;e++)
{
if(crosswin[e]==3)
{
    // console.log("cross is win");
    innerbox.innerText="cross is win";
}
else if(circlewin[e]==3){
    // console.log("circle is win");
    innerbox.innerText="circle is win";
}
}
}





//operation to stop more the one click
let oneclick=[0,0,0,0,0,0,0,0,0];



//first buttton
let button1=document.getElementById("1")
button1.addEventListener('click',add1)
function add1()
{
    if(oneclick[0]==0){
        oneclick[0]=1;
    count++;
    
    if(count%2==0)
    {
        winarr[0]=1;
        winarr2[0]=1;
        winarr3[0]=1;
        button1.style.backgroundImage="url('circle.jpg')";
        button1.style.backgroundRepeat="no-repeat";
        button1.style.backgroundSize="cover";
}else{
    winarr[0]=2;
    winarr2[0]=2;
    winarr3[0]=2;
    button1.style.backgroundImage="url('cross.jpg')";
    button1.style.backgroundRepeat="no-repeat";
    button1.style.backgroundSize="cover";
}
}else{

}
h=0;
p=0;
s=0;
lastwin(s);
rowwin(p);
colwin(h);    
}

//second buttton
let button2=document.getElementById("2")
button2.addEventListener('click',add2)
function add2()
{
    if(oneclick[1]==0){
        oneclick[1]=1;
    count++;
    if(count%2==0)
    {
        winarr[1]=1;
        winarr2[1]=1;
        button2.style.backgroundImage="url('circle.jpg')";
        button2.style.backgroundRepeat="no-repeat";
        button2.style.backgroundSize="cover";
    }else{
        winarr[1]=2;
        winarr2[1]=2;
    button2.style.backgroundImage="url('cross.jpg')";
    button2.style.backgroundRepeat="no-repeat";
    button2.style.backgroundSize="cover";
    }
}else{

}
h=1;
p=1;
rowwin(p);
colwin(h); 
}

//third buttton
let button3=document.getElementById("3")
button3.addEventListener('click',add3)
function add3()
{
    if(oneclick[2]==0){
        oneclick[2]=1;
    count++;
    if(count%2==0)
    {
        winarr[2]=1;
        winarr2[2]=1;
        winarr3[1]=1;
    button3.style.backgroundImage="url('circle.jpg')";
    button3.style.backgroundRepeat="no-repeat";
    button3.style.backgroundSize="cover";
    }
    else{
        winarr[2]=2;
        winarr2[2]=2;
        winarr3[1]=2;
        button3.style.backgroundImage="url('cross.jpg')";
        button3.style.backgroundRepeat="no-repeat";
        button3.style.backgroundSize="cover";
    }
}else{

}
h=2;p=2;
s=1;
lastwin(s);
rowwin(p);
colwin(h); 
}

//forth buttton
let button4=document.getElementById("4")
button4.addEventListener('click',add4)
function add4()
{
    if(oneclick[3]==0){
        oneclick[3]=1;
    count++;
    if(count%2==0)
    {
        winarr[3]=1;
        winarr2[3]=1;
    button4.style.backgroundImage="url('circle.jpg')";
    button4.style.backgroundRepeat="no-repeat";
    button4.style.backgroundSize="cover";
    }else{
        winarr[3]=2;
        winarr2[3]=2;
    button4.style.backgroundImage="url('cross.jpg')";
    button4.style.backgroundRepeat="no-repeat";
    button4.style.backgroundSize="cover";
    }
}else{

}
h=3;
p=3;
rowwin(p);
colwin(h); 
}

//fifth buttton
let button5=document.getElementById("5")
button5.addEventListener('click',add5)
function add5()
{
    if(oneclick[4]==0){
        oneclick[4]=1;
    count++;
    if(count%2==0)
    {
        winarr[4]=1;
        winarr2[4]=1;
        winarr3[2]=1;
    button5.style.backgroundImage="url('circle.jpg')";
    button5.style.backgroundRepeat="no-repeat";
    button5.style.backgroundSize="cover";
    }
    else{
        winarr[4]=2;
        winarr2[4]=2;
        winarr3[2]=2;
        button5.style.backgroundImage="url('cross.jpg')";
        button5.style.backgroundRepeat="no-repeat";
        button5.style.backgroundSize="cover";
    }
}else{

}
h=4;
p=4;
s=2;
lastwin(s);
rowwin(p);
colwin(h); 
}

//sixth button
let button6=document.getElementById("6")
button6.addEventListener('click',add6)
function add6()
{
    if(oneclick[5]==0){
        oneclick[5]=1;
    count++;
    if(count%2==0)
    {
        winarr[5]=1;
        winarr2[5]=1;
    button6.style.backgroundImage="url('circle.jpg')";
    button6.style.backgroundRepeat="no-repeat";
    button6.style.backgroundSize="cover";
    }else{
        winarr[5]=2;
        winarr2[5]=2;
        button6.style.backgroundImage="url('cross.jpg')";
        button6.style.backgroundRepeat="no-repeat";
        button6.style.backgroundSize="cover";
    }
}else{

}
h=5;
p=5;
rowwin(p);
colwin(h); 
}

//seventh button
let button7=document.getElementById("7")
button7.addEventListener('click',add7)
function add7()
{
    if(oneclick[6]==0){
        oneclick[6]=1;
    count++;
    if(count%2==0)
    {
        winarr[6]=1;
        winarr2[6]=1;
        winarr3[3]=1;
    button7.style.backgroundImage="url('circle.jpg')";
    button7.style.backgroundRepeat="no-repeat";
    button7.style.backgroundSize="cover";
    }else{
        winarr[6]=2;
        winarr2[6]=2;
        winarr3[3]=2;
        button7.style.backgroundImage="url('cross.jpg')";
        button7.style.backgroundRepeat="no-repeat";
        button7.style.backgroundSize="cover";
    }
}else{

}
h=6;
p=6;
s=3;
lastwin(s);
rowwin(p);
colwin(h); 
}

//Eight button
let button8=document.getElementById("8")
button8.addEventListener('click',add8)
function add8()
{
    if(oneclick[7]==0){
        oneclick[7]=1;
    count++;
    if(count%2==0)
    {
        winarr[7]=1;
        winarr2[7]=1;
    button8.style.backgroundImage="url('circle.jpg')";
    button8.style.backgroundRepeat="no-repeat";
    button8.style.backgroundSize="cover";
    }else{
        winarr[7]=2;
        winarr2[7]=2;
        button8.style.backgroundImage="url('cross.jpg')";
        button8.style.backgroundRepeat="no-repeat";
        button8.style.backgroundSize="cover";
    }
}else{

}
h=7;
p=7;
rowwin(p);
colwin(h); 
}


//Nineth button
let button9=document.getElementById("9")
button9.addEventListener('click',add9)
function add9()
{
    if(oneclick[8]==0){
        oneclick[8]=1;
    count++;
    if(count%2==0)
    {
        winarr[8]=1;
        winarr2[8]=1;
        winarr3[4]=1;
    button9.style.backgroundImage="url('circle.jpg')";
    button9.style.backgroundRepeat="no-repeat";
    button9.style.backgroundSize="cover";
    }
    else{
        winarr[8]=2;
        winarr2[8]=2;
        winarr3[4]=2;
        button9.style.backgroundImage="url('cross.jpg')";
        button9.style.backgroundRepeat="no-repeat";
        button9.style.backgroundSize="cover"; 
    }
}else{

}
h=8;
p=8;
s=4;
lastwin(4);
rowwin(p);
colwin(h); 
}


//candidate names
// let fplayer=document.getElementById("fplayer2");
// let splayer=document.getElementById("splayer2");
// let firstplayer=prompt("enter first player")
// let secondplayer=prompt("enter second player")
// fplayer.style.fontSize="20px"
// fplayer.style.fontWeight="bloder";
// fplayer.style.color="red";
// fplayer.innerText=firstplayer;
// splayer.style.fontSize="20px"
// splayer.style.fontWeight="bloder";
// splayer.style.color="red";
// splayer.innerText=secondplayer;





