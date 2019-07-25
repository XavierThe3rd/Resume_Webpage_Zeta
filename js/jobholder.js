
var p = document.createElement("p");
var span1 = document.createElement("span");
span1.textContent= "from June 25, 2019  -  to August 29, 2019";
var span2 = document.createElement("span");
span2.textContent= "Qintel located in Pittsburgh PA. is one of the top cyber security companies in the nation which served as an excellent synthesis for my graphic design and coding background.";
var span3 = document.createElement("span");
span3.textContent= "Responsibilities included merchandise design, business paraphanalia design (brochures, product fliers, ex.), ux/ui for various company matenance materials, and invessigation participation.";
p.appendChild(span1);
p.appendChild(span2);
p.appendChild(span3);

function openJob(){
    var jb1 = document.getElementById("jobPrime1");
    var logo = document.getElementById("imageHolder");
    var htag = document.getElementById("jobTag");
    
    if(jb1.style.height === "250px"){

        jb1.style.height= "250.05px";
        jb1.style.borderColor= "#CC0066";
        htag.style.display= "none";
        logo.style.display= "none";
        toColor("barz2", "#ff0022", "translateY(10px) rotate(45deg)", "translateY(1px) rotate(-45deg)", "0");
        jb1.appendChild(p);   
              
    }else{
        jb1.style.height= "250px";
        jb1.style.borderColor= "rgb(53, 50, 59)";
        htag.style.display= "block";
        logo.style.display= "block";
        toColor("barz2", "#ffffff", "translateY(0) rotate(0)", "translateY(0) rotate(0)", "1");
        jb1.removeChild(p);
    
        
    }
}
