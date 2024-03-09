
let section= document.querySelector(".three");

let nums= document.querySelectorAll(".nums .num");

let started= false;


window.onscroll= function(){
    if(window.scrollY>= section.offsetTop-200){
        if(!started){
            nums.forEach((num)=>{
                startCount(num);
            });
            started=true;
        }
    }
}

function startCount(el){
    let goal= el.dataset.goal;

    let counter= setInterval(()=>{
        el.textContent++;
        if(el.textContent== goal){
            clearInterval(counter);
        }
    }, 2000/goal)
}