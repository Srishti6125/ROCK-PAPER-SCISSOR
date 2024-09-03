let u=0;
let c=0;
let us=document.querySelector("#us_core");
let co=document.querySelector("#co_core");
let move=document.querySelectorAll(".rps");
const ms=document.querySelector("#msg");
const winner=(user,cho_us,cho_comp)=>{
    if(user===1){
        console.log(`you win!`);
        ms.innerText=`YOU WIN! ${cho_us.toUpperCase()} WON OVER ${cho_comp.toUpperCase()}.`;
        ms.style.backgroundColor="green";
        ms.style.color="white";
        u++;
        us.innerText=u;
    }
    else{
        console.log(`you lose!`);
        ms.innerText=`YOU LOSE! ${cho_comp.toUpperCase()} WON OVER ${cho_us.toUpperCase()}.`;
        ms.style.backgroundColor="red";
        ms.style.color="white";
        c++;
        co.innerText=c;
    }
}
const comp=(cho_us)=>{
    const opt=["rock","paper","scissor"];
    const cho=Math.floor(Math.random()*3);
    const cho_comp=opt[cho];
    console.log("user choice:",cho_us);
    console.log("computer choice:",cho_comp);
    if (cho_comp===cho_us){
        console.log("draw");
        ms.innerText="GAME DRAW."
        ms.style.backgroundColor="yellow";
        ms.style.color="black";
    }
    else{
        let user=1;
        if (cho_us==="rock"){
            user= cho_comp==="paper"?0:1;
        }
        else if (cho_us==="paper"){
            user= cho_comp==="scissor"?0:1;
        }
        else if (cho_us==="scissor"){
            user= cho_comp==="paper"?1:0;
        }
        winner (user,cho_us,cho_comp);
    }
}
move.forEach(choice => {
    choice.addEventListener("click",()=>{
        const cho_us=choice.getAttribute("id");
        comp(cho_us);
    })
}); 

/*
let but=document.querySelector("button");
let b=document.querySelector("body");
let h=document.querySelector("h1");
let s=document.querySelector("*");
let currm="light";
but.addEventListener("click",()=>{
  if (currm==="light"){
    s.style.backgroundColor="black";
    s.style.color="white";
    but.style.backgroundColor="white";
    but.style.color="black";
    h.style.backgroundColor="white";
    h.style.color="black";
    but.innerText="LIGHT";
    currm = "dark";
  }
  else if (currm==="dark"){
    s.style.backgroundColor="white";
    s.style.color="balck";
    but.style.backgroundColor="black";
    but.style.color="white";
    h.style.backgroundColor="black";
    h.style.color="white";
    but.innerText="DARK";
    currm = "light";
  }
})
setTimeout(()=>{
    console.log("hello");
},1);
console.log("1");
console.log("2");

console.log("3");
console.log("4");
console.log("5");

let prom=new Promise((resolve,reject)=>{
    //resolve("sucessfull transaction");
    reject("unsuccesful");
});  */

function getdata (dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data:",dataid);
            resolve("sucess");
        },7000);
    })
}