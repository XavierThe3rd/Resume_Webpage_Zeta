

//--SlideShowAppends--//
var slidehold = document.getElementById("p-aboutPhaze-trig" );
var slidebtnL = document.getElementById("buttonLeft");
var slidebtnR = document.getElementById("buttonRight");

function createElement(id, text1, text2){
    var a = document.createElement("div");
    var b = document.createElement("h4");
    var c = document.createElement("p");

    a.setAttribute("id", id);
    b.textContent= text1;
    c.textContent= text2;

    a.classList.add("texthold", "flex", "column", "abs", "grid10", "hgrid10", "over-x", );
    b.classList.add("prime-f", "t-center");
    c.classList.add("prime-f", "t-center", "over-x");

    a.appendChild(b);
    a.appendChild(c)

    return a 
}

var slide1 = createElement("slideHolder1", "Somthing1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var slide2 = createElement("slideHolder2", "Somthing2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var slide3 = createElement("slideHolder3", "Somthing3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var slide4 = createElement("slideHolder4", "Somthing4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var slide5 = createElement("slideHolder5", "Somthing5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

function appendIt(slideName){
    slidehold.appendChild(slideName);
}

appendIt(slide1);
appendIt(slide2);
appendIt(slide3);
appendIt(slide4);
appendIt(slide5);