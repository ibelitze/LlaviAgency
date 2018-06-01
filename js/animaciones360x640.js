		

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
	var p2Maquina1 = document.getElementById('P2Maquina1');	
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





		// -------------------------- ENTRADAS DE LLAVITO ----------------------------- //

		// ---Primera entrada a dejar la carpeta--- //

		function entradaLlavito1_movil(){

				var llaviAnimacion1 = setTimeout(function(){
				 		avance("llavi1", 4, 1.5);	
				 	var dialogo1 = setTimeout(function(){ //aparece cuadro de diálogo	
				 		elementoAparece("dialogo1", 300)
						slideIn("dialogo1");
					}, 2000);
				}, 1000);

		} //FINAL entradaLlavito1	

		function entradaLlavito2_movil(){

			var llavito1 = setTimeout(function(){ //flota hasta quedar encima de la máquina

				elementoDesaparece("dialogo1", 300);

				var flotar = setTimeout(function(){ //flota hasta quedar encima de la máquina
					avance("llavi1", 90, 1); 
				}, 1000);

			 	var echarCarpeta = setTimeout(function(){ //rota la carpeta
			 		removerTransicion("llavi1");
			 		rotacionEstatica("movMano", 180);
			 	}, 2000);

			 	var echarCarpeta1 = setTimeout(function(){ //la deja caer
			 		avance2("movMano", 74, 0.8);
			 	}, 3000);

			 	var echarCarpeta2 = setTimeout(function(){ //la carpeta cae en la máquina
			 		avance2("carpeta1", -125, 0.5);
			 	}, 4200);

			 	var flotar = setTimeout(function(){ //flota hasta quedar lejos de la primera máquina
					avance("llavi1", 4, 1.5); 
					elementoDesaparece("carpeta1", 400);
				}, 6000);
			 	var echarCarpeta3 = setTimeout(function(){ //la deja caer
			 		elementoDesaparece("manollavi", 200);
			 		elementoAparece("cuerpo", 200);
			 		elementoAparece("cabeza", 200);
			 		elementoDesaparece("llavito1", 300);
			 		elementoDesaparece("dedosllavi", 300);

			 	}, 8000);
				var flotar = setTimeout(function(){ //La cabeza de llavito mira el proceso de las máquinas
					rotacionEstatica("cabeza", 19); 
				}, 11000);
				var flotar = setTimeout(function(){ //sigue con la mirada el proceso
					rotacionEstatica("cabeza", -10); 
				}, 13000);
			 	var eliminarLlavi = setTimeout(function(){ // Llavito desaparece
			 		avance("llavi1", -130, 1.5);
			 	}, 17000);	
			 	
			}, 50);

		}// fin entrada de llavito 2



		// ---Segunda entrada con la bienvenida--- //

		// El condicional es porque algunas veces usaremos la función con el parámetro px, y otras veces no
		// Cuando se usa la función debemos saber si el px es nulo o mayor a 0 para saber cómo trabajar 
		function apareceLlavito_movil(id, px){
			var llavi2= setTimeout(function(){
					avance2(id, 120, 1);
			}, 100);
			if (px != null || px > 0){
				var llavi2= setTimeout(function(){
						avance2(id, px, 1);
				}, 100);
			}
		}


		function desapareceLlavito_movil(id){

			var llavi2= setTimeout(function(){
			 	avance2(id, 630, 1.3);
			}, 100);
			
		}




		// -------------------------- MOVIMIENTOS MÁQUINA DE RIEL SUPERIOR ----------------------------- //


		function rielSuperiorMov1_movil(){

			var riel1= setTimeout(function(){ // La máquina comienza a actuar

				avance("maquinaRiel", 501, 0.4);	

			 	var mov1= setTimeout(function(){     // aparece la cuerda
			 		gan1.play();
					slideOpen("cuerda", 103);	
					avance2("finalCuerda", 140);
					avance2("gancho1", 156);
					avance2("gancho2", 156);
				}, 1000);
				var mov3= setTimeout(function(){     // los ganchos se mueven
					avance("gancho1", 57, 0.9);
					avance("gancho2", 89, 0.9);
				}, 1800);	
				var sonido2 = setTimeout(function(){
					gan2.play();
				}, 1800);
				var mov4= setTimeout(function(){  // los ganchos se abren (rotan)
					rotacionEstatica("gancho1", 14);
					rotacionEstatica("gancho2", -14);	
				}, 2000);
				var mov5= setTimeout(function(){  // bajamos la cuerda con los ganchos para que agarre el bombillo
					slideOpen("cuerda", 153);
					slideTop("finalCuerda", 187);
					slideTop("gancho1", 206);
					slideTop("gancho2", 206);
				}, 2500);
				var mov6= setTimeout(function(){  // subimos la cuerda con el bombillo agarrado
					slideOpen("cuerda", 30);
					slideTop("finalCuerda", 53);
					slideTop("gancho1", 66);
					slideTop("gancho2", 66);
					slideTop("bombillo", -94);
					gan3.play();
				}, 3000);
			 }, 400);

		} //FINAL rielSuperior

		function rielSuperiorMov2_movil(){
			var mov7= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					avance("maquinaRiel", 638, 0.9);
					avance("bombillo", 360, 0.9);
				}, 400);

			var movr= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					gan4.play();
			}, 500);			

		}


		function rielSuperiorMovHorizontal_movil(distancia){
			var mov7= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					avance("maquinaRiel", distancia, 0.9);
				}, 400);

		}

		function rielsuperiorMov3_movil(){
				var mov8= setTimeout(function(){  // abrimos los ganchos
					rotacionEstatica("gancho1", 23);
					rotacionEstatica("gancho2", -23);
				}, 500);

				var mov9= setTimeout(function(){  // el bombillo cae
					slideTop("bombillo", -8);
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
					slideOpen("cuerda", 6);
					avance2("finalCuerda", 22);
					avance2("gancho1", 26);
					avance2("gancho2", 26);
				}, 1700);
		}


		function gordito2_movil() { gordito("gordito2", "gordito2", 927, 2, 3300); }




// -------------------------- EFECTOS DE HUMO ----------------------------- //


		//parámetros corresponden a: id del elemento, distancia a recorrer, tiempo que se tarda
		function humo1_movil(){
			elementoAparece("humo1", 600);
			var hum= setTimeout(function(){
				elementoDesaparece("humo1", 500);
			}, 2000); 
		}

		function carritoYHumo_movil(){

			var animCarrito= setTimeout(function(){
				
				carril1.play();
				carrito("carrito", 179, 4);

				var hum1= setTimeout(function(){
						redes.play();
						humo1();
					}, 4000); 
				var hum2 = setTimeout(function(){
						humo2();
					}, 5000);
				var hum3 = setTimeout(function(){
						humo3();
					}, 6500);

			}, 50);

		}


		// -------------------------- APARECE BOMBILLO ----------------------------- //

		function apareceBombillo_movil(){
			elementoAparece("bombillo", 400);
			avance("bombillo", 219, 0.7);
		}

		// -------------------------- MISCELANEOS ----------------------------- //


		// ---Carpeta dentro de la máquina--- //

		function carpetaMaquina_movil(){

			var carp1= setTimeout(function(){
				elementoAparece("carpeta2", 600);
				zoomInDown("carpeta2");
			}, 1000); 

			var carp2= setTimeout(function(){
				rotateOutDownRight("carpeta2");
				elementoDesaparece("carpeta2", 500);
			}, 4500);
		}

		function tiemblaMaquina_movil(){
			tiembla("maquinaAmarilla");
		}		

		// ---Movimiento del correo--- //

		function shakeCorreo_movil(){
			var correo= setTimeout(function(){
				swing("correo");
			}, 200);
		}

		function detenerCorreo_movil(){
			removerClase("correo", "correo");
		}

		// --- Productos que entran y salen por desagüe --- //

		function productosDesague_movil(){
			var productos = setTimeout(function(){
				avance2("producto1", 205, 1.8);
				avance2("producto2", 214, 1.3);
				avance2("producto3", 226, 1.8);
				avance2("producto4", 222, 1);
			 avance2("producto5", 214, 0.6);
			}, 500);
			var productos = setTimeout(function(){
				avance2("producto1", 190, 1.8);
				avance2("producto2", 190, 1.3);
				avance2("producto3", 190, 1.8);
				avance2("producto4", 190, 1);
			 avance2("producto5", 190, 0.6);
			}, 2500);
		}

		function tuercaMaquina1_movil(){
			rotacionNormal("tuerca5", 20);
			rotacionInversa("tuerca6", 10);
		}

		function tuercaMaquina2_movil(){
			rotacionInversa("tuerca17", 10);
		}		

		// ---Luces parpadeantes--- //

		function lucesPares_movil(){

			var productos = setTimeout(function(){
				flash("luz4");
			}, 1100);
		}

		function luzMaquina1_movil(){
			var luces3 = setTimeout(function(){
				flash("luz6");
			}, 500);	
		}

		function rotarValvula3_movil(){
			rotacionEstatica("valvula3", 60);
		}

		// ---Cajita moviéndose por el riel--- //

		function cajitaMov1_movil(){

			var cajita = setTimeout(function(){

					elementoAparece("cajita", 200); // aparece la cajita

					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			avance("cajita", 1040, 1.6);
					}, 400);

				  	var movimiento3 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 			moverDiagonal("cajita", 1040, 171, -100, 200, 80);
				 	}, 1700);
			 	
					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
						cajaMov1.play();
			 			avance("cajita", 1280, 2);
					}, 3000);

					var sonido = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			rotacionEstatica("cajita", -24);
					}, 5100);

				  	var movimiento3 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 			moverDiagonal("cajita", 1280, 200, -125, 160, 70);
				 	}, 6000);							

					var movimiento8 = setTimeout(function(){ // rotamos de nuevo la caja a su angulo normal
			 			elementoDesaparece("cajita", 400);
					}, 7500);					

			}, 500);
		}

		// ---Producto final--- //

		function productoFinalMov_movil(){
			var palanca = setTimeout(function(){
				elementoAparece("productofinal", 200);
			 	zoomIn("productofinal");
			}, 500);
		}


		function palancaFinal_movil(){
			rotacionEstatica("palanca2", 35);
			var palanca= setTimeout(function(){ //se abre el cuadro de texto
				rotacionEstatica("palanca2", 0);
			}, 800); 
		}

		function logoAzul_movil(){
			pulse("logoAzul");
			elementoAparece("manoCursor4", 400);
		}

		function logoFucsia_movil(){
			elementoDesaparece("logoAzul", 400);
			rubberBand2("logoFucsia");
		}										