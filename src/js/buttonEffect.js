
export function toColor(clazz, id, color, border, trans1, trans2, opc){
	var buttonz = document.getElementById(id);
	var btnPrime = document.getElementsByClassName(clazz);

	for(var indexName = 0; indexName < btnPrime.length; indexName++){
        btnPrime[indexName].style.background= color;

		if(indexName == 0){
			btnPrime[indexName].style.transform= trans1;
		}
		if(indexName == 1){
			btnPrime[indexName].style.transform= trans2;
		}
		if(indexName ==2){
            btnPrime[indexName].style.opacity= opc;
        }
    }
    function buttonOn(){
        for(var indexO = 0; indexO < btnPrime.length; indexO++){
            buttonz.style.borderColor = "#ff0021";
            btnPrime[indexO].style.background= "#ff0021";
        }
    }	
    function buttonOff(){
        for(var indexC = 0; indexC < btnPrime.length; indexC++){
            buttonz.style.borderColor = border;
            btnPrime[indexC].style.background= color;   
        }   
    }
    buttonz.style.borderColor = border;
    
    if (window.innerWidth > 1000){	
        buttonz.addEventListener("mouseover", buttonOn);
        buttonz.addEventListener("mouseout", buttonOff);
    }
}
