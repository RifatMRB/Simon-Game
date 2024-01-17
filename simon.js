let gameSeq=[];
let userSeq=[];

let colors=["btn1","btn2","btn3","btn4"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let ranIndex=Math.floor(Math.random()*3);
    let rancolor=colors[ranIndex];
    let randBtn=document.querySelector(`.${rancolor}`);
    gameSeq.push(rancolor);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup, 500);
        }
    }
    else{
        h2.innerText=` Game Over! preass any key to start `;
        reset();
    }
}

function btnpress(){
    userFlash(this);
    let userColor=this.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBts=document.querySelectorAll(".btn");

for(btn of allBts){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}