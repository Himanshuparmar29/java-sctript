let btn=document.createElement("button");
let body=document.querySelector("body");
btn.style.backgroundColor="red";
btn.style.color="white";
btn.innerText="Click Me!";

body.prepend(btn);

let p=document.createElement("p");
p.style.backgroundColor="red";
p.style.color="white";
p.setAttribute("class","")
