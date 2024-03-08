// To get atrributes Name......
let div = document.querySelector("div");
console.log(div.getAttribute("id"));

// To change the attribute name
div.setAttribute("id","main-container");//main become main-container

//To add id with value name to h1 tag
let h=document.querySelector(".Name");
h.setAttribute("id","name");
 

//TO change the style property vlaue
div.style.backgroundColor="black";


//Add element using js
//first create an element
let el=document.createElement("h1");
el.innerText="This is added element!"
let body=document.querySelector("body");
body.prepend(el);