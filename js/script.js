//onload function
/*function Load(title){
    var titleWrap = document.getElementById(title);
    titleWrap.style.opacity = "1";
    }
*/    
    //switchers append remove
    var logoObj = document.getElementById("logoObject");
    var gearW = document.getElementById("gearWhole");
    var gearHL = document.getElementById("gearHalfLeft");
    var gearHR = document.getElementById("gearHalfRight");
    var gearQ = document.getElementById("gearQuarter");
    
    var gearArray = [logoObj, gearW, gearHL, gearHR, gearQ];
    
    
    function portfolioPage(){
        var inthold = document.getElementById("introHolder");
        var logohold = document.getElementById("logoHolder");
        inthold.style.background = "#6E28E1";
        for(var logoOut = 0; logoOut < gearArray.length; logoOut++){
            logohold.removeChild(gearArray[logoOut]);
        }
    }
    
    function aboutPage(){
        var inthold = document.getElementById("introHolder");
        var logohold = document.getElementById("logoHolder");
        inthold.style.background = "black";
        for(var logoIn = 0; logoIn < gearArray.length; logoIn++){
            logohold.appendChild(gearArray[logoIn]);
        }
    }
    
    
    //file Animation
    
   // Load("logoObject");
    openNav();
    fileOpen();
    