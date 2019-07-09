/*
var fileWrap= document.getElementById("fileWrap");

var backPlate= document.createElement("object");

var insideHold= document.createElement("div");
*/



var resPage = document.getElementById("filePageA");
var resWrap = document.getElementById("resumeWrap");


var leftP = document.getElementById("fileFleft");
var rightP = document.getElementById("fileFright");
var lockP = document.getElementById("fileLock");
var backP = document.getElementById("filebackPlate");
var insH1 = document.getElementById("insideH1");
var insH2 = document.getElementById("insideH2");
var insH3 = document.getElementById("insideH3");
var fileHA = document.getElementById("fileHolderA");
var fileHB = document.getElementById("fileHolderB");
var fileHC = document.getElementById("fileHolderC");

var partsArray= [leftP, rightP, backP, insH1, insH2, insH3, fileHA, fileHB, fileHC];

function opacityChange(opacA, opacL, opacIA, opacIB, opacIC, opacHA, opacHB, opacHC){   
leftP.style.opacity= opacA;
rightP.style.opacity= opacA;
backP.style.opacity= opacA;
insH1.style.opacity= opacIA;
insH2.style.opacity= opacIB;
insH3.style.opacity= opacIC;
lockP.style.opacity= opacL;
fileHA.style.opacity= opacHA;
fileHB.style.opacity= opacHB;
fileHC.style.opacity= opacHC;   
}


function rePosition(){

fileHA.style.transform= "translateY(0)";
fileHA.style.transition= "all 0.25s linear 0s";

insH1.style.transform= "translate(-90px, -50px)";
insH1.style.transition= "all 0.5s linear 0.5s";

insH1.style.position= "relative";
resWrap.style.position= "relative";
insH2.style.transition= "all 0.5s linear 0.5s";
insH3.style.transition= "all 0.5s linear 0.5s";

opacityChange("0", "1", null, "1", "1", "1", null, null);

//insH1.style.transform= "translate(0px, 0px)";
}

function fileChange(scale, translatexL, translatexR, opacity, translate){

lockP.style.transform = "scale(" +scale+ ")";
leftP.style.transform= "translateX(" +translatexL+ ")";
rightP.style.transform= "translateX(" +translatexR+ ")";
insH1.style.transform= "translate(" +translate+ ")";
insH2.style.transform= "translate(" +translate+ ")";
insH3.style.transform= "translate(" +translate+ ")";
}

function fileOpen(){
if(lockP.style.transform === "scale(1)"){
    opacityChange("0", null, null, null, null, null, null, null);


    fileChange("0.5", "-100px", "100px", "0", null);
    insH1.style.transform= "translate(-90px, -50px)";
    insH2.style.transform= "translate(90px, -68px)";
    insH3.style.transform= "translate(0, 125px)";
} else{
    opacityChange("1", null, null, null, null, null, null, null);
    fileChange("1", "0px", "0px", "1", "0px, 0px");
            
}
}

function docRes(){
resPage.removeEventListener("transitionend", rePosition);

var symbolX = document.createTextNode("\u274c");
var closebtn = document.createElement("button");
closebtn.classList.add("close-button", "abs", "top");
closebtn.setAttribute('onclick', 'xOut()');
closebtn.appendChild(symbolX);

opacityChange("0", "0", null, "0", "0", "0", null, null);

insH1.style.transform= "translate(0px, 0px)";
fileHA.style.transform= "translateY(100%)";
resPage.style.transform= "scale(5)";
resWrap.style.zIndex= "6";

resWrap.style.position= "fixed";
resWrap.style.height= "100%";
insH1.style.position= "fixed";

resWrap.style.top= "0";

function onInfo(){
    resWrap.appendChild(closebtn);
    fileHA.style.transition= "all 0.25s linear 0s";
    insH2.style.transition= "all 0.5s linear 0.5s";
    insH3.style.transition= "all 0.5s linear 0.5s";
    insH1.style.transition= "all 0.5s linear 0.5s";
}
resPage.addEventListener("transitionend", onInfo);
}

function xOut(){


resPage.style.transform= "scale(1)";
resPage.addEventListener("transitionend", rePosition);
}