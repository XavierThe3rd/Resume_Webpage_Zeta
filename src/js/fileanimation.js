import {toColor} from './buttonEffect';


var symbolX = document.createTextNode("\u274c");
var closebtn = document.createElement("button");
closebtn.classList.add("close-button", "abs", "top", "no-border", "z4");
closebtn.setAttribute('id', 'closeid');
closebtn.appendChild(symbolX);



function opacityChange(opacA, opacL, opacIA, opacIB, opacIC, opacHA, opacHB, opacHC){
    var fileHA = document.getElementById("fileHolderA");
    var fileHB = document.getElementById("fileHolderB");
    var fileHC = document.getElementById("fileHolderC");
        
    var insH1 = document.getElementById("insideH1");
    var insH2 = document.getElementById("insideH2");
    var insH3 = document.getElementById("insideH3");

    var leftP = document.getElementById("fileFleft");
    var rightP = document.getElementById("fileFright");
    var lockP = document.getElementById("fileLock");
    var backP = document.getElementById("filebackPlate");

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

function transChange( HAtran, HBtran, HCtran, H1tran, H2tran, H3tran){
    var fileHA = document.getElementById("fileHolderA");
    var fileHB = document.getElementById("fileHolderB");
    var fileHC = document.getElementById("fileHolderC");

    var insH1 = document.getElementById("insideH1");
    var insH2 = document.getElementById("insideH2");
    var insH3 = document.getElementById("insideH3");

    fileHA.style.transitionDelay= HAtran;
    fileHB.style.transitionDelay= HBtran;
    fileHC.style.transitionDelay= HCtran;
    insH1.style.transitionDelay= H1tran;
    insH2.style.transitionDelay= H2tran;
    insH3.style.transitionDelay= H3tran;
}

function lateChange(transHA, transHB, transHC, translateH1, translateH2, translateH3, scale, translatexL, translatexR){
    var fileHA = document.getElementById("fileHolderA");
    var fileHB = document.getElementById("fileHolderB");
    var fileHC = document.getElementById("fileHolderC");
        
    var insH1 = document.getElementById("insideH1");
    var insH2 = document.getElementById("insideH2");
    var insH3 = document.getElementById("insideH3");

    var leftP = document.getElementById("fileFleft");
    var rightP = document.getElementById("fileFright");
    var lockP = document.getElementById("fileLock");
   
    fileHA.style.transform= "translateY(" +transHA+ ")";
    fileHB.style.transform= "translateY(" +transHB+ ")";
    fileHC.style.transform= "translateY(" +transHC+ ")";
    insH1.style.transform= "translate(" +translateH1+ ")";
    insH2.style.transform= "translate(" +translateH2+ ")";
    insH3.style.transform= "translate(" +translateH3+ ")";
    lockP.style.transform = "scale(" +scale+ ")";
    leftP.style.transform= "translateX(" +translatexL+ ")";
    rightP.style.transform= "translateX(" +translatexR+ ")";
}

function miscChange(position, height, top, index){
    var resWrap = document.getElementById("resumeWrap");

    resWrap.style.position= position;
    resWrap.style.height= height;
    resWrap.style.top= top;
    resWrap.style.zIndex= index;
}

function eventListen(vary, rmv, add){
    vary.removeEventListener("transitionend", rmv);
    vary.addEventListener("transitionend", add);
}

//--------------------------------------------------------------------//

function xbuttonOn(){
    var resWrap = document.getElementById("resumeWrap");

    transChange("0s", "0.5s", "0.5s", "0.5s");
    resWrap.appendChild(closebtn);
    closeid.style.animationName= "fadein";
}


//--------------------------------------------------------------------//

function rePositionA(){
    opacityChange("0", "1", null, "1", "1", "1", null, null);
    transChange("0s", null, null, "0.5s", "0.5s", "0.5s");
    lateChange("0", null, null, "-90px, -50px", null, null, null, null, null);
    if(window.innerWidth >760){
        lateChange(null, null, null, "-125px, -75px", null, null, null, null, null);
    
        if(window.innerWidth >1020){
            lateChange(null, null, null, "-160px, -100px", null, null, null, null, null);
        }
    }
    miscChange("relative", null, null, null, null);
}

function rePositionB(){
    opacityChange("0", "1", null, "1", "1", "1", null, null);
    transChange(null, "0s", null, "0.5s", "0.5s", "0.5s");
    lateChange(null, "0", null, null, "90px, -68px", null, null, null, null);
    if(window.innerWidth >760){
        lateChange(null, null, null, null, "125px, -97px", null, null, null, null);
       
        if(window.innerWidth >1020){
            lateChange(null, null, null, null, "160px, -119px", null, null, null, null);
        }
    }
    miscChange("relative", null, null, null, null);
}

function rePositionC(){
    opacityChange("0", "1", null, "1", "1", "1", null, null);
    transChange(null, null, "0s", "0.5s", "0.5s", "0.5s");
    lateChange(null, null, "0", null, null, "0px, 125px", null, null, null);
    if(window.innerWidth >760){
        lateChange(null, null, null, null, null, "0, 190px", null, null, null);
    
        if(window.innerWidth >1020){
            lateChange(null, null, null, null, null, "0, 250px", null, null, null);
        }
    }
    miscChange("relative", null, null, null, null);
}

//--------------------------------------------------------------------//

export function fileOpen(){
    var lockP = document.getElementById("fileLock");

    if(lockP.style.transform === "scale(1)"){
        opacityChange("0", null, null, null, null, null, null, null);
        transChange(null, null, null, "0s", "0s", "0s");
        lateChange(null, null, null, "-90px, -50px", "90px, -68px", "0, 125px", "0.5", "-100px", "100px");
        toColor("barz3", "fileLock", "#ff0021", "#6100ff", "translateY(17px) rotate(45deg)", "translateY(1px) rotate(-45deg)", "0");
        if(window.innerWidth >760){
            lateChange(null, null, null, "-125px, -75px", "125px, -97px", "0, 190px", "0.5", "-135px", "135px");

            if(window.innerWidth > 1020){
                lateChange(null, null, null, "-160px, -100px", "160px, -119px", "0, 250px", "0.5", "-170px", "170px");
            }
        }
    }else{
        opacityChange("1", null, null, null, null, null, null, null);
        lateChange(null, null, null, "0px", "0px", "0px", "1", "0px", "0px"); 
        toColor("barz3", "fileLock", "#ffffff", "#ff0021", "translateY(0) rotate(0)", "translateY(0) rotate(0)", "1");        
    }
}
//--------------------------------------------------------------------//  


export function openDocumentA(){
    var resPageA = document.getElementById("filePageA");

    transChange("0.5s", null , null, "0s", "0s", "0s");
    miscChange("fixed", "100%", "0", "6");
    eventListen(resPageA, rePositionA, xbuttonOn);
    opacityChange("0", "0", null, "0", "0", "0", null, null);
    lateChange("100%", null, null, "0px, 0px", null, null, null, null);
    closebtn.addEventListener('click', xOutA);
    closebtn.removeEventListener('click', xOutB);
    closebtn.removeEventListener('click', xOutC);
    resPageA.style.transform= "scale(5)";
}

export function openDocumentB(){
    var resPageB = document.getElementById("filePageB");

    transChange(null, "0.5s", null, "0s", "0s", "0s");
    miscChange("fixed", "100%", "0", "6");
    eventListen(resPageB, rePositionB, xbuttonOn),
    opacityChange("0", "0", "0", null, "0", null, "0", null);
    lateChange(null, "100%", null, null, "0px, 0px", null, null, null);
    closebtn.addEventListener('click', xOutB);
    closebtn.removeEventListener('click', xOutA);
    closebtn.removeEventListener('click', xOutC);
    resPageB.style.transform= "scale(5)";
}

export function openDocumentC(){
    var resPageC = document.getElementById("filePageC");

    transChange(null, null, "0.5s", "0s", "0s", "0s");
    miscChange("fixed", "100%", "0", "6");
    eventListen(resPageC, rePositionC, xbuttonOn),
    opacityChange("0", "0", "0", "0", null, null, null, "0");
    lateChange(null, null, "100%", null, null, "0px, 0px", null, null);
    closebtn.addEventListener('click', xOutC);
    closebtn.removeEventListener('click', xOutB);
    closebtn.removeEventListener('click', xOutA);
    resPageC.style.transform= "scale(5)";
}

function xOutA(){
    var resPageA = document.getElementById("filePageA");
    var resWrap = document.getElementById("resumeWrap");

    transChange("0s", null, null, null, "0.5s", "0.5s", "0.5s");
    closeid.style.animationName= "fadeout";
    resPageA.style.transform= "scale(1)";
    resWrap.removeChild(closebtn);
    eventListen(resPageA, xbuttonOn, rePositionA);
}

function xOutB(){
    var resPageB = document.getElementById("filePageB");
    var resWrap = document.getElementById("resumeWrap");

    transChange("0s", null, null, null, "0.5s", "0.5s", "0.5s");
    closeid.style.animationName= "fadeout";
    resPageB.style.transform= "scale(1)";
    resWrap.removeChild(closebtn);
    eventListen(resPageB, xbuttonOn, rePositionB);
}

function xOutC(){
    var resPageC = document.getElementById("filePageC");
    var resWrap = document.getElementById("resumeWrap");

    transChange("0s", null, null, null, "0.5s", "0.5s", "0.5s");
    closeid.style.animationName= "fadeout";
    resPageC.style.transform= "scale(1)";
    resWrap.removeChild(closebtn);
    eventListen(resPageC, xbuttonOn, rePositionC);
}