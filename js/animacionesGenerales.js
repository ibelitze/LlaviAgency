	
	
	/*
	
	ANIMACIONES VARIADAS
	ALGUNAS ESTÁN HECHAS EN JAVASCRIPT PURO Y OTRAS USAN JQUERY
	ES NECESARIO INCLUIR LA LIBRERÍA DE JQUERY EN EL INDEX

	*/

	// ------------------------- FUNCIÓN JQUERY PARA ANIMATE.CSS ------------------------------ //


	$.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	    }
	});



	// $('#yourElement').animateCss('bounce');



	// -------------------------- función de inicio ----------------------------- //

		function inicio(){

			if(screen.availHeight > screen.availWidth){

				$('#voltee').show();
				$('#equis0').hide();

				var voltee = document.getElementById("voltee");
		        voltee.style.opacity= "1";
		        voltee.style.zIndex= "100";
			}
			else {

				var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
				

				if((screen.availHeight > 900 && screen.availWidth > 1024) 
					&& (screen.availHeight < 1081 && screen.availWidth < 1301)){

				
					if(es_firefox){
						$(window).scrollLeft(130);
						$(window).scrollTop(0);
					}
					else {
						$('html,body').animate({
				   			scrollLeft: 130,
			    			scrollTop: 0
						}, 100);
					}	
				}
				else {

					if(es_firefox){
						$(window).scrollLeft(0);
						$(window).scrollTop(0);
					}
					else {
						$('html,body').animate({
				   			scrollLeft: 0,
			    			scrollTop: 0
						}, 100);
					}	
								
				} // FIN DE INICIO


		        /* Esto esconde la pantalla de carga una vez que haya cargado el body */
		        
		     	var looper = document.getElementById("looper");
			    looper.style.opacity= "0";
			    looper.style.zIndex= "1";

		        var barra1= document.getElementById('barraLeft');
				barra1.style.display = 'none';

		        // ACTIVADORES DE ANIMACIONES POR CADA RESOLUCIÓN

		        //1680x900 o 1680x1024
		        if( screen.availWidth > 1499){

		        	Animaciones900(2433, 3711, 5230, 5630, 1670, 3000, 4550);
		        }

		        //1440x1024  o 1440x900
		        else if( screen.availWidth > 1400 && screen.availWidth < 1491){

		        	Animaciones900(2255, 3680, 5140, 5358, 1680, 3100, 4550);
		        }

		        //1360x760 o 1366x720
		        else if ( screen.availWidth < 1401 && screen.availWidth > 1300 ){

		        	Animaciones720(1702, 2850, 4005, 4369, 1150, 2300, 3450);
		        }

		        //1280x900
		        else if( screen.availWidth > 1090 && screen.availHeight < 901 && screen.availWidth < 1301){

		        	Animaciones720(1678, 2823, 3977, 4369, 1150, 2300, 3450);
		        }

		        //1280x1024
		        else if((screen.availHeight > 900 && screen.availWidth > 1024) 
					&& (screen.availHeight < 1081 && screen.availWidth < 1301)){

		        	Animaciones900(2293, 3619, 5070, 5331, 1780, 3100, 4550);
		        }

		        //1000x800 o menos
		        else if( screen.availWidth < 1091 && screen.availWidth > 899 ){

		        	Animaciones800(1802, 2192, 3412, 3412, 950, 1800, 2800);
		        }

		    	// 500x800 móviles 
		        else if(screen.availHeight < 501 && screen.availWidth < 855){

		        	AnimacionesMovil(590, 914, 1400);
		        } 
		        // telefonos de menos 320 width
		        else if(screen.availHeight < 330 ){

		        	Animacionesmovil2(420, 790, 1030);
		        }


			}


			 	           	        

		}



	// -------------------------- GIRO DE TUERCAS ----------------------------- //

		var looper;
		var looper2;
		var degrees = 0;
		var degrees2 = 0;


	function rotacionNormal(el,speed){

		var elem = document.getElementById(el);

		if(navigator.userAgent.match("Chrome")){
			elem.style.WebkitTransform = "rotate("+degrees+"deg)";
		} else if(navigator.userAgent.match("Firefox")){
			elem.style.MozTransform = "rotate("+degrees+"deg)";
		} else if(navigator.userAgent.match("MSIE")){
			elem.style.msTransform = "rotate("+degrees+"deg)";
		} else if(navigator.userAgent.match("Opera")){
			elem.style.OTransform = "rotate("+degrees+"deg)";
		} else {
			elem.style.transform = "rotate("+degrees+"deg)";
		}
		looper = setTimeout('rotacionNormal(\''+el+'\','+speed+')',speed);
		degrees++;
		if(degrees > 359){
			degrees = 1;
		}
	}

	function rotacionInversa(el,speed){

		var elem = document.getElementById(el);	

		if(navigator.userAgent.match("Chrome")){
			elem.style.WebkitTransform = "rotate("+degrees2+"deg)";
		} else if(navigator.userAgent.match("Firefox")){
			elem.style.MozTransform = "rotate("+degrees2+"deg)";
		} else if(navigator.userAgent.match("MSIE")){
			elem.style.msTransform = "rotate("+degrees2+"deg)";
		} else if(navigator.userAgent.match("Opera")){
			elem.style.OTransform = "rotate("+degrees2+"deg)";
		} else {
			elem.style.transform = "rotate("+degrees2+"deg)";
		}
		looper2 = setTimeout('rotacionInversa(\''+el+'\','+speed+')',speed);
		degrees2--;
		if(degrees2 < -359){
			degrees2 = -1;
		}
	}

	function rotacionDetenerNormal(el){
		var elem = document.getElementById(el);
		clearTimeout(looper);
		degrees= 0;
	}

	function rotacionDetenerInversa(el){
		var elem = document.getElementById(el);
		clearTimeout(looper2);
		degrees2= 0;
	}

	function rotacionEstatica(el, deg){

		var elem = document.getElementById(el);

		if(navigator.userAgent.match("Chrome")){
			elem.style.WebkitTransform = "rotate("+deg+"deg)";
		} else if(navigator.userAgent.match("Firefox")){
			elem.style.MozTransform = "rotate("+deg+"deg)";
		} else if(navigator.userAgent.match("MSIE")){
			elem.style.msTransform = "rotate("+deg+"deg)";
		} else if(navigator.userAgent.match("Opera")){
			elem.style.OTransform = "rotate("+deg+"deg)";
		} else {
			elem.style.transform = "rotate("+deg+"deg)";
		}
	}




	// -------------------------- MOVIMIENTOS DE GORDITOS EN TUBERÍAS ----------------------------- //



	//Esta es la función que hace avanzar a los gorditos por las tuberías (en horizontal)
	function gorditoHorizontalAvance(el, distancia, tiempo){
		var elem = document.getElementById(el);
		elem.style.transition = "left "+ tiempo +"s ease-in-out 0s";
		elem.style.left = distancia + "px";
	}

	//Esta es la función que hace avanzar a los gorditos por las tuberías (en vertical)
	function gorditoVerticalAvance(el, distancia, tiempo){
		var elem = document.getElementById(el);
		elem.style.transition = "top "+ tiempo +"s ease-in-out 0s";
		elem.style.top = distancia + "px";
	}

	//Función que hace aparecer a los gorditos en las tuberías
	function gorditoAparecer(el){
		var elem = document.getElementById(el);
		$("#"+el).fadeIn(2000);
		elem.className += " animated bounceIn";
	}

	//Hace desaparecer a los gorditos
	function gorditoDesaparecer(el, clase){
		var elem = document.getElementById(el);
		elem.className= clase + " animated bounceOut";
		$("#"+el).fadeOut(2000);
	}

	// ANIMACIÓN DE LOS GORDITOS EN HORIZONTAL
	function gordito(ele, clas, distancia, tiempo, tiempoOut){

		gorditoAparecer(ele);
		var ejecT = setTimeout(function(){
			gorditoHorizontalAvance(ele, distancia, tiempo);
		}, 1000); 
		var ejec2 = setTimeout(function(){
			gorditoDesaparecer(ele, clas); //El primer parámetro es el id, el segundo es el nombre de la clase (lo necesito)
		}, tiempoOut);

	}

	// ANIMACIÓN DE LOS GORDITOS EN VERTICAL
	function gordito2(ele, clas, distancia, tiempo, tiempoOut){

		gorditoAparecer(ele);
		var ejecT = setTimeout(function(){
			gorditoVerticalAvance(ele, distancia, tiempo);
		}, 500); 
		var ejec2 = setTimeout(function(){
			gorditoDesaparecer(ele, clas); //El primer parámetro es el id, el segundo es el nombre de la clase (lo necesito)
		}, tiempoOut);

	}




	// -------------------------- EFECTOS GENERALES ----------------------------- //

	function darAnimacion(el, animacion){
		var elem = document.getElementById(el);
		elem.style.animation= animacion; 
	}

	function removerAnimacion(el){
		var elem = document.getElementById(el);
		elem.style.animation= ""; 
	}

	function removerClase(el, clase){
		var elem = document.getElementById(el);
		elem.className= clase;
	}

	function removerTransicion(el){
		var elem = document.getElementById(el);
		elem.style.transition= "";
	}

	function avance(el, distancia, rapidez){
		var elem = document.getElementById(el);
		elem.style.transition = "left "+ rapidez +"s ease-in-out 0s";
		elem.style.left = distancia + "px";
	}

	function avance2(el, distancia, rapidez){
		var elem = document.getElementById(el);
		elem.style.transition = "top "+ rapidez +"s ease-in-out 0s";
		elem.style.top = distancia + "px";
	}

	function moverDiagonal(el, x0, y0, x1, y1, golpesTotales, golpeActual) { 
	    var obj = document.getElementById(el); 
	    if( !golpeActual ) {
	    	golpeActual = 1; 
	    }
	    obj.style.transition = "";
	    obj.style.left = x0 + Math.round(((x1 + y0)/golpesTotales)*golpeActual) +"px"; 
	    obj.style.top = y0 + Math.round(((y1 - y0)/golpesTotales)*golpeActual) +"px"; 
	    golpeActual++; 
	    if( golpeActual <= golpesTotales ) 
	        setTimeout("moverDiagonal('"+el+"', "+x0+", "+y0+", "+x1+", "+y1+", "+golpesTotales+", "+golpeActual+")",10); 
	}

	function moverKeyframes(el, animation){
		var elem = document.getElementById(el);
		elem.style.animation= animation;
	} 
	function detenerKeyframes(el){
		var elem = document.getElementById(el);
		elem.style.animation= "";
	} 


	function elementoAparece(el, time){ //hace aparecer suavemente un elemento
		$("#"+el).fadeIn(time);
	}

	function elementoAparece2(el){ //hace un fadeIN con animate.css
		$('#'+el).addClass('animated fadeIn');
	}


	function elementoDesaparece(el, time){ //hace desaparecer suavemente un elemento
		$("#"+el).fadeOut(time);
	}

	function aparecerDesaparecer(el, time, time2, tiempoOut){  //efecto completo de aparecer y desaparecer
		elementoAparece(el, time);
		var ejec2 = setTimeout(function(){
			elementoDesaparece(el, time2); 
		}, tiempoOut);
	}

	function slideOpen(el, pixeles){
		var elem = document.getElementById(el);
		elem.style.transition = "height 0.3s linear 0s";
		elem.style.height = pixeles+"px";
	}

	function slideOpen2(el, pixeles){
		var elem = document.getElementById(el);
		elem.style.transition = "width 0.2s linear 0s";
		elem.style.width = pixeles+"px";
	}

	function slideTop(el, pixeles){
		var elem = document.getElementById(el);
		elem.style.transition = "top 0.3s linear 0s";
		elem.style.top = pixeles+"px";
	}

	function slideIn(el){
		$('#'+ el).animateCss('slideInLeft');
	}

	function slideInDown(el){
		$('#'+ el).animateCss('slideInDown');
	}

	function slideOut(el){
		$('#'+ el).animateCss('slideOutRight');
	}

	function slideOutDown(el){
		$('#'+ el).animateCss('slideOutDown');
	}

	function slideOutUp(el){
		$('#'+ el).animateCss('slideOutUp');
	}

	function rotarY(el){
		var elem = document.getElementById(el);
		elem.className+= " animated infinite flip"; //animación infinita
	}

	function swing(el){
		var elem = document.getElementById(el);
		elem.className+= " animated infinite swing"; //animación infinita
	}

	function fadeOut(el){
		var elem = document.getElementById(el);
		elem.className+= " animated infinite fadeOut"; //animación infinita
	}

	function flash(el){
		var elem = document.getElementById(el);
		elem.className+= " animated infinite flash"; //animación infinita
	}

	function tada(el){
		var elem = document.getElementById(el);
		elem.className+= " animated infinite tada"; //animación infinita
	}

	function rotateOutRight(el){
		$('#'+ el).animateCss('rotateOutUpRight');
	}


	function slideOutRight(el){
		$('#'+ el).animateCss('slideOutRight');
	}

	function rubberBand(el){
		var elem = document.getElementById(el);
		elem.className+= " animated infinite rubberBand"; //animación infinita
	}

	function pulse(el){
		var elem = document.getElementById(el);
		elem.className+= " animated infinite pulse"; //animación infinita
	}

	function zoomIn(el){
		$('#'+ el).animateCss('zoomIn');
	}

	function zoomInLeft(el){
		$('#'+ el).animateCss('zoomInLeft');
	}

	function zoomInDown(el){
		$('#'+ el).animateCss('zoomInDown');
	}

	function zoomInUp(el){
		$('#'+ el).animateCss('zoomInUp');
	}

	function zoomOutRight(el){
		$('#'+ el).animateCss('zoomOutRight');
	}

	function zoomOutDown(el){
		$('#'+ el).animateCss('zoomOutDown');
	}

	function zoomOutLeft(el){
		$('#'+ el).animateCss('zoomOutLeft');
	}

	function fadeOutRight(el){
		$('#'+ el).animateCss('fadeOutRight');
	}

	function fadeInLeft(el){
		$('#'+ el).animateCss('fadeInLeft');
	}

	function rotateOutDownRight(el){
		$('#'+ el).animateCss('rotateOutDownRight');
	}

	function rotateOutDownLeft(el){
		$('#'+ el).animateCss('rotateOutDownLeft');
	}

	function rollIn(el){
		$('#'+ el).animateCss('rollIn');
	}

	function rotateInDownLeft(el){
		$('#'+ el).animateCss('rotateInDownLeft');
	}
	function bounceInLeft(el){
		$('#'+ el).animateCss('bounceInLeft');
	}

	function bounceOutLeft(el){
		$('#'+ el).animateCss('bounceOutLeft');
	}

	function bounceInUp(el){
		$('#'+ el).animateCss('bounceInUp');
	}
	function bounceOutDown(el){
		$('#'+ el).animateCss('bounceOutDown');
	}
	function bounceOutUp(el){
		$('#'+ el).animateCss('bounceOutUp');
	}
	function rubberBand2(el){
		$('#'+ el).animateCss('rubberBand');
	}



	// -------------------------- EFECTO DE HUMOS CON REDES SOCIALES ----------------------------- //

	//efectos para redes sociales (que aparecen en el humo)
	function aparecerDesaparecerRed(el, aparece){
		var elem = document.getElementById(el);
		elementoAparece(el, aparece);
		elem.className += " animated infinite flipInY";
	}
			
	var humo1 = function(){

		elementoAparece("humo2", 2000);

		var red1 = setTimeout(function(){
			aparecerDesaparecerRed("gplus", 3000);
		}, 1000);
		var red2 = setTimeout(function(){
			aparecerDesaparecerRed("in", 3000);
		}, 1600);
		var red3 = setTimeout(function(){
			aparecerDesaparecerRed("twitter", 3000);
		}, 2100);
		var red4 = setTimeout(function(){
			aparecerDesaparecerRed("facebook2", 3000);
		}, 3000);

	}

	var humo2 = function(){

		elementoAparece("humo3", 1000);
		aparecerDesaparecerRed("youtube", 3000);

		var red2 = setTimeout(function(){
			aparecerDesaparecerRed("in2", 3000);
		}, 1300);
		var red3 = setTimeout(function(){
			aparecerDesaparecerRed("instagram", 3000);
		}, 1800);
		var red4 = setTimeout(function(){
			aparecerDesaparecerRed("twitter2", 3000);
		}, 2200);

	}

	var humo3 = function(){

		elementoAparece("humo4", 1000);
		aparecerDesaparecerRed("facebook", 3000, 3000);

		var red2 = setTimeout(function(){
			aparecerDesaparecerRed("bb", 3000, 3000);
		}, 1500);
	}

	function humo567(){
		var humo1 = setTimeout(function(){
			elementoAparece("humo5", 400);
			fadeOut("humo5");
		}, 200);
		var humo2 = setTimeout(function(){
			elementoAparece("humo6", 400);
			fadeOut("humo6");
		}, 2600);
		var humo3 = setTimeout(function(){
			elementoAparece("humo7", 400);
			fadeOut("humo7");
		}, 3600);
	}


	// -------------------------- MAQUINA AMARILLA QUE TIEMBLA ----------------------------- //

	function tiembla(el){
		var elem = document.getElementById(el);
		elem.className+= " animated shake";
	}


	// -------------------------- ANIMACIÓN DE ELEMENTO QUE SALE DE UNA MÁQUINA ----------------------------- //


	function carrito(el, distancia, rapidez){
		var esperar2= setTimeout(function(){
			avance(el, distancia, rapidez); //reutilizando una animación
		}, 200);
		
	}




