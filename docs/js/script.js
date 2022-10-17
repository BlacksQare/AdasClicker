console.log("script.js loaded");

var APS=0;

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

var AdasCoins = 0;

function mainButton(){
    AdasCoins+=1


    document.getElementById("Points").innerHTML="A: "+AdasCoins;
}

function upg1(){
    APS+=1;
    document.getElementById("APS").innerHTML=APS+" A/s";
}

async function upg(){
    while(true){
        console.log("tak");
        document.getElementById("main-button");
        AdasCoins+=APS;
        document.getElementById("Points").innerHTML="A: "+AdasCoins;
        // document.getElementById("AdasPS").innerHTML="AdasPerSecond=";
        await sleep(1000);
    }
}

upg();