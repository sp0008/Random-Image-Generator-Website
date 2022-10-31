const a=document.querySelector(".btn");
const b=document.querySelector(".images");
const c=document.querySelector(".btn1");

i=1;

a.addEventListener("click", function(){
    i++;
    b.innerHTML +=`<img src="https://picsum.photos/200/300?random=${i}">`;
});

c.addEventListener("click", function(){
b.innerHTML="";
});
