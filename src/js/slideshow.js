

function phazingRight(slidephaze1, slidephaze2, add){
    if( document.getElementById(slidephaze1).style.transform = "translateX(0)"){
        document.getElementById(slidephaze1).style.transform = "translateX(-100%)";
        document.getElementById(slidephaze1).style.opacity = "0";
        document.getElementById(slidephaze2).style.transform = "translateX(0)";
        document.getElementById(slidephaze2).style.opacity = "1";
        document.getElementById("buttonRight").addEventListener("click", add);
        document.getElementById("buttonLeft").removeEventListener("click", leftAgain1);
    }
}

function phazingLeft(slidephaze1, slidephaze2, add){
    if( document.getElementById(slidephaze1).style.transform = "translateX(0)"){
        document.getElementById(slidephaze1).style.transform = "translateX(100%)";
        document.getElementById(slidephaze1).style.opacity = "0";
        document.getElementById(slidephaze2).style.transform = "translateX(0)";
        document.getElementById(slidephaze2).style.opacity = "1";
        document.getElementById("buttonLeft").addEventListener("click", add);
        document.getElementById("buttonRight").removeEventListener("click", rightAgain1);
    }
}

export function slideRight(){    
    phazingRight("slideHolder1", "slideHolder2", rightAgain1);
}

function rightAgain1(){
    phazingRight("slideHolder2", "slideHolder3", null);
}


export function slideLeft(){
    phazingLeft("slideHolder3", "slideHolder2", leftAgain1);
}

function leftAgain1(){
    phazingLeft("slideHolder2", "slideHolder1", null);
}




