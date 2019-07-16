
var slideId1 = document.getElementById("slideHolder1");
var slideId2 = document.getElementById("slideHolder2");
var slideId3 = document.getElementById("slideHolder3");
var slideId4 = document.getElementById("slideHolder4");
var slideId5 = document.getElementById("slideHolder5");
var slidehold = document.getElementById("p-aboutPhaze-trig" );
var slidebtnL = document.getElementById("buttonLeft");
var slidebtnR = document.getElementById("buttonRight");

function phazingRight(slidephaze1, slidephaze2, add){
    if(slidephaze1.style.transform = "translateX(0)"){
        slidephaze1.style.transform = "translateX(-100%)";
        slidephaze2.style.transform = "translateX(0)";
        slidebtnR.addEventListener("click", add);
        slidebtnL.removeEventListener("click", leftAgain3);
        slidebtnL.removeEventListener("click", leftAgain2);
        slidebtnL.removeEventListener("click", leftAgain1);
    }
}

function phazingLeft(slidephaze1, slidephaze2, add){
    if(slidephaze1.style.transform = "translateX(0)"){
        slidephaze1.style.transform = "translateX(100%)";
        slidephaze2.style.transform = "translateX(0)";
        slidebtnL.addEventListener("click", add);
        slidebtnR.removeEventListener("click", rightAgain3);
        slidebtnR.removeEventListener("click", rightAgain2);
        slidebtnR.removeEventListener("click", rightAgain1);
    }
}

function slideRight(){    
    phazingRight(slideId1, slideId2, rightAgain1);
}

function rightAgain1(){
    phazingRight(slideId2, slideId3, rightAgain2);
}

function rightAgain2(){
    phazingRight(slideId3, slideId4, rightAgain3);
}

function rightAgain3(){
    phazingRight(slideId4, slideId5, null);
}

function slideLeft(){
    phazingLeft(slideId5, slideId4, leftAgain1);
}

function leftAgain1(){
    phazingLeft(slideId4, slideId3, leftAgain2);
}

function leftAgain2(){
    phazingLeft(slideId3, slideId2, leftAgain3);
}

function leftAgain3(){
    phazingLeft(slideId2, slideId1, null);
}
