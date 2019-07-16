
function createAbout(){
    abt = document.createElement("div");
    abt.classList.add("about-wrap", "over-x", "flex", "column", "grid10");

    function creatHnPw(){
        h = document.createElement("h3");
        div = document.createElement("div");
        h.classList.add("prime-f", "t-center", "opacity-none");
        h.textContent= "About"
        div.classList.add("personal-wrap", "flex", "rel", "center", "grid10");
        h.setAttribute("id", "aboutPhaze");
        div.setAttribute("id", "p2-toptrig");
        abt.appendChild(h);
        abt.appendChild(div);
        
        function createPersonal(){
            person = document.createElement("div");
            person.classList.add("personal-holder", "over-x", "abs", "btw", "flex", "z3");
            person.setAttribute("id", "p-aboutPhaze-trig");
            div.appendChild(person);

            function createpButton(){
                buttonL = document.createElement("button");
                buttonR = document.createElement("button");
                buttonL.setAttribute("id", "buttonLeft");
                buttonL.setAttribute("onclick", "slideLeft()");
                buttonL.classList.add("leftbutton", "no-background", "no-border", "hgrid10", "grid3", "abs", "center", "flex", "left", "z2");
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
            createElementSlide("slideHolder4", "Somthing4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
            createElementSlide("slideHolder5", "Somthing5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
            
            createpButton();
            return person
        }
        createPersonal();
        
        return  div && h

    }
    creatHnPw();
    return abt;
}


