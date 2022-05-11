const elements1 = document.getElementById("d1")
const elements2 = document.getElementById("d0")
const btn_start = document.getElementById("btnStart")
const messaggio = document.getElementById("message")
let n=3 
let intervallo
let nd1
let nd2

btn_start.addEventListener('click', inizioSlot)

function inizioSlot(){
    n=3
    intervallo=setInterval(contoAllaRovescia, 100)
    
}
function contoAllaRovescia(){
    console.log("è iniziato " + n)
   
    if(n>0){
    nd1=Math.random()*4
    nd2=Math.random()*4

    elements1.innerText= (nd1=Math.trunc(nd1))
    elements2.innerText= (nd2=Math.trunc(nd2))
    n=n-1
    messaggio.innerText=n
    }
    
    if (n==0){
        if ((nd1=Math.trunc(nd1)) == (nd2=Math.trunc(nd2))){
            messaggio.innerText= "hai vinto"
            clearInterval(intervallo)
        }

        else {
            messaggio.innerText= "hai perso"
            clearInterval(intervallo)
        }
    }
}





