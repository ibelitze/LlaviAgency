

/*
			AQUI VA TODO EL CÓDIGO RELACIONADO CON LOS SCROLLS DE LA PÁGINA

*/

			var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;


//  SCROLL LEFT
function scrollleft() {

		var scroll = $(window).scrollLeft();
		var bolita1 = document.getElementById('bolita1');
		var bolita2 = document.getElementById('bolita2');
		var bolita3 = document.getElementById('bolita3');
		var bolita4 = document.getElementById('bolita4');


	// RESOLUCION DE 1300 X 700	

	if(screen.availHeight > 540 && screen.availHeight < 1025 
		&& screen.availWidth < 1401 && screen.availWidth > 1300){


		if(scroll==1150){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';

			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$('html,body').stop(true, true).animate({
	   				 scrollLeft: 0
				}, 800);
			}
			
		}

		if(scroll==2300){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';

			if(es_firefox){
				$(window).scrollLeft(1150);
			}
			else {
				$('html,body').stop(true, true).animate({
	   				 scrollLeft: 1150
				}, 800);
			}



		}

		if(scroll==3450){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';

			if(es_firefox){
				$(window).scrollLeft(2300);
			}
			else {
				$('html,body').stop(true, true).animate({
	   				 scrollLeft: 2300
				}, 800);
			}



		}

		else if (scroll > 0 && scroll < 1150) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';	

			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$('html,body').stop(true, true).animate({
	   				 scrollLeft: 0
				}, 800);
			}					

		}

		else if (scroll > 1150 && scroll < 2300) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';

			if(es_firefox){
				$(window).scrollLeft(1150);
			}
			else {
				$('html,body').stop(true, true).animate({
	   				 scrollLeft: 1150
				}, 800);
			}						


		}

		else if (scroll > 2300 && scroll < 3450) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	

			if(es_firefox){
				$(window).scrollLeft(2300);
			}
			else {
				$('html,body').stop(true, true).animate({
	   				 scrollLeft: 2300
				}, 800);
			}

		}

		else if (scroll > 3450 && scroll < 4800) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	

			if(es_firefox){
				$(window).scrollLeft(3450);
			}
			else {
				$('html,body').stop(true, true).animate({
	   				 scrollLeft: 3450
				}, 800);
			}					

		}


	}

// 	// RESOLUCION DE 1600 X 900

	if(screen.availHeight > 799 && screen.availWidth > 1499){

		if(scroll==1670){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';

			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$(window).animate({
	   				 scrollLeft: 0
				}, 800);
			}


		}


		if(scroll==3000){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(1670);
			}
			else {
				$(window).animate({
	   				 scrollLeft: 1670
				}, 800);
			}			

		}

		if(scroll==4550){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(3000);
			}
			else {
				$('html,body').stop(true, true).animate({
	   				 scrollLeft: 3000
				}, 800);
			}			

		}

		else if (scroll > 0 && scroll < 1670) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';
			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 0
				}, 800);
			}						

		}

		else if (scroll > 1670 && scroll < 3000) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(1670);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1670
				}, 800);
			}				
		}

		else if (scroll > 3000 && scroll < 4550) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(3000);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 3000
				}, 800);
			}				

		}

		else if (scroll > 4550 && scroll < 6500) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'none';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';

			if(es_firefox){
				$(window).scrollLeft(4550);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 4550
				}, 800);
			}						

		}


	} // fin de resolución


// 	// RESOLUCION DE 1440 X 900

	if((screen.availHeight > 799 && screen.availWidth > 1400) 
		&& (screen.availHeight < 1025 && screen.availWidth < 1450)){

		if(scroll==1680){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';	
			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 0
				}, 800);
			}						

		}


		if(scroll==3100){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';

			if(es_firefox){
				$(window).scrollLeft(1680);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1680
				}, 800);
			}							


		}

		if(scroll==4550){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(3100);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 3100
				}, 800);
			}					

		}

		else if (scroll > 0 && scroll < 1680) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';
			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 0
				}, 800);
			}							

		}

		else if (scroll > 1680 && scroll < 3100) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(1680);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1680
				}, 800);
			}						

		}

		else if (scroll > 3100 && scroll < 4550) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	

			if(es_firefox){
				$(window).scrollLeft(3100);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 3100
				}, 800);
			}					

		}

		else if (scroll > 4550 && scroll < 6500) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';

			if(es_firefox){
				$(window).scrollLeft(4550);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 4550
				}, 800);
			}					

		}


	} // fin de resolución



	// RESOLUCION DE 1280 X 900 

	if((screen.availHeight > 629 && screen.availWidth > 1024) 
		&& (screen.availHeight < 901 && screen.availWidth < 1301)){

		if(scroll==1150){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';
			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 0
				}, 800);
			}			

		}

		if(scroll==2300){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(1150);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1150
				}, 800);
			}					

		}

		if(scroll==3450){ 
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	

			if(es_firefox){
				$(window).scrollLeft(2300);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 2300
				}, 800);
			}					
	  
		}

		else if (scroll > 0 && scroll < 1150) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';
			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 0
				}, 800);
			}						
	        
		}

		else if (scroll > 1150 && scroll < 2300) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(1150);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1150
				}, 800);
			}						
	      
		}

		else if (scroll > 2300 && scroll < 3450) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(2300);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 2300
				}, 800);
			}					
	       
		}

		else if (scroll > 2800) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(3480);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 3480
				}, 800);
			}					
	       
		}

	} // fin de resolución

	//resolución de 1280x1024

	if((screen.availHeight > 901 && screen.availWidth > 1024) 
		&& (screen.availHeight < 1025 && screen.availWidth < 1301)){


		if(scroll==1780){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';
			if(es_firefox){
				$(window).scrollLeft(100);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 100
				}, 800);
			}			
	     
		}


		if(scroll==3100){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(1780);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1780
				}, 800);
			}					
	     
		}

		if(scroll==4550){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(3100);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 3100
				}, 800);
			}						
	       
		}

		else if (scroll > 100 && scroll < 1780) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';
			if(es_firefox){
				$(window).scrollLeft(100);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 100
				}, 800);
			}						
	       
		}

		else if (scroll > 1780 && scroll < 3100) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(1780);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1780
				}, 800);
			}						
	      
		}

		else if (scroll > 3100 && scroll < 4550) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(3100);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 3100
				}, 800);
			}					
	       
		}

		else if (scroll > 4550 && scroll < 6500) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(4550);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 4550
				}, 800);
			}						
	     
		}


	} // fin de resolución


	// RESOLUCION DE 1000 X 800 

	if( (screen.availHeight > 599 && screen.availWidth < 1025) && 
	    (screen.availHeight < 801 && screen.availWidth > 900) ){

		if(scroll==950){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';
			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 0
				}, 800);
			}						
	        
		}

		if(scroll==1800){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(950);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 950
				}, 800);
			}						
	        
		}

		if(scroll==3850){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(2950);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 2950
				}, 800);
			}						
	        
		}

		if(scroll==2950){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(1800);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1800
				}, 800);
			}					
	        
		}

		else if (scroll > 0 && scroll < 950) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'none';
			if(es_firefox){
				$(window).scrollLeft(0);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 0
				}, 800);
			}						
	        
		}

		else if (scroll > 950 && scroll < 1800) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(950);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 950
				}, 800);
			}					
	        
		}

		else if (scroll > 1800 && scroll < 2800) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(1800);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1800
				}, 800);
			}						
	        
		}

		else if (scroll > 2700 && scroll < 3850) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(1800);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1800
				}, 800);
			}					
	        
		}

	} // fin de resolución

	
}




// //-----------------------------------------------------------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------------------------------

 function scrollright(){

 		var scroll = $(window).scrollLeft();


 	//RESOLUCIÓN DE 1300 X 700

	if(screen.availHeight > 540 && screen.availHeight < 1025 
		&& screen.availWidth < 1401 && screen.availWidth > 1300){

		if(scroll < 1150){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(1150);
			}
			else {
				$('html, body').animate({
	   				 left: 1150
				}, 800);
			}
	        
		}
		else if (scroll == 1150 || (scroll > 1150 && scroll < 2300) ) {			
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(2300);
			}
			else {
				$('html, body').animate({
	   				 left: 2300
				}, 800);
			}
	        
		}

		else if (scroll == 2300 || (scroll > 2300 && scroll < 3450)) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'none';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(3450);
			}
			else {
				$('html, body').animate({
	   				 left: 3450
				}, 800);
			}					
	        
		}

		else if (scroll == 3450 || (scroll > 3450 && scroll < 4800)) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'none';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(4800);
			}
			else {
				$('html, body').animate({
	   				 left: 4800
				}, 800);
			}					
	        
		}

	}

	//RESOLUCIÓN DE 1600 X 900

	if(screen.availHeight > 849 && screen.availWidth > 1499){


		if(scroll < 1670){
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';				
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(1670);
			}
			else {
				$('html, body').animate({
	   				 left: 1670
				}, 800);
			}						
	        
		}

		else if (scroll == 1670 || (scroll > 1670 && scroll < 3000) ) {
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';				
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(3000);
			}
			else {
				$('html,body').animate({
	   				 left: 3000
				}, 800);
			}						
	        
		}

		else if (scroll == 3000 || (scroll > 3000 && scroll < 4550)) {
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';				
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'none';
			if(es_firefox){
				$(window).scrollLeft(4550);
			}
			else {
				$('html,body').animate({
	   				 left: 4550
				}, 800);
			}					
	        
		}


	}

	// RESOLUCION DE 1440 X 900 (800)

	if((screen.availHeight > 799 && screen.availWidth > 1400) 
		&& (screen.availHeight < 1025 && screen.availWidth < 1450)){

		if(scroll < 1680){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(1680);
			}
			else {
				$('html, body').animate({
	   				 scrollLeft: 1680
				}, 800);
			}						
	        
		}
		else if (scroll == 1680 || (scroll > 1680 && scroll < 3100) ) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(3100);
			}
			else {
				$('html, body').animate({
	   				 scrollLeft: 3100
				}, 800);
			}						
	        
		}

		else if (scroll == 3100 || (scroll > 3100 && scroll < 4550)) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'none';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(4550);
			}
			else {
				$('html, body').animate({
	   				 scrollLeft: 4550
				}, 800);
			}						
	        
		}


	}


	//SCROLLS DE 1280 X 800

	if((screen.availHeight > 759 && screen.availWidth > 1199) 
		&& (screen.availHeight < 901 && screen.availWidth < 1281)){

		if(scroll < 1150){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(1150);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1150
				}, 800);
			}					
	        
		}
		else if (scroll == 1150 || (scroll > 1150 && scroll < 2300) ) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(2300);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 2300
				}, 800);
			}						
	        
		}

		else if (scroll == 2300 || (scroll > 2300 && scroll < 3480)) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(3480);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 3480
				}, 800);
			}					
	        
		}

		else if (scroll == 3480 || (scroll > 3480 && scroll < 4800)) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'none';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(4800);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 4800
				}, 800);
			}						
	        
		}
	}

	//Resolución de 1280x1024

	if((screen.availHeight > 901 && screen.availWidth > 1199) 
		&& (screen.availHeight < 1025 && screen.availWidth < 1281)){

		if(scroll < 1780){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(1780);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1780
				}, 800);
			}						
	        
		}
		else if (scroll == 1780 || (scroll > 1780 && scroll < 3100) ) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(3100);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 3100
				}, 800);
			}						
	        
		}

		else if (scroll == 3100 || (scroll > 3100 && scroll < 4550)) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'none';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(4550);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 4550
				}, 800);
			}					
	        
		}


	}

		
	// RESOLUCION 1000 X 800	

	if( (screen.availHeight > 599 && screen.availWidth < 1025) && 
	    (screen.availHeight < 801 && screen.availWidth > 900) ){


		if(scroll < 950){
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';	
			if(es_firefox){
				$(window).scrollLeft(950);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 950
				}, 800);
			}					
	        
		}

		else if (scroll == 950 || (scroll > 950 && scroll < 1800) ) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'block';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(1800);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 1800
				}, 800);
			}						
	        
		}

		else if (scroll == 1800 || (scroll > 1800 && scroll < 2800)) {
			var barra1= document.getElementById('barraRight');
			barra1.style.display = 'none';			
			var barra1= document.getElementById('barraLeft');
			barra1.style.display = 'block';
			if(es_firefox){
				$(window).scrollLeft(2800);
			}
			else {
				$('html,body').animate({
	   				 scrollLeft: 2800
				}, 800);
			}						
        
		}

	}

}// FIN DE LA FUNCIÓN



function scrollb(id){


	// RESOLUCION DE 1300 X 700	

	if(screen.availHeight > 549 && screen.availHeight < 1024 
		&& screen.availWidth < 1401 && screen.availWidth > 1300){

		if(document.getElementById(id).style.backgroundColor== "red"){

			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';	
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}								

						var llavito= setTimeout(function(){
							//movAndroide.play();	 
							apareceLlavito_720("llavi0");
						}, 1000);

			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';				
					elementoDesaparece("text2", 400);
					elementoDesaparece("text3", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(1702);
					elementoAparece("text1", 600);
					if(es_firefox){
						$(window).scrollLeft(1150);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1150
						}, 800);
					}								

						var llavito= setTimeout(function(){ 
							//movAndroide.play();	
							apareceLlavito_720("llavi2");
						}, 1000);

			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text2", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(2850);
					elementoAparece("text3", 600);
					if(es_firefox){
						$(window).scrollLeft(2300);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 2300
						}, 800);
					}								

						var llavito= setTimeout(function(){ 
							//movAndroide.play();	
							apareceLlavito_720("llavi3");
						}, 1000);

			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text3", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(4005);
					elementoAparece("text2", 600);
					if(es_firefox){
						$(window).scrollLeft(3450);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3450
						}, 800);
					}			

					var llavito5= document.getElementById("llavi5");

					if(llavito5.style.top != 1200+"px"){
						//movAndroide.play();	
						desapareceLlavito_720("llavi5");

						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_720("llavi4");
						}, 2000);
					}
					else {
						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_720("llavi4");
						}, 1000);						
					}

			        
		        break;

			}
		} // FIN DEL IF DEL SWITCH
		else {
			
			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}													
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';
					if(es_firefox){
						$(window).scrollLeft(1150);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1150
						}, 800);
					}													
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	
					if(es_firefox){
						$(window).scrollLeft(2300);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 2300
						}, 800);
					}										        
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';
					if(es_firefox){
						$(window).scrollLeft(3450);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3450
						}, 800);
					}						        
			        
		        break;

			}
		}


	}


	// RESOLUCION DE 1600 X 900

	if(screen.availHeight > 799 && screen.availWidth > 1499){

		if(document.getElementById(id).style.backgroundColor== "red"){

			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}									

					var llavito1= setTimeout(function(){
						//movAndroide.play();	
						apareceLlavito_900("llavi0");
					}, 1000);
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';					
					elementoDesaparece("text2", 400);
					elementoDesaparece("text3", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(2533);
					elementoAparece("text1", 600);
					if(es_firefox){
						$(window).scrollLeft(1670);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1670
						}, 800);
					}								
					var llavito2= setTimeout(function(){
						//movAndroide.play();	
						apareceLlavito_900("llavi2");
					}, 1000);
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text2", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(3664);
					elementoAparece("text3", 600);
					if(es_firefox){
						$(window).scrollLeft(3000);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3000
						}, 800);
					}								
					var llavito3= setTimeout(function(){
						//movAndroide.play();	
						apareceLlavito_900("llavi3");
					}, 1000);
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text3", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(5230);
					elementoAparece("text2", 600);
					if(es_firefox){
						$(window).scrollLeft(4550);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 4550
						}, 800);
					}								

					var llavito5= document.getElementById("llavi5");

					if(llavito5.style.top != 1168+"px"){
						//movAndroide.play();	
						desapareceLlavito_900("llavi5");

						var llavito4= setTimeout(function(){
							//ovAndroide.play();	
							apareceLlavito_900("llavi4");
						}, 2000);
					}
					else {
						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_900("llavi4");
						}, 1000);						
					}

		        break;

			}
		}
		else {
			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}													
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	
					if(es_firefox){
						$(window).scrollLeft(1670);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1670
						}, 800);
					}									
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';
					if(es_firefox){
						$(window).scrollLeft(3000);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3000
						}, 800);
					}								        
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	
					if(es_firefox){
						$(window).scrollLeft(4550);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 4550
						}, 800);
					}							        
			        
		        break;

			}// fin del switch
		} // Fin del else 

	} // FIN DE RESOLUCIÓN


	// RESOLUCION DE 1440 X 900

	if((screen.availHeight > 799 && screen.availWidth > 1400) 
		&& (screen.availHeight < 1025 && screen.availWidth < 1460)){

		if(document.getElementById(id).style.backgroundColor== "red"){

			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';	
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}									
					var llavito1= setTimeout(function(){
						//movAndroide.play();	
						apareceLlavito_900("llavi0");
					}, 1000);
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';					
					elementoDesaparece("text2", 400);
					elementoDesaparece("text3", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(2255);
					elementoAparece("text1", 600);
					if(es_firefox){
						$(window).scrollLeft(1680);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1680
						}, 800);
					}					
					var llavito2= setTimeout(function(){
						//movAndroide.play();	
						apareceLlavito_900("llavi2");
					}, 1000);
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text2", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(3680);
					elementoAparece("text3", 600);
					if(es_firefox){
						$(window).scrollLeft(3100);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3100
						}, 800);
					}					
					var llavito3= setTimeout(function(){
						//movAndroide.play();	
						apareceLlavito_900("llavi3");
					}, 1000);
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text3", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(5140);
					elementoAparece("text2", 600);
					if(es_firefox){
						$(window).scrollLeft(4550);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 4550
						}, 800);
					}					

					var llavito5= document.getElementById("llavi5");

					if(llavito5.style.top != 1168+"px"){
						//movAndroide.play();	
						desapareceLlavito_900("llavi5");

						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_900("llavi4");
						}, 2000);
					}
					else {
						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_900("llavi4");
						}, 1000);						
					}					
			        
		        break;

			}
		}
		else {
			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}										
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';
					if(es_firefox){
						$(window).scrollLeft(1670);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1670
						}, 800);
					}										
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	
					if(es_firefox){
						$(window).scrollLeft(3100);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3100
						}, 800);
					}		        
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';
					if(es_firefox){
						$(window).scrollLeft(4500);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 4500
						}, 800);
					}								        

					var llavito5= document.getElementById("llavi5");

					if(llavito5.style.top != 1200+"px"){
						//movAndroide.play();	
						desapareceLlavito_720("llavi5");

						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_720("llavi4");
						}, 2000);
					}
					else {
						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_720("llavi4");
						}, 1000);						
					}
			        
		        break;

			}// fin del switch
		} // Fin del else 


	} // FIN DE LA RESOLUCIÓN


	// RESOLUCION DE 1280 X 900 

	if((screen.availHeight > 650 && screen.availWidth > 1199) 
		&& (screen.availHeight < 901 && screen.availWidth < 1281)){

		if(document.getElementById(id).style.backgroundColor== "red"){
			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';	
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}									

						var llavito= setTimeout(function(){ 
							//movAndroide.play();	
							apareceLlavito_720("llavi0");
						}, 2500);

			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';					
					elementoDesaparece("text2", 400);
					elementoDesaparece("text3", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(1383);
					elementoAparece("text1", 600);
					if(es_firefox){
						$(window).scrollLeft(1150);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1150
						}, 800);
					}					

						var llavito= setTimeout(function(){ 
							//movAndroide.play();	
							apareceLlavito_720("llavi2");
						}, 2500);

			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text2", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(2552);
					elementoAparece("text3", 600);
					if(es_firefox){
						$(window).scrollLeft(2300);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 2300
						}, 800);
					}					

						var llavito= setTimeout(function(){ 
							//movAndroide.play();	
							apareceLlavito_720("llavi3");
						}, 2500);

			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text3", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(3814);
					elementoAparece("text2", 600);
					if(es_firefox){
						$(window).scrollLeft(3480);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3480
						}, 800);
					}					

					var llavito5= document.getElementById("llavi5");

					if(llavito5.style.top != 1200+"px"){
						//movAndroide.play();	
						desapareceLlavito_720("llavi5");

						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_720("llavi4");
						}, 2000);
					}
					else {
						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_720("llavi4");
						}, 1000);						
					}

			        
		        break;

			}// fin del switch
		} //fin del if
		else {

			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}										
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	
					if(es_firefox){
						$(window).scrollLeft(1150);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1150
						}, 800);
					}									
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	
					if(es_firefox){
						$(window).scrollLeft(2300);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 2300
						}, 800);
					}							        
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';
					if(es_firefox){
						$(window).scrollLeft(3450);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3450
						}, 800);
					}			        
			        
		        break;

			}// fin del switch
		}// fin del else
	}// FIN DE LA RESOLUCIÓN


	// resolución de 1280x1024

	if((screen.availHeight > 901 && screen.availWidth > 1199) 
			&& (screen.availHeight < 1025 && screen.availWidth < 1281)){

		if(document.getElementById(id).style.backgroundColor== "red"){

			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';
					if(es_firefox){
						$(window).scrollLeft(100);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 100
						}, 800);
					}										
					var llavito1= setTimeout(function(){
						//movAndroide.play();	
						apareceLlavito_900("llavi0");
					}, 1000);
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	
					elementoDesaparece("text2", 400);
					elementoDesaparece("text3", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(2255);
					elementoAparece("text1", 600);
					if(es_firefox){
						$(window).scrollLeft(1780);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1780
						}, 800);
					}					
					var llavito2= setTimeout(function(){
						//movAndroide.play();	
						apareceLlavito_900("llavi2");
					}, 1000);
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text2", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(3680);
					elementoAparece("text3", 600);
					if(es_firefox){
						$(window).scrollLeft(3100);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3100
						}, 800);
					}					
					var llavito3= setTimeout(function(){
						//movAndroide.play();	
						apareceLlavito_900("llavi3");
					}, 1000);
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text3", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(5070);
					elementoAparece("text2", 600);
					if(es_firefox){
						$(window).scrollLeft(4550);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 4550
						}, 800);
					}					

					var llavito5= document.getElementById("llavi5");

					if(llavito5.style.top != 1200+"px"){
						//movAndroide.play();	
						desapareceLlavito_720("llavi5");

						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_720("llavi4");
						}, 2000);
					}
					else {
						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_720("llavi4");
						}, 1000);						
					}
			        
		        break;

			}
		}
		else {
			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';
					if(es_firefox){
						$(window).scrollLeft(100);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 100
						}, 800);
					}										
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	

					if(es_firefox){
						$(window).scrollLeft(1770);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1770
						}, 800);
					}									
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	
					if(es_firefox){
						$(window).scrollLeft(3100);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 3100
						}, 800);
					}							        
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';
					if(es_firefox){
						$(window).scrollLeft(4550);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 4550
						}, 800);
					}								        
			        
		        break;

			}// fin del switch
		} // Fin del else 

	}

	// RESOLUCION DE 1000 X 800 

	if( (screen.availHeight > 599 && screen.availWidth < 1025) && 
	    (screen.availHeight < 801 && screen.availWidth > 900) ){

		if(document.getElementById(id).style.backgroundColor== "red"){

			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}										

						var llavito= setTimeout(function(){ 
							//movAndroide.play();	
							apareceLlavito_720("llavi0");
						}, 1500);
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';					
					elementoDesaparece("text2", 400);
					elementoDesaparece("text3", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(1100);
					elementoAparece("text1", 600);
					if(es_firefox){
						$(window).scrollLeft(950);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 950
						}, 800);
					}					

						var llavito= setTimeout(function(){ 
							//movAndroide.play();	
							apareceLlavito_720("llavi2");
						}, 1500);
					
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text2", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(2066);
					elementoAparece("text3", 600);
					if(es_firefox){
						$(window).scrollLeft(1800);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1800
						}, 800);
					}					

						var llavito= setTimeout(function(){ 
							//movAndroide.play();	
							apareceLlavito_720("llavi3");
						}, 1500);
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';			        
		        	elementoDesaparece("text3", 400);
					elementoDesaparece("text1", 400);
					elementoDesaparece("text9", 400);
					rielSuperiorMovHorizontal_720(3000);
					elementoAparece("text2", 600);
					if(es_firefox){
						$(window).scrollLeft(2800);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 2800
						}, 800);
					}					

					var llavito5= document.getElementById("llavi5");

					if(llavito5.style.top != 1100+"px"){
						//movAndroide.play();	
						desapareceLlavito_800("llavi5");

						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_800("llavi4");
						}, 2000);
					}
					else {
						var llavito4= setTimeout(function(){
							//movAndroide.play();	
							apareceLlavito_800("llavi4");
						}, 1000);						
					}
			        
		        break;

			}//fin del switch
		}// fin del if
		else {

			switch(id){

				case 1:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'none';
					if(es_firefox){
						$(window).scrollLeft(0);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 0
						}, 800);
					}										
			        
				break;

				case 2:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';	
					if(es_firefox){
						$(window).scrollLeft(950);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 950
						}, 800);
					}									
			        
		        break;

		        case 3:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'block';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';
					if(es_firefox){
						$(window).scrollLeft(1800);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 1800
						}, 800);
					}								        
			        
		        break;

		        case 4:
					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';			
					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';
					if(es_firefox){
						$(window).scrollLeft(2800);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: 2800
						}, 800);
					}								        
			        
		        break;

		        case 5:
					$(window).animate({
		   				 scrollLeft: 3850
					}, 1000);
			        
		        break;
			}//fin del switch
		}// fin del else
	}// FIN DE RESOLUCIÓN



}// FIN DEL SCROLL DE BOLITAS

