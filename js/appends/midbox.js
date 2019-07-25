/*
<div class ="title-wrap flex grid7 column" id="titleWrap">
    <p class= " intro-p1 prime-f t-center" id= "p-onetoptrig">
        <span>A portfolio and resume page of</span>
        <span>Thomas Xavier Grasso III.</span>
    </p>
    <p class="intro-p2 prime-f t-center">
        <span>Lets see how he can benifit your company below.</span>
    </p>
</div>
*/

function createAbout(){
    abt = document.createElement("div");
    abt.classList.add("about-wrap", "over-x", "flex", "column", "grid10");


    function hnpwHolder(){
        wrapit = document.createElement("div"); 
        wrapit.classList.add("about-twrap", "column", "flex", "auto");
        abt.appendChild(wrapit);
        
        function creatHnPw(){
            h = document.createElement("h3"); 
            h.classList.add("prime-f", "opacity-none"); 
            h.textContent= "About"; h.setAttribute("id", "aboutPhaze");
            div = document.createElement("div"); 
            div.classList.add("personal-wrap", "flex", "rel", "center", "grid10");
            div.setAttribute("id", "p2-toptrig");
            obj = document.createElement("object");
            obj.classList.add("book");
            obj.setAttribute("data", "./images/book.svg");
            obj.setAttribute("type", "image/svg+xml");
            p = document.createElement("p");
            p.classList.add("prime-f");
            p.setAttribute("id", "pm1-Phaze");
            p.textContent= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore";
            wrapit.appendChild(obj);
            wrapit.appendChild(h);
            wrapit.appendChild(p);
            wrapit.appendChild(div);
            
            function createPersonal(){
                person = document.createElement("div");
                person.classList.add("personal-holder", "over-x", "abs", "btw", "flex", "z3");
                person.setAttribute("id", "p-aboutPhaze-trig");
                div.appendChild(person);


                function createpButton(){
                    buttonL = document.createElement("button");
                    buttonL.setAttribute("id", "buttonLeft");
                    buttonL.setAttribute("onclick", "slideLeft()");
                    buttonL.classList.add("leftbutton", "no-background", "no-border", "hgrid10", "grid3", "abs", "center", "flex", "left", "z2");
                    buttonR = document.createElement("button");  
                    buttonR.setAttribute("id", "buttonRight");
                    buttonR.setAttribute("onclick", "slideRight()");
                    buttonR.classList.add("rightbutton", "no-background", "no-border", "hgrid10", "grid3", "abs", "center", "flex", "right", "z2");
                    person.appendChild(buttonL);
                    person.appendChild(buttonR);

                    var ArwL = document.createTextNode("\u25c4");
                    buttonL.appendChild(ArwL);

                    var ArwR = document.createTextNode("\u25ba");
                    buttonR.appendChild(ArwR);


                    return buttonL && buttonR
                } 

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
                    person.appendChild(a);
                    a.appendChild(b);
                    a.appendChild(c)
                
                    return a && b && c;
                }

                createElementSlide("slideHolder1", "Somthing1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
                createElementSlide("slideHolder2", "Somthing2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
                createElementSlide("slideHolder3", "Somthing3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
                
                createpButton();
                return person
            }
            
            createPersonal();           
            return  div && h
        }

    creatHnPw();
    return wrapit;
    }

    function resButton(){
        button = document.createElement("button");
        button.setAttribute("id", "buttonRes");
        button.setAttribute("onclick", "openRes()");
        button.classList.add("resbutton", "no-background", "block");
        button.textContent= "View Ressume";
        abt.appendChild(button);
        return button;
    }

    hnpwHolder();
    resButton();
    return abt;
}


