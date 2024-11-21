//finish button
let finish =document.getElementById("finish");


//next button
let firstradio=document.getElementById("firstradio");
let sradio=document.getElementById("sradio");
let tradio=document.getElementById("tradio");
let fradio=document.getElementById("fradio");
console.log(firstradio);
let next=document.getElementById("next");
// console.log(next);
next.addEventListener('click',change);
function change()
{
i=i+1;
if(i<arr.length){
    firstradio.checked=false;
    sradio.checked=false;
    tradio.checked=false;
    fradio.checked=false;
question.innerText=arr[i];

option1.innerText=arr1[i];

option2.innerText=arr2[i];

option3.innerText=arr3[i];

option4.innerText=arr4[i];
}
else{
    i=arr.length-1; 
}
}





//privious button
let privious=document.getElementById("privious");
privious.addEventListener('click',change2);
function change2()
{
i--;
if(i>=0 && i<arr.length){
question.innerText=arr[i];

option1.innerText=arr1[i];

option2.innerText=arr2[i];

option3.innerText=arr3[i];

option4.innerText=arr4[i];
}else{
i=0;
}
}





//submit button
let submit=document.getElementById("submit");
submit.addEventListener('click',save);
function save()
{
    let answer=document.getElementsByName("option");
    // console.log(answer.length);
    for(let j=0;j<answer.length;j++)
    {
         if(answer[j].checked)
         {
            console.log(answer[j].value);
            ansarr[i]=answer[j].value;
         }   
    }
    
}
let marks2=0;
//result announcing
let resultout=document.getElementById("resultout");
let result=document.getElementById("result");
result.addEventListener('click',marks);
finish.addEventListener('click',marks21);
function marks ()
{
    let marks=0;
    let arrresult=[];
    for(let m=0;m<arr.length;m++)
    {
        if(ans[m]==ansarr[m])
            {
                marks++;
                marks2++;
               arrresult[m] =m+" question is correct"
            }else{
                arrresult[m]=m+" question is wrong";
            }
    }
    resultbutton.value="Final Result";
    resultout.innerText ="U Scored   "+ marks+" marks out of "+ arr.length+ " marks ..Double clilck go back";  
}



function marks21()
{
    let marks=0;
    let arrresult=[];
    for(let m=0;m<arr.length;m++)
    {
        if(ans[m]==ansarr[m])
            {
                marks++;
                marks2++;
               arrresult[m] =m+" question is correct"
            }else{
                arrresult[m]=m+" question is wrong";
            }
    }
    resultbutton.value="Final Result";
    resultout.innerText ="U Scored   "+ marks+" marks out of "+ arr.length+ " marks ..Double clilck go back";  
}


//after result announcing
result.addEventListener('dblclick' ,Back)
function Back()
{
    resultbutton.value="Check Result";
    resultout.innerText ="";
}



//Finish Button
let box=document.getElementById("box");

// console.log(finish);
finish.addEventListener('click', finishtest)
function finishtest()
{
   let t= confirm("clilck here to finish test");
    if(t){
     
     box.style.display="flex";
     box.style.alignItems="center";
     box.style.justifyContent="center";
     box.style.fontSize="30px"
     box.style.fontWeight="bolder";
     box.innerHTML="............Succesfully Test Finished...........  ...........................And u got ..................... " +"..........."+ marks2+ " marks out of "+ arr.length+" questions.......";
    }else{

    }
}












//ans array
let ansarr=[0,0,0,0,0];


//question and option array
let arr=["1. who is pm of india?","2.  capital of india?","3.  How many states are theire are in india?","4.  which is best team in IPL","5.  what is java", "6. HTML long form ","7. this is keyword or not","8. local variable choose correct one ","9. What is JDBC?","10. browser undersatnd which language"];
let arr1=["Amitha sha","Karnataka","28","Rcb","one word","Hyper Text Makeup Language","not Keyword","static variable","jdbc is java concept","java Language"];
let arr2=["Modi","Goa","29","Csk","Object oriented programing language","Hyper Text Markup language","Keyword","non-static variable","JDBC is java Api used to connect with database","Css Language"];
let arr3=["Yogi","Delhi","30","Mi","programing langauge","Hyper Traslate markup Language","Undefined","we cant make static and non-static as local variable","JDBc is used to connect with server side","1 and 2 both"];
let arr4=["Rahul gandi","Belagavi","27","Delhi","Job","Hyper Language","variable","local variable is not allowed in java","2 and 3 both","Html Language"];
//real answer array
let ans=[2,3,1,1,2,2,2,3,2,4];



let i=0;
let question=document.getElementById("question");
question.innerText=arr[i];
let option1=document.getElementById("option1");
option1.innerText=arr1[i];
let option2=document.getElementById("option2");
option2.innerText=arr2[i];
let option3=document.getElementById("option3");
option3.innerText=arr3[i];
let option4=document.getElementById("option4");
option4.innerText=arr4[i];