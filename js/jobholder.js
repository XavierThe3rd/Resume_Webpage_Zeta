/*
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
        jb1.appendChild(p);   
              
    }else{
        jb1.style.height= "250px";
        jb1.style.borderColor= "rgb(53, 50, 59)";
        htag.style.display= "block";
        logo.style.display= "block";
        jb1.removeChild(p);
    
        
    }
}


function openNav(){

    
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

    function toColor(color){
        var btnPrime = document.getElementsByClassName("barz");
		for(var indexName = 0; indexName < btnPrime.length; indexName++){
			btnPrime[indexName].style.background= color;
		}
    }
    
    function headerFunction(height, transDelay, trans){
        header.style.height = height;
		header.style.transitionDelay= transDelay;
		header.style.transition = trans;
     }
     
     function fader(){
		 var ids = ["btn1id", "btn2id", "btn3id"];
         for(var i = 0; i < ids.length; i++){
			 document.getElementById(ids[i]).style.animationName= "fadeout";
			 document.getElementById(ids[i]).style.opacity= "1";
			 document.getElementById(ids[i]).style.transform= "translateY(0px)";
			 document.getElementById(ids[2]).style.animationDelay= "0s";
			 document.getElementById(ids[1]).style.animationDelay= "0.1s";
			 document.getElementById(ids[0]).style.animationDelay= "0.2s";
         }
	 }
	 
	 function rmvTime(){
		header.removeChild(removeNav);
	}

	 function element(varname, idname, textz, class1, class2, class3, class4, class5, class6, click){
		varname.setAttribute("id", idname);
		varname.textContent = textz;
		varname.classList.add(class1, class2, class3, class4, class5, class6);
		varname.setAttribute("onclick", click);
	}

    element(nav, "navid", null, "flex", "grid10", "column", null, null, null, null);
    element(div, "divid", null, "flex", "center", "row", null, null, null, null);
    element(button1, "btn1id", "about", "prime-f", "opacity-none", "point", "abs", "no-border", "no-background", "aboutPage()");
    element(button2, "btn2id", "code", "prime-f", "opacity-none", "point", "abs", "no-border", "no-background", "codePage()");
	element(button3, "btn3id", "portfolio", "prime-f", "opacity-none", "point", "abs", "no-border", "no-background", "portfolioPage()");
	
	if (header.style.height === "50px"){
        headerFunction("101%", "0.25s", "all 0.3s ease-in, background 0.5s ease-in");
		toColor("#CC0066");
		header.appendChild(nav);
		nav.appendChild(div);
        div.appendChild(button1);
        div.appendChild(button2);
        div.appendChild(button3);

	}else{
        headerFunction("50px", "0.2s", "all 0.5s ease-out, background 1s ease-out");
        fader();
		toColor("#ffffff");
		var removeNav =document.getElementById("navid");
        header.addEventListener("transitionend", rmvTime, false);
	}
}
*/