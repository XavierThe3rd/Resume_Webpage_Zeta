

//--SlideShowAppends--//
var slidehold = document.getElementById("p-aboutPhaze-trig" );
var slidebtnL = document.getElementById("buttonLeft");
var slidebtnR = document.getElementById("buttonRight");

var slide1 = document.createElement("div");
var htag1 = document.createElement("h4");
var ptag1 = document.createElement("p");
slide1.setAttribute("id", "slideHolder1");
htag1.textContent= "Somthing1";
ptag1.textContent= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var slide2 = document.createElement("div");
var htag2 = document.createElement("h4");
var ptag2 = document.createElement("p");
slide2.setAttribute("id", "slideHolder2");
htag2.textContent= "Somthing2";
ptag2.textContent= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


var slide3 = document.createElement("div");
var htag3 = document.createElement("h4");
var ptag3 = document.createElement("p");
slide3.setAttribute("id", "slideHolder3");
htag3.textContent= "Somthing3";
ptag3.textContent= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var slide4 = document.createElement("div");
var htag4 = document.createElement("h4");
var ptag4 = document.createElement("p");
slide4.setAttribute("id", "slideHolder4");
htag4.textContent= "Somthing4";
ptag4.textContent= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var slide5 = document.createElement("div");
var htag5 = document.createElement("h4");
var ptag5 = document.createElement("p");
slide5.setAttribute("id", "slideHolder5");
htag5.textContent= "Somthing5";
ptag5.textContent= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function slideClass(){
    var slideArray = [slide1, slide2, slide3, slide4, slide5];
    var htagArray = [htag1, htag2, htag3, htag4, htag5];
    var ptagArray = [ptag1, ptag2, ptag3, ptag4, ptag5];

    for(var clazz = 0; clazz < slideArray.length; clazz++){
        slideArray[clazz].classList.add("texthold", "flex", "column", "abs", "grid10", "hgrid10");
        htagArray[clazz].classList.add("prime-f", "t-center");
        ptagArray[clazz].classList.add("prime-f", "t-center");
    }
}
slideClass();


function appendIt(slideName, htagName, ptagName){
    slidehold.appendChild(slideName);
    slideName.appendChild(htagName);
    slideName.appendChild(ptagName);
}

appendIt(slide1, htag1, ptag1);
appendIt(slide2, htag2, ptag2);
appendIt(slide3, htag3, ptag3);
appendIt(slide4, htag4, ptag4);
appendIt(slide5, htag5, ptag5);