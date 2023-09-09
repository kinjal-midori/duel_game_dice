'use strict';

const score1= document.querySelector(".score0");
const score2= document.querySelector(".score1");
const dice=document.querySelector(".dice-img");
const btnReset=document.querySelector(".btn-reset");
const btnHold=document.querySelector(".btn-hold");
const btnRoll=document.querySelector(".btn-roll");
const current1=document.querySelector(".current-Score0");
const current2=document.querySelector(".current-Score1");

let currentScore=0;
let activeplayer=0;
let score=[0,0];
let notOver=true;

const switched=function(){
    document.querySelector(`.current-Score${activeplayer}`).textContent=0;
        
    document.querySelector(`.player${activeplayer}`).classList.toggle("active");
        
    activeplayer===0?activeplayer=1:activeplayer=0;
    currentScore=0;
    document.querySelector(`.player${activeplayer}`).classList.toggle("active");
}
//Implementation
// score1.textContent=0;
// score2.textContent=0;
dice.classList.add("hide");

btnRoll.addEventListener("click",function(){
    if(notOver){
        const num=Math.trunc(Math.random()*6+1);
        dice.src=`diceimg/dice${num}.png`;
        dice.classList.remove("hide");
    
        if(num!==1){
            currentScore+=num;
            document.querySelector(`.current-Score${activeplayer}`).textContent=currentScore;
            
        }else{               
            score[activeplayer]+=currentScore;
            document.querySelector(`.score${activeplayer}`).textContent=score[activeplayer];
            if(score[activeplayer]>=200){
                notOver=false;
                document.querySelector(`.player${activeplayer}`).classList.toggle("winner");
                document.querySelector(`.player${activeplayer}`).classList.toggle("active");
                dice.classList.add("hide");
            }else{
                // Switch player
                switched();
            }
        }
    }
})

btnHold.addEventListener("click",function(){
    if(notOver){
        // Add current score
        score[activeplayer]+=currentScore;
        document.querySelector(`.score${activeplayer}`).textContent=score[activeplayer];
        // is it less than 100
        if(score[activeplayer]>=200){
            notOver=false;
            document.querySelector(`.player${activeplayer}`).classList.toggle("winner");
            document.querySelector(`.player${activeplayer}`).classList.remove("active");
            dice.classList.add("hide");
        }else{
            // Switch player
            switched();
        }
    }
})

btnReset.addEventListener("click",function(){
    score=[0,0];
    currentScore=0;
    notOver=true;
    dice.classList.add("hide");
    document.querySelector(`.player${activeplayer}`).classList.remove("winner");

    document.querySelector(`.score${activeplayer}`).textContent=score[activeplayer];
    document.querySelector(`.current-Score${activeplayer}`).textContent=0;
    document.querySelector(`.player${activeplayer}`).classList.remove("active");

    activeplayer===0?activeplayer=1:activeplayer=0;

    document.querySelector(`.score${activeplayer}`).textContent=score[activeplayer];
    document.querySelector(`.current-Score${activeplayer}`).textContent=0;
    document.querySelector(`.player${activeplayer}`).classList.add("active");
})


//GAME START
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".overlay").classList.add('hide');
})
