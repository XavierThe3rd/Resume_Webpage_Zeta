import {gearQ1, gearW, gearQ2, gearHR, gearHL, gearHB, gearQ3, Logo} from ('./js/appends/gearVar.js');

export function introDiv(){
    var intDiv= document.createElement("div");
    intDiv.classList.add("intdiv");

    function createTopDivs(id, clazz1, clazz2, clazz3, clazz4, clazz5, clazz6){
        var a = document.createElement("div");
        a.setAttribute("id", id);
        a.classList.add(clazz1, clazz2, clazz3, clazz4, clazz5, clazz6);
        

        return a;
    }
var logohld = createTopDivs("logoHolder", "mylogo-holder", "flex", "center", "grid7", "auto", "rel");
var botrig = createTopDivs("bottomLogoTrig", "botrig", "abs", null, null, null, null);
var ttlwrap = createTopDivs("titleWrap", "title-wrap", "flex", "grid8", "column", null, null);

intDiv.appendChild(logohld);
intDiv.appendChild(botrig);
intDiv.appendChild(ttlwrap);
logohld.appendChild(gearQ1);
logohld.appendChild(gearW);
logohld.appendChild(gearQ2);
logohld.appendChild(gearHR);
logohld.appendChild(gearHL);
logohld.appendChild(gearHB);
logohld.appendChild(gearQ3);
logohld.appendChild(Logo);

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
        span1.textContent= "A resume page of";
        span2.textContent= "Thomas X. Grasso";
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

return intDiv;
}
//--creatTopPs--//

