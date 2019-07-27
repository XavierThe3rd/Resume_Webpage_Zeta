 
function openJob(){
    var jb1 = document.getElementById("jobPrime1");
    var logo = document.getElementById("imageHolder");
    var htag = document.getElementById("jobTag");
    var ptag= document.getElementById("pId");

    if(logo.style.opacity === "1"){

        jb1.style.borderColor= "#CC0066";
        toColor("barz2", "#ff0022", "translateY(10px) rotate(45deg)", "translateY(1px) rotate(-45deg)", "0");
        logo.style.opacity = "0";
        htag.style.opacity = "0";
        ptag.style.opacity = "1"; 
              
    }else{

        jb1.style.borderColor= "#6e28e1";
        toColor("barz2", "#ffffff", "translateY(0) rotate(0)", "translateY(0) rotate(0)", "1");
        
        ptag.style.opacity = "0"; 
        logo.style.opacity = "1";
        htag.style.opacity = "1";        
    }
}
