
function clearListen1(){
    var slideH1 = document.getElementById("slideHolder1");
    slideH1.removeEventListener("transitionend", toSlide2);
    slideH1.removeEventListener("transitionend", scaleSlide2);
    document.getElementById("buttonRight").removeEventListener("click", slideRight);
    document.getElementById("buttonRight").addEventListener("click", rightAgain1);
    document.getElementById("buttonLeft").addEventListener("click", leftAgain1);
    document.getElementById("buttonLeft").removeEventListener("click", slideLeft);
}

function clearListen2(){
    var slideH2 = document.getElementById("slideHolder2");
    slideH2.removeEventListener("transitionend", scaleSlide3);
    slideH2.removeEventListener("transitionend", toSlide3);
    document.getElementById("buttonRight").removeEventListener("click", rightAgain1);
    document.getElementById("buttonLeft").addEventListener("click", slideLeft);
    document.getElementById("buttonLeft").removeEventListener("click", leftAgain1);
}

function clearListen3(){
    var slideH3 = document.getElementById("slideHolder3");
    slideH3.removeEventListener("transitionend", toSlide2A);
    slideH3.removeEventListener("transitionend", scaleSlide2A);
    document.getElementById("buttonLeft").removeEventListener("click", slideLeft);
    document.getElementById("buttonLeft").addEventListener("click", leftAgain1);
    document.getElementById("buttonRight").removeEventListener("click", slideRight);
    document.getElementById("buttonRight").addEventListener("click", rightAgain1);
}

function clearListen4(){
    var slideH2 = document.getElementById("slideHolder2");
    slideH2.removeEventListener("transitionend", scaleSlide1);
    slideH2.removeEventListener("transitionend", toSlide1);
    document.getElementById("buttonLeft").removeEventListener("click", leftAgain1);
    document.getElementById("buttonRight").addEventListener("click", slideRight);
    document.getElementById("buttonRight").removeEventListener("click", rightAgain1);
}

function toSlide2(){
    var slideH1 = document.getElementById("slideHolder1");
    var slideH2 = document.getElementById("slideHolder2");
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "1";
    person.style.overflow = "hidden";
    slideH1.style.transform = "translateX(-100%) scale(0.75)";
    slideH2.style.transform = "translateX(0) scale(0.75)";
    slideH1.addEventListener("transitionend", scaleSlide2);
}

function scaleSlide2(){
    var slideH2 = document.getElementById("slideHolder2");
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "0";
    person.style.overflow = "inherit";
    slideH2.style.transform = "scale(1)";
    window.setTimeout(clearListen1, 0);
}

function toSlide3(){
    var slideH2 = document.getElementById("slideHolder2");
    var slideH3 = document.getElementById("slideHolder3");
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "1";
    person.style.overflow = "hidden";
    slideH2.style.transform = "translateX(-100%) scale(0.75)";
    slideH3.style.transform = "translateX(0) scale(0.75)";
    slideH2.addEventListener("transitionend", scaleSlide3);
}

function scaleSlide3(){
    var slideH3 = document.getElementById("slideHolder3");
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "0"; 
    person.style.overflow = "inherit";
    slideH3.style.transform = "scale(1)";
    window.setTimeout(clearListen2, 0);
}

export function slideRight(){    

    var slideH1 = document.getElementById("slideHolder1");
    slideH1.style.transform = "scale(0.75)";
    slideH1.addEventListener("transitionend", toSlide2);
    document.getElementById("buttonLeft").removeEventListener("click", leftAgain1);
}


function rightAgain1(){
    var slideH2 = document.getElementById("slideHolder2");
    var slideH1 = document.getElementById("slideHolder1");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "0";  
    slideH1.style.transform = "translateX(-100%)";
    slideH2.style.transform = "scale(0.75)";
    slideH2.addEventListener("transitionend", toSlide3);
}
    

function toSlide2A(){
    var slideH2 = document.getElementById("slideHolder2");
    var slideH3 = document.getElementById("slideHolder3");
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "1";
    person.style.overflow = "hidden";
    slideH2.style.transform = "translateX(0) scale(0.75)";
    slideH3.style.transform = "translateX(100%) scale(0.75)";
    slideH3.addEventListener("transitionend", scaleSlide2A);
}

function scaleSlide2A(){
    var slideH2 = document.getElementById("slideHolder2");
    var slideH3 = document.getElementById("slideHolder3");
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "0";
    slideH3.style.transform = "translateX(100%) scale(0.75)";
    person.style.overflow = "inherit";
    slideH2.style.transform = "scale(1)";
    document.getElementById("buttonRight").removeEventListener("click", rightAgain1);
    window.setTimeout(clearListen3, 0);
}

function toSlide1(){
    var slideH1 = document.getElementById("slideHolder1");
    var slideH2 = document.getElementById("slideHolder2");
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "1";
    person.style.overflow = "hidden";
    slideH1.style.transform = "translateX(0) scale(0.75)";
    slideH2.style.transform = "translateX(100%) scale(0.75)";
    slideH2.addEventListener("transitionend", scaleSlide1);
}

function scaleSlide1(){
    var slideH1 = document.getElementById("slideHolder1");
    var person = document.getElementById("personWrap");
    var sShield = document.getElementById("shieldSlide");

    sShield.style.opacity = "0"; 
    person.style.overflow = "inherit";
    slideH1.style.transform = "scale(1)";
    window.setTimeout(clearListen4, 0);
}

export function slideLeft(){
    //phazingLeft("slideHolder3", "slideHolder2", leftAgain1);
    var slideH3 = document.getElementById("slideHolder3");

    //slideH2.style.transform = "translateX(-100%)";
    slideH3.style.transform = "scale(0.75)";
    slideH3.addEventListener("transitionend", toSlide2A);
    
}

function leftAgain1(){
    //phazingLeft("slideHolder2", "slideHolder1", null);
    var slideH2 = document.getElementById("slideHolder2");
    var slideH3 = document.getElementById("slideHolder3");

    slideH3.style.transform = "translateX(100%)";
    slideH2.style.transform = "scale(0.75)";
    slideH2.addEventListener("transitionend", toSlide1);
}




