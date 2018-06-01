

	// ESTAS SON LAS ANIMACIONES PARA UNA RESOLUCION DE 1000 x 800


	var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

		// -------------------------- ENTRADAS DE LLAVITO ----------------------------- //

		// ---Primera entrada a dejar la carpeta--- //

		function entradaLlavito1_800(){

				var llaviAnimacion1 = setTimeout(function(){
				 		avance("llavi1", 90, 1.5);
				 		// movAndroide.play();		
				 	var dialogo1 = setTimeout(function(){ //aparece cuadro de diálogo	
				 		elementoAparece("dialogo1", 300)
						slideIn("dialogo1");
					}, 2000);
				}, 2000);

		} //FINAL entradaLlavito1	

		function entradaLlavito2_800(){

			var llavito1 = setTimeout(function(){ //flota hasta quedar encima de la máquina

				elementoDesaparece("dialogo1", 300);

				var flotar = setTimeout(function(){ //flota hasta quedar encima de la máquina
					avance("llavi1", 106, 1); 
				}, 1000);

			 	var echarCarpeta = setTimeout(function(){ //rota la carpeta
			 		removerTransicion("llavi1");
			 		rotacionEstatica("movMano", 180);
			 	}, 2000);

			 	var echarCarpeta1 = setTimeout(function(){ //la deja caer
			 		avance2("movMano", 85, 0.8);
			 	}, 3000);

			 	var echarCarpeta2 = setTimeout(function(){ //la carpeta cae en la máquina
			 		avance2("carpeta1", -100, 0.5);
			 	}, 4200);

			 	var flotar = setTimeout(function(){ //flota hasta quedar lejos de la primera máquina
					avance("llavi1", 45, 1.5); 
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
		function apareceLlavito_800(id, px){
			var llavi2= setTimeout(function(){
					avance2(id, 420, 1);
			}, 100);
			if (px != null || px > 0){
				var llavi2= setTimeout(function(){
						avance2(id, px, 1);
				}, 100);
			}
		}


		function desapareceLlavito_800(id){

			var llavi2= setTimeout(function(){
			 	avance2(id, 1100, 1.3);
			}, 100);
			
		}




		// -------------------------- MOVIMIENTOS MÁQUINA DE RIEL SUPERIOR ----------------------------- //


		function rielSuperiorMov1_800(){

			var riel1= setTimeout(function(){ // La máquina comienza a actuar

				avance("maquinaRiel", 740, 0.4);	

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
				var sonido2 = setTimeout(function(){
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

		function rielSuperiorMov2_800(){
			var mov7= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					avance("maquinaRiel", 1187, 0.9);
					avance("bombillo", 679, 0.9);
				}, 400);

			var movr= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					gan4.play();
			}, 500);			

		}


		function rielSuperiorMovHorizontal_800(distancia){
			var mov7= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					avance("maquinaRiel", distancia, 0.9);
				}, 400);

		}

		function rielsuperiorMov3_800(){
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
					avance2("gancho1", 51);
					avance2("gancho2", 51);
				}, 1700);
		}





		// -------------------------- EFECTOS TUERCAS QUE GIRAN ----------------------------- //


		function tuercaMaquina1_800(){
			rotacionNormal("tuerca5", 20);
			rotacionInversa("tuerca6", 10);
		}


		function tuercaMaquina2_800(){
			rotacionInversa("tuerca17", 10);
		}


		function tuercaMaquina3_800(){
			rotacionInversa("tuerca19", 40);
			rotacionInversa("tuerca20", 50);
		}


		function tuercaMaquina4_800(){
			rotacionInversa("tuerca18", 10);
		}



		// -------------------------- MÁQUINA QUE TIEMBLA ----------------------------- //


		function tiemblaMaquina_800(){
			tiembla("maquinaAmarilla");
		}
		 

		// -------------------------- EFECTOS DE GORDITOS EN TUBERÍAS ----------------------------- //

		//los parámetros corresponden a:  
		//id, clase, a donde debe llegar (left en pixeles), tiempo de recorrido
		//y el tiempo en que debe desaparecer (3000 son 3 segundos, por ejemplo).

		function gordito1_800() { gordito("gordito1", "gordito1", 669, 1, 1000); }
		function gordito2_800() { gordito("gordito2", "gordito2", 1538, 2, 3300); }
		function gordito3_800() { gordito("gordito3", "gordito3", 2884, 1, 1500); }
		function gordito4_800() { gordito("gordito4", "gordito4", 3800, 1, 2000); }
		function gordito5_800() { gordito("gordito5", "gordito5", 4229, 1, 2000); }
		function gordito6_800() { gordito2("gordito6", "gordito6", 312, 1, 2000); }
		function gordito7_800() { gordito("gordito7", "gordito7", 3044, 2, 2400); }
		function gordito8_800() { gordito2("gordito8", "gordito8", 190, 1, 1000); }





		// -------------------------- EFECTOS DE HUMO ----------------------------- //


		//parámetros corresponden a: id del elemento, distancia a recorrer, tiempo que se tarda
		function humo1_800(){
			elementoAparece("humo1", 600);
			var hum= setTimeout(function(){
				elementoDesaparece("humo1", 500);
			}, 2000); 
		}

		function carritoYHumo_800(){

			var animCarrito= setTimeout(function(){
				
				carril1.play();
				carrito("carrito", 195, 6);

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

		function ADN_800(){
			rotarY("adn");
		}

		// -------------------------- APARECE BOMBILLO ----------------------------- //

		function apareceBombillo_800(){
			elementoAparece("bombillo", 400);
			avance("bombillo", 238, 0.7);
		}


		// -------------------------- PASADORES O PALANCAS EN MÁQUINAS ----------------------------- //

		// los parámetros de avance corresponden a: id, distancia a recorrer (left o top en pixeles) y rapidez de la animación

		function pasadores1_800(){

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


		function pasadores2_800(){

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


		function pasador3_800(){

			var btn11 = setTimeout(function(){
				avance("btn11", 3220, 0.9);
			}, 600);

			var btn11 = setTimeout(function(){
				avance("btn11", 3202, 0.9);
			}, 2000);
		}

		function palancas1_800(){

			var pasadorIzquierda1 = setTimeout(function(){
				avance("pasador1", 1590, 0.9);
				avance("pasador2", 1586, 0.8);
			}, 600);

			var pasadorDerecha1 = setTimeout(function(){
				avance("pasador1", 1549, 0.9);
				avance("pasador2", 1546, 0.8);
			}, 2000);
		}


		function palancas2_800(){

			var pasadoresSuben3 = setTimeout(function(){
				avance2("pasador3", 237, 0.7);
				avance2("pasador4", 234, 0.9);
			}, 600);

			var pasadoresBajan3 = setTimeout(function(){
				avance2("pasador3", 276, 0.7);
				avance2("pasador4", 273, 0.9);
			}, 2000);
		}




		// -------------------------- AGUJAS DE LAS MÁQUINAS ----------------------------- //

		function aguja1_800(){
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

		function aguja2_800(){
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

		function aguja3_800(){
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

		function aguja4_800(){
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

		function aguja5_800(){
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

		function aguja6_800(){
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

		function carpetaMaquina_800(){

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

		function shakeCorreo_800(){
			var correo= setTimeout(function(){
				swing("correo");
			}, 200);
		}

		function detenerCorreo_800(){
			removerClase("correo", "correo");
		}


		// ---Luces de máquinas--- //

		function lucesMaquina_800(){
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

		function lucesMaquinaDet_800(){ 
			removerClase("btn8", "btn8");
			removerClase("btn9", "btn9");
			removerClase("btn10", "btn10");
		}

		function lucesLaptop_800(){
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

		function lucesLaptopDet_800(){ 
			removerClase("luz9", "luz9");
			removerClase("luz10", "luz10");
			removerClase("luz11", "luz11");
		}	



		// ---Mundo que rueda por máquina--- //

		function mundoRueda_800(){
			var mundo= setTimeout(function(){
				avance("mundo", 2559, 2);
			}, 100);

			var mundo2= setTimeout(function(){
				avance("mundo", 2648, 2);
			}, 2000);

			var mundo3= setTimeout(function(){
				elementoDesaparece("mundo");
			}, 6000);
		}


		// --- Productos que entran y salen por desagüe --- //

		function productosDesague_800(){
			var productos = setTimeout(function(){
				avance2("producto1", 358, 1.8);
				avance2("producto2", 370, 1.3);
				avance2("producto3", 351, 1.8);
				avance2("producto4", 383, 1);
			 avance2("producto5", 365, 0.6);
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

		function lucesPares_800(){
			var productos = setTimeout(function(){
				flash("luz3");
			}, 500);

			var productos = setTimeout(function(){
				flash("luz4");
			}, 1100);
		}

		function detenerLucesPares_800(){
			removerClase("luz3", "luz3");
			removerClase("luz4", "luz4");
		}

		function luzMaquina1_800(){
			var luces3 = setTimeout(function(){
				flash("luz6");
			}, 500);	
		}

		function detenerLuzMaquina1_800(){
			removerClase("luz6", "luz6");
		}

		function luzMaquina2_800(){
			var luces3 = setTimeout(function(){
				flash("luz8");
			}, 500);
		}

		function detenerLuzMaquina2_800(){
			removerClase("luz8", "luz8");
		}

		function rotarValvula3_800(){
			rotacionEstatica("valvula3", 60);
		}




		// ---Tubo de ensayo moviéndose por el riel--- //

		function gotaCayendo_800(){
			slideOpen("gota", 26); //aparece la gota
			var movimiento0 = setTimeout(function(){ // la gota cae
				removerTransicion("gota");
			 	avance2("gota", 500, 0.6);
			}, 200);
			var movimiento0 = setTimeout(function(){ // la gota desaparece
				elementoDesaparece("gota", 200);
			}, 800);
		}

		function tuboEnsayoMov1_800(){

			var tuboEnsayo1 = setTimeout(function(){

					var movimiento1 = setTimeout(function(){ // el tubo de ensayo hace el recorrido horizontal
			 		avance("tuboEnsayo1", 1931, 0.7);
					}, 100);

					var movimiento2 = setTimeout(function(){ // hacemos la rotación
			 			rotacionEstatica("tuboEnsayo1", -25);
					}, 800);

				  	var movimiento3 = setTimeout(function(){ // movemos el tubo en diagonal
			 		moverDiagonal("tuboEnsayo1", 1931, 482, -370, 417, 70);
				 	}, 800);

					var movimiento4 = setTimeout(function(){ // el tubo desaparece en la máquina
						rotacionEstatica("tuboEnsayo1", -5);
					}, 1800);
					var movimiento5 = setTimeout(function(){ // el tubo desaparece en la máquina
						avance("tuboEnsayo1", 2104, 0.9);
					}, 2500);					
					var movimiento6 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 			elementoDesaparece("tuboEnsayo1", 400);
				 	}, 5500);

			}, 50);
		}

		function tuboEnsayoMov2_800(){

			var tuboEnsayo2 = setTimeout(function(){

					elementoAparece("tuboEnsayo2", 200); // aparece la cajita
					slideIn("tuboEnsayo2");

					var movimiento = setTimeout(function(){ // el tubo de ensayo hace el recorrido horizontal 2
			 		avance("tuboEnsayo2", 2229, 2);
					}, 1100);

					var movimiento2 = setTimeout(function(){ // hacemos la rotación 2
			 			rotacionEstatica("tuboEnsayo2", -25);
					}, 3000);

				  	var movimiento3 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 		moverDiagonal("tuboEnsayo2", 2229, 423, -300, 363, 80);
				 	}, 3100);

					var movimiento4 = setTimeout(function(){ // el tubo desaparece en la máquina 2
						rotacionEstatica("tuboEnsayo2", 0);
						avance("tuboEnsayo2", 2390, 1.5);
					}, 4500);
					var movimiento5 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 			elementoDesaparece("tuboEnsayo2", 400);
				 	}, 6100);

			}, 1500);
		}


		// ---Cajita moviéndose por el riel--- //

		function cajitaMov1_800(){

			var cajita = setTimeout(function(){

					elementoAparece("cajita", 200); // aparece la cajita

					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			avance("cajita", 2852, 1.6);
					}, 400);
					var sonido = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			caeHoja.play();
					}, 2900);
					var movimiento1 = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			elementoAparece("hoja1", 200);
			 			zoomInDown("hoja1");
					}, 2700);

					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
						cajaMov1.play();
			 			avance("cajita", 3285, 3);
					}, 3300);

					var movimiento8 = setTimeout(function(){ // rotamos de nuevo la caja a su angulo normal
			 			elementoDesaparece("cajita", 400);
					}, 6200);					

			}, 500);
		}



		// ---telefono y manito que aparecen dentro de las máquinas--- //

		function apareceTlf_800(){
			var telefono = setTimeout(function(){
				elementoAparece("telefono", 100);  //aparece el tlf
			 	zoomInDown("telefono");
				var desapareceTlf = setTimeout(function(){  //desaparece el tlf
						rotateOutRight("telefono");
						elementoDesaparece("telefono", 300);
				}, 2000);
			}, 300);
		}


		function apareceManito_800(){
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

		function productoFinalMov_800(){
			var palanca = setTimeout(function(){
				elementoAparece("productofinal", 200);
			 	zoomIn("productofinal");
			}, 500);
		}


		function palancaFinal_800(){
			rotacionEstatica("palanca2", 35);
			var palanca= setTimeout(function(){ //se abre el cuadro de texto
				rotacionEstatica("palanca2", 0);
			}, 800); 
		}

		function logoAzul_800(){
			pulse("logoAzul");
			elementoAparece("manoCursor4", 400);
		}

		function logoFucsia_800(){
			elementoDesaparece("logoAzul", 400);
			rubberBand2("logoFucsia");
		}