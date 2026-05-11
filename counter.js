let value=document.querySelector(".val");
let firstBtn=document.querySelector(".one");
let secondBtn=document.querySelector(".two");
let thirdBtn=document.querySelector(".three");
let i=0;
function color(){
    i<0?value.style.color="red":i>0?value.style.color="green":value.style.color="gray";
}
firstBtn.addEventListener("click",function(){
    i=i-1;
    value.innerHTML=i;
    color();
})
thirdBtn.addEventListener("click",function(){
    i=i+1;
    value.innerHTML=i;
    color();
})
secondBtn.addEventListener("click",function(){
    i=0;
    value.innerHTML=i;
    color();
})