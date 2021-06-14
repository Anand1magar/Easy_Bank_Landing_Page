let bar=document.getElementById("bar");
let ultwo=document.getElementById('ultwo');
let overlay=document.getElementById('overlay');
let isShow=true;

gsap.from("#navbar",{y:"-15vh",
duration:.2,
 ease:"bounce"})

function Showbar(){
ultwo.style.display="flex";
overlay.style.display="block"
isShow=false;
bar.classList.replace('fa-bars','fa-times')
}



function Hidebar(){
    bar.classList.replace('fa-times','fa-bars')
    ultwo.style.display="none";
overlay.style.display="none"
isShow=true;
}
bar.addEventListener("click",function(){
  if(isShow){
            Showbar()
        }
        else{
            Hidebar()
        }
        })
 