
var slideId1 = document.getElementById("slideHolder1");
var slideId2 = document.getElementById("slideHolder2");
var slideId3 = document.getElementById("slideHolder3");
var slidehold = document.getElementById("p-aboutPhaze-trig" );
var slidebtnL = document.getElementById("buttonLeft");
var slidebtnR = document.getElementById("buttonRight");

function phazingRight(slidephaze1, slidephaze2, add){
    if(slidephaze1.style.transform = "translateX(0)"){
        slidephaze1.style.transform = "translateX(-100%)";
        slidephaze1.style.opacity = "0";
        slidephaze2.style.transform = "translateX(0)";
        slidephaze2.style.opacity = "1";
        slidebtnR.addEventListener("click", add);
        slidebtnL.removeEventListener("click", leftAgain1);
    }
}

function phazingLeft(slidephaze1, slidephaze2, add){
    if(slidephaze1.style.transform = "translateX(0)"){
        slidephaze1.style.transform = "translateX(100%)";
        slidephaze1.style.opacity = "0";
        slidephaze2.style.transform = "translateX(0)";
        slidephaze2.style.opacity = "1";
        slidebtnL.addEventListener("click", add);
        slidebtnR.removeEventListener("click", rightAgain1);
    }
}

function slideRight(){    
    phazingRight(slideId1, slideId2, rightAgain1);
}

function rightAgain1(){
    phazingRight(slideId2, slideId3, null);
}


function slideLeft(){
    phazingLeft(slideId3, slideId2, leftAgain1);
}

function leftAgain1(){
    phazingLeft(slideId2, slideId1, null);
}



