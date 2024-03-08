let btn1=document.querySelector("#btn1");
let body=document.querySelector("body");

body.style.backgroundColor="black";
// btn1.onclick=function(){
//     document.writeln("Hello");
// }

// let pera=document.querySelector("#pera");

// pera.onmouseover=function(){
//     document.writeln("Hello");
// }
let flag=0;
let count=0;
const them=function changeTheme()
{
    count++;
    if(count%2==0){
        body.style.backgroundColor="black";
    }
    else{
        body.style.backgroundColor="white";
    }
}

btn1.onclick=them;