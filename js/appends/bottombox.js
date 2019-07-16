


function resHolder() {
    var mdiv = document.createElement("div");
    mdiv.classList.add("grid10", "hgrid10", "center", "flex");

	function initElms() {
		var htag = document.createElement("h3");
		var rWrap = document.createElement("div");
		htag.textContent = "Resume"; //--!--//
		htag.classList.add("prime-f", "t-center", "opacity-none", "abs", "z3");
        rWrap.classList.add("resume-wrap", "over-x", "grid10", "flex", "rel", "column");
        htag.setAttribute("id", "resumePhaze");
        rWrap.setAttribute("id", "resumeWrap");

        mdiv.appendChild(htag);
        mdiv.appendChild(rWrap);
		
        function fileDiv() {
			var fdiv = document.createElement("div");
            fdiv.classList.add("file-wrap", "rel", "flex", "center");
            fdiv.setAttribute("id", "fileWrap");
            rWrap.appendChild(fdiv);
            //--gears--//
            fdiv.appendChild(gearMW);
            fdiv.appendChild(gearH1res);
            fdiv.appendChild(gearH2res);
            fdiv.appendChild(gearH3res);
            fdiv.appendChild(gearQ1res);
            fdiv.appendChild(gearQ2res);
            fdiv.appendChild(gearQ3res);


            function baseObj(clazz, iD, data) {
				var bObj = document.createElement("object");
                bObj.classList.add(clazz, "z3", "abs", "file");
                bObj.setAttribute("id", iD);
                bObj.setAttribute("data", data);
                bObj.setAttribute("type", "image/svg+xml");
                
				fdiv.appendChild(bObj);
				return bObj;
			}
                       
			function inDiv(dClazz, txt,  iDcon, iDobj1, iDobj2, click) {
                var dCon = document.createElement("div");
                var btn = document.createElement("button");
                var inObjA = document.createElement("object");
                var inObjB = document.createElement("object");

                btn.textContent= txt;
				
                dCon.classList.add(dClazz, "flex", "center", "z3");
                btn.classList.add("z2", "prime-f","t-center","point", "abs" );
                inObjA.classList.add("file", "file-page", "abs");
                inObjB.classList.add("file", "file-holder", "abs");

                dCon.setAttribute("id", iDcon);
                inObjA.setAttribute("id", iDobj1);
                inObjB.setAttribute("id", iDobj2);

                inObjA.setAttribute("data", "./images/file-page.svg");
                inObjB.setAttribute("data", "./images/file-holder.svg");
                inObjA.setAttribute("type", "image/svg+xml");
                inObjB.setAttribute("type", "image/svg+xml");

                btn.setAttribute("onclick", click);

				fdiv.appendChild(dCon);
                dCon.appendChild(inObjA);
                dCon.appendChild(inObjB);
				dCon.appendChild(btn);

				return dCon;

            }
            
            function primeBtn(){
                var dBtn = document.createElement("button");
                dBtn.classList.add("file-lock", "no-border", "abs", "z4");
                dBtn.setAttribute("id", "fileLock");
                dBtn.setAttribute("onclick", "fileOpen()");
                fdiv.appendChild(dBtn);
                return dBtn;
            } 

			baseObj("file-backplate", "filebackPlate", "./images/file-backplate.svg");

			inDiv("inside-hold-1", "Official Resume", "insideH1", "filePageA", "fileHolderA" ,"openDocumentA()");
            inDiv("inside-hold-2", "Degrees, Certs, Ex.", "insideH2", "filePageB", "fileHolderB" ,"openDocumentB()");
            inDiv("inside-hold-3", "Other", "insideH3", "filePageC", "fileHolderC" ,"openDocumentC()");		

			baseObj("file-front", "fileFleft", "./images/file-frontplate-left.svg");
			baseObj("file-front", "fileFright", "./images/file-frontplate-right.svg" );
            primeBtn();
            return fdiv;
        }
        
		fileDiv();
		return rWrap;
	}
	initElms();
	return mdiv;
}

var resHld = resHolder();


