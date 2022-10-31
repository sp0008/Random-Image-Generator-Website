// const a=document.getElementByClassName("btn");
// const b=document.getElementByClassName("images");

//  i=1;
// a.addEventListener("click", function(){
//     i++;
//     b.innerHTML +=`<img src="https://picsum.photos/200/300?random=${i}">`;
// });


const a=document.querySelector(".btn");
const b=document.querySelector(".images");

i=1;

a.addEventListener("click", function(){
    i++;
    b.innerHTML +=`<img src="https://picsum.photos/200/300?random=${i}">`;
})