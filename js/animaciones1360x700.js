

	// ESTAS SON LAS ANIMACIONES PARA UNA RESOLUCION DE 1366 X 760

	// SONIDOS

	var movAndroide = document.getElementById('movAndroide');
	var primeraMaquina1 = document.getElementById('primeraMaquina1');
	var carpeta = document.getElementById('carpeta');
	var segundaMaquina = document.getElementById('segundaMaquina');
	var ideasFlotando = document.getElementById('ideasFlotando');
	var logoAzul = document.getElementById('logoA');
	var g1 = document.getElementById('g1');
	var g2 = document.getElementById('g2');
	var giroManilla = document.getElementById('giroManilla');
	var primeraMaquina2 = document.getElementById('primeraMaquina2');

	var gan1 = document.getElementById('gan1');
	var gan2 = document.getElementById('gan2');
	var gan3 = document.getElementById('gan3');
	var gan4 = document.getElementById('gan4');

	var bombillo1 = document.getElementById('bombillo1');
	var carril1 = document.getElementById('carril1');
	var P2Maquina1 = document.getElementById('P2Maquina1');	
	var redes = document.getElementById('redes');

	var carril2 = document.getElementById('carril2');
	var gota1 = document.getElementById('gota1');
	var maquinaTubo = document.getElementById('maquinaTubo');
	var planeta = document.getElementById('planeta');
	var transformador1 = document.getElementById('transformador1');

	var caeHoja = document.getElementById('caeHoja');
	var cajaMovCompleto = document.getElementById('cajaMovCompleto');
	var correo1 = document.getElementById('correo1');
	var cajaMov1 = document.getElementById('cajaMov1');

	var palancaFinal = document.getElementById('palancaFinal');
	var penultimaMaq = document.getElementById('penultimaMaq');
	var productoFinal1 = document.getElementById('productoFinal1');



		// -------------------------- ENTRADAS DE LLAVITO ----------------------------- //

		// ---Primera entrada a dejar la carpeta--- //

		function entradaLlavito1_720(){

				var llaviAnimacion1 = setTimeout(function(){
				 		avance("llavi1", 49, 1.5);
				 		// movAndroide.play();		
				 	var dialogo1 = setTimeout(function(){ //aparece cuadro de diálogo	
				 		elementoAparece("dialogo1", 300)
						slideIn("dialogo1");
					}, 2000);
				}, 2000);

		} //FINAL entradaLlavito1	 	


		function entradaLlavito2_720(){

			var llavito1 = setTimeout(function(){ //flota hasta quedar encima de la máquina

				elementoDesaparece("dialogo1", 300);

				var flotar = setTimeout(function(){ //flota hasta quedar encima de la máquina
					avance("llavi1", 210, 1); 
				}, 1000);

			 	var echarCarpeta = setTimeout(function(){ //rota la carpeta
			 		removerTransicion("llavi1");
			 		rotacionEstatica("movMano", 180);
			 	}, 2000);

			 	var echarCarpeta1 = setTimeout(function(){ //la deja caer
			 		avance2("movMano", 85, 0.8);
			 	}, 3000);

			 	var echarCarpeta2 = setTimeout(function(){ //la carpeta cae en la máquina
			 		avance2("carpeta1", -90, 0.5);
			 	}, 4200);

			 	var flotar = setTimeout(function(){ //flota hasta quedar lejos de la primera máquina
					avance("llavi1", 30, 2); 
					elementoDesaparece("carpeta1", 400);
				}, 6000);
			 	var echarCarpeta3 = setTimeout(function(){ //la deja caer
			 		elementoDesaparece("manollavi", 200);
			 		elementoAparece("cuerpo", 200);
			 		elementoAparece("cabeza", 200);
			 		elementoDesaparece("llavito1", 300);
			 		elementoDesaparece("dedosllavi", 300);
			 		// elementoDesaparece("dedosllavi", 200);
			 	}, 8000);
				var flotar = setTimeout(function(){ //La cabeza de llavito mira el proceso de las máquinas
					rotacionEstatica("cabeza", 19); 
				}, 11000);
				var flotar = setTimeout(function(){ //sigue con la mirada el proceso
					rotacionEstatica("cabeza", -10); 
				}, 13000);
			 	var eliminarLlavi = setTimeout(function(){ // Llavito desaparece
			 		avance("llavi1", -200, 1.5);
			 	}, 17000);	
			 	
			}, 50);

		}// fin entrada de llavito 2


		// ---Segunda entrada con la bienvenida--- //

		// El condicional es porque algunas veces usaremos la función con el parámetro px, y otras veces no
		// Cuando se usa la función debemos saber si el px es nulo o mayor a 0 para saber cómo trabajar 
		function apareceLlavito_720(id, px){
			var llavi2= setTimeout(function(){
					avance2(id, 420, 1);
			}, 100);
			if (px != null || px > 0){
				var llavi2= setTimeout(function(){
						avance2(id, px, 1);
				}, 100);
			}
		}


		function desapareceLlavito_720(id){

			var llavi2= setTimeout(function(){
			 	avance2(id, 1200, 1.3);
			}, 100);
			
		}




		// -------------------------- MOVIMIENTOS MÁQUINA DE RIEL SUPERIOR ----------------------------- //


		function rielSuperiorMov1_720(){

			var riel1= setTimeout(function(){ // La máquina comienza a actuar

				avance("maquinaRiel", 855, 0.4);
	
			 	var mov1= setTimeout(function(){     // aparece la cuerda
			 		gan1.play();
					slideOpen("cuerda", 244);	
					avance2("finalCuerda", 271);
					avance2("gancho1", 300);
					avance2("gancho2", 300);
				}, 1000);
				var mov3= setTimeout(function(){     // los ganchos se mueven
					avance("gancho1", 69, 0.9);
					avance("gancho2", 120, 0.9);
				}, 1800);
				var sonido1 = setTimeout(function(){
					gan2.play();
				}, 1800);
				var mov4= setTimeout(function(){  // los ganchos se abren (rotan)
					rotacionEstatica("gancho1", 17);
					rotacionEstatica("gancho2", -17);	
				}, 2000);
				var mov5= setTimeout(function(){  // bajamos la cuerda con los ganchos para que agarre el bombillo
					slideOpen("cuerda", 300);
					slideTop("finalCuerda", 339);
					slideTop("gancho1", 367);
					slideTop("gancho2", 367);
				}, 2500);
				var mov6= setTimeout(function(){  // subimos la cuerda con el bombillo agarrado
					slideOpen("cuerda", 83);
					slideTop("finalCuerda", 112);
					slideTop("gancho1", 147);
					slideTop("gancho2", 147);
					slideTop("bombillo", -156);
					gan3.play();
				}, 3000);
			 }, 400);

		} //FINAL rielSuperior

		function rielSuperiorMov2_720(){

			var mov7= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					avance("maquinaRiel", 1403, 0.9);
					avance("bombillo", 783, 0.9);
				}, 400);

			var movr= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					gan4.play();
			}, 500);

		}

		function rielSuperiorMovHorizontal_720(distancia){
			var mov7= setTimeout(function(){
					avance("maquinaRiel", distancia, 0.9);
				}, 400);

		}

		function rielsuperiorMov3_720(){

				var mov8= setTimeout(function(){  // abrimos los ganchos
					rotacionEstatica("gancho1", 23);
					rotacionEstatica("gancho2", -23);
				}, 500);

				var mov9= setTimeout(function(){  // el bombillo cae
					slideTop("bombillo", -123);
				}, 700);

				var mov9= setTimeout(function(){  // el bombillo suena al caer
					bombillo1.play();
				}, 900);

				var mov10= setTimeout(function(){  // el bombillo desaparece dentro de la máquina
					slideOutDown("bombillo");
					elementoDesaparece("bombillo", 400);
				}, 1000);
				var sonido1 = setTimeout(function(){
					gan3.play();
				}, 1600);
				var mov10= setTimeout(function(){  // el bombillo desaparece dentro de la máquina
					slideOpen("cuerda", 20);
					avance2("finalCuerda", 45);
					avance2("gancho1", 49);
					avance2("gancho2", 49);
				}, 1700);
		}





		// -------------------------- EFECTOS TUERCAS QUE GIRAN ----------------------------- //


		function tuercaMaquina1_720(){
			rotacionNormal("tuerca5", 20);
			rotacionInversa("tuerca6", 10);
		}


		function tuercaMaquina2_720(){
			rotacionInversa("tuerca17", 10);
		}


		function tuercaMaquina3_720(){
			rotacionInversa("tuerca19", 40);
			rotacionInversa("tuerca20", 50);
		}


		function tuercaMaquina4_720(){
			rotacionInversa("tuerca18", 10);
		}



		// -------------------------- MÁQUINA QUE TIEMBLA ----------------------------- //


		function tiemblaMaquina_720(){
			tiembla("maquinaAmarilla");
		}
		 

		// -------------------------- EFECTOS DE GORDITOS EN TUBERÍAS ----------------------------- //

		//los parámetros corresponden a:  
		//id, clase, a donde debe llegar (left en pixeles), tiempo de recorrido
		//y el tiempo en que debe desaparecer (3000 son 3 segundos, por ejemplo).

		function gordito1_720() { gordito("gordito1", "gordito1", 768, 1, 1300); }
		function gordito2_720() { gordito("gordito2", "gordito2", 2042, 2, 3300); }

		function gordito3_720() { 

			if((screen.availHeight > 629 && screen.availWidth > 1024) 
				&& (screen.availHeight < 901 && screen.availWidth < 1301)){
				gordito("gordito3", "gordito3", 3652, 1, 2000); 
			}
			if (screen.availHeight > 550 && screen.availHeight < 901 
				&& screen.availWidth < 1401 && screen.availWidth > 1300){
				gordito("gordito3", "gordito3", 3662, 1, 2000); 
			}
			
		}

		// function gordito4_720() { gordito("gordito4", "gordito4", 4703, 1, 2000); }
		// function gordito5_720() { gordito("gordito5", "gordito5", 5336, 3, 3000); }
		// function gordito6_720() { gordito2("gordito6", "gordito6", 311, 1, 2000); }
		function gordito7_720() { gordito("gordito7", "gordito7", 3947, 2, 2400); }
		function gordito8_720() { gordito2("gordito8", "gordito8", 192, 1, 1300); }





		// -------------------------- EFECTOS DE HUMO ----------------------------- //


		//parámetros corresponden a: id del elemento, distancia a recorrer, tiempo que se tarda
		function humo1_720(){
			elementoAparece("humo1", 600);
			var hum= setTimeout(function(){
				elementoDesaparece("humo1", 500);
			}, 2000); 
		}

		function carritoYHumo_720(){

			var animCarrito= setTimeout(function(){
				
				carril1.play();
				carrito("carrito", 491, 6);

				var hum1= setTimeout(function(){
						redes.play();
						humo1();
					}, 6000); 
				var hum2 = setTimeout(function(){
						humo2();
					}, 7000);
				var hum3 = setTimeout(function(){
						humo3();
					}, 8500);

			}, 50);

		}

 
		// -------------------------- ADN ROTANDO ----------------------------- //

		function ADN_720(){
			rotarY("adn");
		}

		// -------------------------- APARECE BOMBILLO ----------------------------- //

		function apareceBombillo_720(){
			elementoAparece("bombillo", 400);
			avance("bombillo", 238, 0.7);
		}


		// -------------------------- PASADORES O PALANCAS EN MÁQUINAS ----------------------------- //

		// los parámetros de avance corresponden a: id, distancia a recorrer (left o top en pixeles) y rapidez de la animación

		function pasadores1_720(){

			var pasadoresSuben1 = setTimeout(function(){
				avance2("btn1", 129, 0.8);
				avance2("btn2", 135, 0.9);
				avance2("btn3", 128, 1);
				avance2("btn4", 137, 0.7);
			}, 500);

			var pasadoresBajan1 = setTimeout(function(){
				avance2("btn1", 169, 0.8);
				avance2("btn2", 170, 0.9);
				avance2("btn3", 172, 1);
				avance2("btn4", 169, 0.7);
			}, 1500);

		}


		function pasadores2_720(){

			rotacionEstatica("valvula1", 90);

			var pasadoresSuben2 = setTimeout(function(){
				avance2("btn5", 317, 0.7);
				avance2("btn6", 319, 0.8);
				avance2("btn7", 326, 0.5);
			}, 600);

			var pasadoresBajan2 = setTimeout(function(){
				rotacionEstatica("valvula1", 10);
				avance2("btn5", 347, 0.7);
				avance2("btn6", 351, 0.8);
				avance2("btn7", 346, 0.5);
			}, 1300);
		}


		function pasador3_720(){

			// 1280x900

			if((screen.availHeight > 629 && screen.availWidth > 1024) 
				&& (screen.availHeight < 901 && screen.availWidth < 1301)){

				var btn11 = setTimeout(function(){
					avance("btn11", 4038, 0.9);
				}, 600);

				var btn11 = setTimeout(function(){
					avance("btn11", 4019, 0.9);
				}, 2000);
			}

			// 1360x760

			if (screen.availHeight > 550 && screen.availHeight < 901 
				&& screen.availWidth < 1401 && screen.availWidth > 1300){

				var btn11 = setTimeout(function(){
					avance("btn11", 4063, 0.9);
				}, 600);

				var btn11 = setTimeout(function(){
					avance("btn11", 4043, 0.9);
				}, 2000);	

			}


		}

		function palancas1_720(){

			var pasadorIzquierda1 = setTimeout(function(){
				avance("pasador1", 2097, 0.9);
				avance("pasador2", 2101, 0.8);
			}, 600);

			var pasadorDerecha1 = setTimeout(function(){
				avance("pasador1", 2056, 0.9);
				avance("pasador2", 2053, 0.8);
			}, 2000);
		}


		function palancas2_720(){

			var pasadoresSuben3 = setTimeout(function(){
				avance2("pasador3", 237, 0.7);
				avance2("pasador4", 245, 0.9);
			}, 600);

			var pasadoresBajan3 = setTimeout(function(){
				avance2("pasador3", 279, 0.7);
				avance2("pasador4", 278, 0.9);
			}, 2000);
		}




		// -------------------------- AGUJAS DE LAS MÁQUINAS ----------------------------- //

		function aguja1_720(){
			var rotacion1= setTimeout(function(){
				rotacionEstatica("aguja1", 80);
			}, 500);
			var rotacion2= setTimeout(function(){
				rotacionEstatica("aguja1", -55);
			}, 1300);
			var rotacion3= setTimeout(function(){
				rotacionEstatica("aguja1", 60);
			}, 2000);
			var rotacion4= setTimeout(function(){
				rotacionEstatica("aguja1", -85);
			}, 4200);
			var rotacion5= setTimeout(function(){
				rotacionEstatica("aguja1", 60);
			}, 5200);
			var rotacion6= setTimeout(function(){
				rotacionEstatica("aguja1", -30);
			}, 6700);
			var rotacion7= setTimeout(function(){
				rotacionEstatica("aguja1", 60);
			}, 7800);
			var rotacion8= setTimeout(function(){
				rotacionEstatica("aguja1", -85);
			}, 9000);
			var rotacion9= setTimeout(function(){
				rotacionEstatica("aguja1", 60);
			}, 10500);
			var rotacion10= setTimeout(function(){
				rotacionEstatica("aguja1", -30);
			}, 11500);	
		}

		function aguja2_720(){
			var rotacion1= setTimeout(function(){
				rotacionEstatica("aguja2", 80);
			}, 500);
			var rotacion2= setTimeout(function(){
				rotacionEstatica("aguja2", -55);
			}, 1300);
			var rotacion3= setTimeout(function(){
				rotacionEstatica("aguja2", 60);
			}, 2000);
			var rotacion4= setTimeout(function(){
				rotacionEstatica("aguja2", -85);
			}, 4200);
			var rotacion5= setTimeout(function(){
				rotacionEstatica("aguja2", 60);
			}, 5200);
			var rotacion6= setTimeout(function(){
				rotacionEstatica("aguja2", -30);
			}, 6700);
			var rotacion7= setTimeout(function(){
				rotacionEstatica("aguja2", 60);
			}, 7800);
			var rotacion8= setTimeout(function(){
				rotacionEstatica("aguja2", -85);
			}, 9000);
			var rotacion9= setTimeout(function(){
				rotacionEstatica("aguja2", 60);
			}, 10500);
			var rotacion10= setTimeout(function(){
				rotacionEstatica("aguja2", -30);
			}, 11500);
		}

		function aguja3_720(){
			var rotacion1= setTimeout(function(){
				rotacionEstatica("aguja3", 80);
			}, 500);
			var rotacion2= setTimeout(function(){
				rotacionEstatica("aguja3", -55);
			}, 1300);
			var rotacion3= setTimeout(function(){
				rotacionEstatica("aguja3", 60);
			}, 2000);
			var rotacion4= setTimeout(function(){
				rotacionEstatica("aguja3", -85);
			}, 4200);
			var rotacion5= setTimeout(function(){
				rotacionEstatica("aguja3", 60);
			}, 5200);
			var rotacion6= setTimeout(function(){
				rotacionEstatica("aguja3", -30);
			}, 6700);
			var rotacion7= setTimeout(function(){
				rotacionEstatica("aguja3", 60);
			}, 7800);
			var rotacion8= setTimeout(function(){
				rotacionEstatica("aguja3", -85);
			}, 9000);
			var rotacion9= setTimeout(function(){
				rotacionEstatica("aguja3", 60);
			}, 10500);
			var rotacion10= setTimeout(function(){
				rotacionEstatica("aguja3", -30);
			}, 11500);
		}

		function aguja4_720(){
			var rotacion1= setTimeout(function(){
				rotacionEstatica("aguja4", 80);
			}, 500);
			var rotacion2= setTimeout(function(){
				rotacionEstatica("aguja4", -55);
			}, 1300);
			var rotacion3= setTimeout(function(){
				rotacionEstatica("aguja4", 60);
			}, 2000);
			var rotacion4= setTimeout(function(){
				rotacionEstatica("aguja4", -85);
			}, 4200);
			var rotacion5= setTimeout(function(){
				rotacionEstatica("aguja4", 60);
			}, 5200);
			var rotacion6= setTimeout(function(){
				rotacionEstatica("aguja4", -30);
			}, 6700);
			var rotacion7= setTimeout(function(){
				rotacionEstatica("aguja4", 60);
			}, 7800);
			var rotacion8= setTimeout(function(){
				rotacionEstatica("aguja4", -85);
			}, 9000);
			var rotacion9= setTimeout(function(){
				rotacionEstatica("aguja4", 60);
			}, 10500);
			var rotacion10= setTimeout(function(){
				rotacionEstatica("aguja4", -30);
			}, 11500);
		}

		function aguja5_720(){
			var rotacion1= setTimeout(function(){
				rotacionEstatica("aguja5", 80);
			}, 500);
			var rotacion2= setTimeout(function(){
				rotacionEstatica("aguja5", -55);
			}, 1300);
			var rotacion3= setTimeout(function(){
				rotacionEstatica("aguja5", 60);
			}, 2000);
			var rotacion4= setTimeout(function(){
				rotacionEstatica("aguja5", -85);
			}, 4200);
			var rotacion5= setTimeout(function(){
				rotacionEstatica("aguja5", 60);
			}, 5200);
			var rotacion6= setTimeout(function(){
				rotacionEstatica("aguja5", -30);
			}, 6700);
			var rotacion7= setTimeout(function(){
				rotacionEstatica("aguja5", 60);
			}, 7800);
			var rotacion8= setTimeout(function(){
				rotacionEstatica("aguja5", -85);
			}, 9000);
			var rotacion9= setTimeout(function(){
				rotacionEstatica("aguja5", 60);
			}, 10500);
			var rotacion10= setTimeout(function(){
				rotacionEstatica("aguja5", -30);
			}, 11500);
		}

		function aguja6_720(){
			var rotacion1= setTimeout(function(){
				rotacionEstatica("aguja6", 80);
			}, 500);
			var rotacion2= setTimeout(function(){
				rotacionEstatica("aguja6", -55);
			}, 1300);
			var rotacion3= setTimeout(function(){
				rotacionEstatica("aguja6", 60);
			}, 2000);
			var rotacion4= setTimeout(function(){
				rotacionEstatica("aguja6", -85);
			}, 4200);
			var rotacion5= setTimeout(function(){
				rotacionEstatica("aguja6", 60);
			}, 5200);
			var rotacion6= setTimeout(function(){
				rotacionEstatica("aguja6", -30);
			}, 6700);
			var rotacion7= setTimeout(function(){
				rotacionEstatica("aguja6", 60);
			}, 7800);
			var rotacion8= setTimeout(function(){
				rotacionEstatica("aguja6", -85);
			}, 9000);
			var rotacion9= setTimeout(function(){
				rotacionEstatica("aguja6", 60);
			}, 10500);
			var rotacion10= setTimeout(function(){
				rotacionEstatica("aguja6", -30);
			}, 11500);
		}



		// -------------------------- MISCELANEOS ----------------------------- //


		// ---Carpeta dentro de la máquina--- //

		function carpetaMaquina_720(){

			var carp1= setTimeout(function(){
				elementoAparece("carpeta2", 600);
				zoomInDown("carpeta2");
			}, 1000); 

			var carp2= setTimeout(function(){
				rotateOutDownRight("carpeta2");
				elementoDesaparece("carpeta2", 500);
			}, 4500);
		}

 


		// ---Movimiento del correo--- //

		function shakeCorreo_720(){
			var correo= setTimeout(function(){
				swing("correo");
			}, 200);
		}

		function detenerCorreo_720(){
			removerClase("correo", "correo");
		}


		// ---Luces de máquinas--- //

		function lucesMaquina_720(){
			var botones= setTimeout(function(){
				flash("btn8");
			}, 500);
			var botones= setTimeout(function(){
				flash("btn9");
			}, 1100);
			var botones= setTimeout(function(){
				flash("btn10");
			}, 1800);
		}

		function lucesMaquinaDet_720(){ 
			removerClase("btn8", "btn8");
			removerClase("btn9", "btn9");
			removerClase("btn10", "btn10");
		}

		function lucesLaptop_720(){
			elementoAparece("luz9");
			elementoAparece("luz10");
			elementoAparece("luz11");
			var botones= setTimeout(function(){
				flash("luz9");
			}, 500);
			var botones= setTimeout(function(){
				flash("luz10");
			}, 1100);
			var botones= setTimeout(function(){
				flash("luz11");
			}, 1800);
		}

		function lucesLaptopDet_720(){ 
			removerClase("luz9", "luz9");
			removerClase("luz10", "luz10");
			removerClase("luz11", "luz11");
		}	



		// ---Mundo que rueda por máquina--- //

		function mundoRueda_720(){
			var mundo= setTimeout(function(){
				avance("mundo", 3299, 2);
			}, 100);

			var mundo2= setTimeout(function(){
				avance("mundo", 3412, 2);
			}, 3000);

			var mundo3= setTimeout(function(){
				elementoDesaparece("mundo");
			}, 6000);
		}


		// --- Productos que entran y salen por desagüe --- //

		function productosDesague_720(){
			var productos = setTimeout(function(){
				avance2("producto1", 358, 1.8);
				avance2("producto2", 375, 1.3);
				avance2("producto3", 351, 1.8);
				avance2("producto4", 376, 1);
			 avance2("producto5", 379, 0.6);
			}, 500);
			var productos = setTimeout(function(){
				avance2("producto1", 320, 1.8);
				avance2("producto2", 328, 1.3);
				avance2("producto3", 326, 1.8);
				avance2("producto4", 329, 1);
			 avance2("producto5", 322, 0.6);
			}, 2500);
		}


		// ---Luces parpadeantes--- //

		function lucesPares_720(){
			var productos = setTimeout(function(){
				flash("luz3");
			}, 500);

			var productos = setTimeout(function(){
				flash("luz4");
			}, 1100);
		}

		function detenerLucesPares_720(){
			removerClase("luz3", "luz3");
			removerClase("luz4", "luz4");
		}

		function luzMaquina1_720(){
			var luces3 = setTimeout(function(){
				flash("luz6");
			}, 500);	
		}

		function detenerLuzMaquina1_720(){
			removerClase("luz6", "luz6");
		}

		function luzMaquina2_720(){
			var luces3 = setTimeout(function(){
				flash("luz8");
			}, 500);
		}

		function detenerLuzMaquina2_720(){
			removerClase("luz8", "luz8");
		}

		function rotarValvula3_720(){
			rotacionEstatica("valvula3", 60);
		}




		// ---Tubo de ensayo moviéndose por el riel--- //

		function gotaCayendo_720(){
			slideOpen("gota", 26); //aparece la gota
			var movimiento0 = setTimeout(function(){ // la gota cae
				removerTransicion("gota");
			 	avance2("gota", 500, 0.6);
			}, 200);
			var movimiento0 = setTimeout(function(){ // la gota desaparece
				elementoDesaparece("gota", 200);
			}, 800);
		}

		function tuboEnsayoMov1_720(){

			var tuboEnsayo1 = setTimeout(function(){

					var movimiento1 = setTimeout(function(){ // el tubo de ensayo hace el recorrido horizontal
			 		avance("tuboEnsayo1", 2680, 2);
					}, 100);

					var movimiento2 = setTimeout(function(){ // hacemos la rotación
			 			rotacionEstatica("tuboEnsayo1", -25);
					}, 1800);

				  	var movimiento3 = setTimeout(function(){ // movemos el tubo en diagonal
			 		moverDiagonal("tuboEnsayo1", 2680, 482, -375, 431, 90);
				 	}, 2000);

					var movimiento4 = setTimeout(function(){ // el tubo desaparece en la máquina
						rotacionEstatica("tuboEnsayo1", -5);
					}, 3000);
					var movimiento5 = setTimeout(function(){ // el tubo desaparece en la máquina
						avance("tuboEnsayo1", 2839, 0.9);
					}, 3300);					
					var movimiento6 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 			elementoDesaparece("tuboEnsayo1", 400);
				 	}, 5000);
			}, 50);
		}

		function tuboEnsayoMov2_720(){

			var tuboEnsayo2 = setTimeout(function(){

					elementoAparece("tuboEnsayo2", 200); // aparece la cajita
					slideIn("tuboEnsayo2");

					var movimiento = setTimeout(function(){ // el tubo de ensayo hace el recorrido horizontal 2
			 		avance("tuboEnsayo2", 2966, 1.5);
					}, 1800);

					var movimiento2 = setTimeout(function(){ // hacemos la rotación 2
			 			rotacionEstatica("tuboEnsayo2", -25);
					}, 3000);

				  	var movimiento3 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 		moverDiagonal("tuboEnsayo2", 2966, 422, -300, 360, 80);
				 	}, 3000);

					var movimiento4 = setTimeout(function(){ // el tubo desaparece en la máquina 2
						rotacionEstatica("tuboEnsayo2", 0);
						avance("tuboEnsayo2", 3137, 0.9);
					}, 4000);
					var movimiento5 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 			elementoDesaparece("tuboEnsayo2", 400);
				 	}, 6000);

			}, 1500);
		}


		// ---Cajita moviéndose por el riel--- //

		function cajitaMov1_720(){

			var cajita = setTimeout(function(){

				// Si la resolución es de 1280x900

				if((screen.availHeight > 629 && screen.availWidth > 1024) 
				&& (screen.availHeight < 901 && screen.availWidth < 1301)){

					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			avance("cajita", 3623, 1.8);
					}, 500);
					var sonido = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			caeHoja.play();
					}, 2900);
					var movimiento1 = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			elementoAparece("hoja1", 200);
			 			zoomInDown("hoja1");
					}, 2700);

					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
						cajaMov1.play();
			 			avance("cajita", 4162, 3);
					}, 3300);

					var movimiento8 = setTimeout(function(){ // rotamos de nuevo la caja a su angulo normal
			 			elementoDesaparece("cajita", 400);
					}, 7000);

				} // FIN DEL IF


				//Si la resolución es de 1360x760

				if (screen.availHeight > 550 && screen.availHeight < 901 
				&& screen.availWidth < 1401 && screen.availWidth > 1300){

					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			avance("cajita", 3636, 1.8);
					}, 500);
					var sonido = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			caeHoja.play();
					}, 2900);
					var movimiento1 = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			elementoAparece("hoja1", 200);
			 			zoomInDown("hoja1");
					}, 2700);

					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
						cajaMov1.play();
			 			avance("cajita", 4201, 3);
					}, 3300);

					var movimiento8 = setTimeout(function(){ // rotamos de nuevo la caja a su angulo normal
			 			elementoDesaparece("cajita", 400);
					}, 7000);
				}

				//Si la resolución es de 1280x1024

				if((screen.availHeight > 900 && screen.availWidth > 1024) 
				&& (screen.availHeight < 1025 && screen.availWidth < 1301)){

					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			avance("cajita", 3623, 1.8);
					}, 500);
					var sonido = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			caeHoja.play();
					}, 2900);
					var movimiento1 = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			elementoAparece("hoja1", 200);
			 			zoomInDown("hoja1");
					}, 2700);

					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
						cajaMov1.play();
			 			avance("cajita", 4162, 3);
					}, 3300);

					var movimiento8 = setTimeout(function(){ // rotamos de nuevo la caja a su angulo normal
			 			elementoDesaparece("cajita", 400);
					}, 7000);

				}

			}, 500);
		} // fin de la cajita1


		// ---telefono y manito que aparecen dentro de las máquinas--- //

		function apareceTlf_720(){
			var telefono = setTimeout(function(){
				elementoAparece("telefono", 100);  //aparece el tlf
			 	zoomInDown("telefono");
				var desapareceTlf = setTimeout(function(){  //desaparece el tlf
						rotateOutRight("telefono");
						elementoDesaparece("telefono", 300);
				}, 2000);
			}, 300);
		}


		function apareceManito_720(){
			var manito = setTimeout(function(){
				elementoAparece("manito", 100);
			 	zoomInDown("manito");
				var desapareceTlf = setTimeout(function(){
						rotateOutRight("manito");
						elementoDesaparece("manito", 300);
				}, 4000);
			}, 500);
		}


		// ---Producto final--- //

		function productoFinalMov_720(){
			var palanca = setTimeout(function(){
				elementoAparece("productofinal", 200);
			 	zoomIn("productofinal");
			}, 500);
		}

		function palancaFinal_720(){
			rotacionEstatica("palanca2", 35);
			var palanca= setTimeout(function(){ //se abre el cuadro de texto
				rotacionEstatica("palanca2", 0);
			}, 800); 
		}

		// ---Logos LLAVI--- //

		function logoAzul_720(){
			pulse("logoAzul");
			elementoAparece("manoCursor4", 400);
		}

		function logoFucsia_720(){
			elementoDesaparece("logoAzul", 400);
			rubberBand2("logoFucsia");
		}
