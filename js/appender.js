//--introDivAppends--//

var introId= document.getElementById("introHolder");

function createTopDivs(id, clazz1, clazz2, clazz3, clazz4, clazz5, clazz6){
    var a = document.createElement("div");
    a.setAttribute("id", id);
    a.classList.add(clazz1, clazz2, clazz3, clazz4, clazz5, clazz6);

    return a;
}

var logohld = createTopDivs("logoHolder", "mylogo-holder", "flex", "center", "grid7", "auto", "rel");
var botrig = createTopDivs("bottomLogoTrig", "botrig", "abs", null, null, null, null);
var ttlwrap = createTopDivs("titleWrap", "title-wrap", "flex", "grid7", "column", null, null);

//--creatTopPs--//

function createP(){
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    p1.classList.add("intro-p1", "prime-f", "t-center");
    p2.classList.add("intro-p2", "prime-f", "t-center");
    p1.setAttribute("id", "p1-toptrig");
    p2.setAttribute("id", "p2-toptrig");
    ttlwrap.appendChild(p1);
    ttlwrap.appendChild(p2);

    function createSpan(){
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        var span3 = document.createElement("span");
        span1.textContent= "A portfolio and resume page of";
        span2.textContent= "Thomas Xavier Grasso III.";
        span3.textContent= "see how he can benifit your company below.";
        p1.appendChild(span1);
        p1.appendChild(span2);
        p2.appendChild(span3);
        return p1 && p2
    }
    createSpan();
    return ttlwrap;
}
createP();

//--gearTopAppends--//

function createElementGears(className, id, data){
    var a = document.createElement("object");
    a.classList.add(className, "abs");
    a.setAttribute("id", id);
    a.setAttribute("data", data);
    a.setAttribute("type", "image/svg+xml");
    return a;
}

var gearQ1 = createElementGears("gear-quarter1", "gearQ1", "./images/GearQuarterWire.svg");
var gearW = createElementGears("gear-whole", "gearWhole", "./images/GearWholeWire.svg");
var gearQ2 = createElementGears("gear-quarter2", "gearQ2", "./images/GearQuarterWire.svg");
var gearHR = createElementGears("gear-half-right", "gearHalfRight", "./images/GearHalfWire.svg");
var gearHL = createElementGears("gear-half-left", "gearHalfLeft", "./images/GearHalfWire.svg");
var gearHB = createElementGears("gear-half-bottom", "gearHalfBottom", "./images/GearHalfWire.svg");
var gearQ3 = createElementGears("gear-quarter3", "gearQ3", "./images/GearQuarterWire.svg");
var Logo = createElementGears("logo-prime", "logoObject", "./images/DragonLogoBeta.svg");

//--AboutAppend--//
/*
function creatAbout(){
    a = document.createElement("div");
    a.classList.add("about-wrap", "over-x", "flex", "column", "grid10");

    function creatHnPw(){
        h = document.createElement("h3");
        div = document.createElement("div");
        h.classList.add("prime-f", "t-center", "opacity-none");
        d.classList.add("personal-wrap flex rel center grid10");
        h.setAttribute("id", "p1-toptrig");
        div.setAttribute("id", "p2-toptrig");
        a.appendChild(h);
        a.appendChild(div);
        return a
        }
        function createPersonal(){
            person = document.createElement("div");
            person.classList.add("personal-holder", "over-x", "abs", "btw", "flex", "z3");
            person.setAttribute("id", "p-aboutPhaze-trig");
            div.appendChild(person);
            return div
        }

        function createpButton(){
            buttonL = document.createElement("button");
            buttonR = document.createElement("button");
            buttonL.setAttribute("id", "buttonLeft");
            buttonL.setAttribute("onclick", "slideLeft()");
            buttonL.classList("leftbutton", "no-background", "no-border", "hgrid10", "grid3", "abs", "center", "flex", "left", "z2");
            buttonR.setAttribute("id", "buttonRight");
            buttonR.setAttribute("onclick", "slideRight()");
            buttonR.classList("rightbutton", "no-background", "no-border", "hgrid10", "grid3", "abs", "center", "flex", "left", "z2");
            person.appendChild(buttonL);
            person.appendChild(buttonR);
            return person
        }  
    createpButton();
    creatHnPw();
    createPersonal();
    return a;
}
 var ctr = createAbout();



<div class ="about-wrap over-x flex column grid10">
    <h3 class= "prime-f t-center opacity-none"id= "aboutPhaze">About</h3>
    <div class= "personal-wrap flex rel center grid10" id="personWrap">
        <div class="personal-holder over-x abs btw flex z3" id= "p-aboutPhaze-trig" >
            <button class=" leftbutton no-background no-border hgrid10 grid3 abs center flex left z2" id="buttonLeft" onclick="slideLeft()">&#x25C4;</button>
            <button class=" righttbutton no-background no-border hgrid10 grid3 abs center flex right z2" id="buttonRight" onclick="slideRight()">&#x25BA;</button>
        </div>
    </div>
</div>
*/
//--SlideShowAppends--//

var slidehold = document.getElementById("p-aboutPhaze-trig" );
var slidebtnL = document.getElementById("buttonLeft");
var slidebtnR = document.getElementById("buttonRight");

function createElementSlide(id, text1, text2){
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

var slide1 = createElementSlide("slideHolder1", "Somthing1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var slide2 = createElementSlide("slideHolder2", "Somthing2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var slide3 = createElementSlide("slideHolder3", "Somthing3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var slide4 = createElementSlide("slideHolder4", "Somthing4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
var slide5 = createElementSlide("slideHolder5", "Somthing5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

function appendIt(from ,to){
    from.appendChild(to);
}

appendIt(introId, logohld);
appendIt(introId, botrig);
appendIt(introId, ttlwrap);

appendIt(slidehold, slide1);
appendIt(slidehold, slide2);
appendIt(slidehold, slide3);
appendIt(slidehold, slide4);
appendIt(slidehold, slide5);

appendIt(logohld, gearQ1);
appendIt(logohld, gearW);
appendIt(logohld, gearQ2);
appendIt(logohld, gearHR);
appendIt(logohld, gearHL);
appendIt(logohld, gearHB);
appendIt(logohld, gearQ3);
appendIt(logohld, Logo);