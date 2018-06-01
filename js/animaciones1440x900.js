

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

		function entradaLlavito1_900(){

			var movAndroide = document.getElementById('movAndroide');

			var llaviAnimacion1 = setTimeout(function(){
			 		avance("llavi1", 140, 1.5);
			 		// movAndroide.play();	
			 	var dialogo1 = setTimeout(function(){ //aparece cuadro de diálogo	
			 		elementoAparece("dialogo1", 300)
					slideIn("dialogo1");
				}, 2000);
			}, 3000);

		} //FINAL entradaLlavito1

		function entradaLlavito2_900(){

			var llavito1 = setTimeout(function(){ //flota hasta quedar encima de la máquina

				elementoDesaparece("dialogo1", 300);

				var flotar = setTimeout(function(){ //flota hasta quedar encima de la máquina
					avance("llavi1", 270, 1); 
				}, 1000);

			 	var echarCarpeta = setTimeout(function(){ //rota la carpeta
			 		removerTransicion("llavi1");
			 		rotacionEstatica("movMano", 180);
			 	}, 2000);

			 	var echarCarpeta1 = setTimeout(function(){ //la deja caer
			 		avance2("movMano", 105, 0.8);
			 	}, 3000);

			 	var echarCarpeta2 = setTimeout(function(){ //la carpeta cae en la máquina
			 		avance2("carpeta1", -180, 0.5);
			 	}, 4200);

			 	var flotar = setTimeout(function(){ //flota hasta quedar lejos de la primera máquina
					avance("llavi1", 40, 2); 
					elementoDesaparece("carpeta1", 400);
				}, 6000);
			 	var echarCarpeta3 = setTimeout(function(){ //la carpeta cae en la máquina
			 		
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
					rotacionEstatica("cabeza", 25); 
				}, 11000);
				var flotar = setTimeout(function(){ //sigue con la mirada el proceso
					rotacionEstatica("cabeza", -20); 
				}, 13000);
			 	var eliminarLlavi = setTimeout(function(){ // Llavito desaparece
			 		avance("llavi1", -200, 1.5);
			 	}, 17000);	
			 	
			}, 50);
		}


		// ---Segunda entrada con la bienvenida--- //

		function apareceLlavito_900(id){
			var llavi2= setTimeout(function(){
					avance2(id, 500, 1);
			}, 100);
		}


		function desapareceLlavito_900(id){
			var llavi2= setTimeout(function(){
			 	avance2(id, 1200, 1);
			}, 100);			
		}




		// -------------------------- MOVIMIENTOS MÁQUINA DE RIEL SUPERIOR ----------------------------- //


		function rielSuperiorMov1_900(){


			var riel1= setTimeout(function(){ // La máquina comienza a actuar

				avance("maquinaRiel", 1161, 0.4);	

			 	var mov1= setTimeout(function(){     // aparece la cuerda
			 		gan1.play();
					slideOpen("cuerda", 388);	
					avance2("finalCuerda", 422);
					avance2("gancho1", 462);
					avance2("gancho2", 462);
				}, 1200);
				var mov3= setTimeout(function(){     // los ganchos se mueven
					avance("gancho1", 82, 0.9);
					avance("gancho2", 145, 0.9);
				}, 1800);
				var sonido1 = setTimeout(function(){
					gan2.play();
				}, 1800);
				var mov4= setTimeout(function(){  // los ganchos se abren (rotan)
					rotacionEstatica("gancho1", 17);
					rotacionEstatica("gancho2", -17);	
				}, 2000);
				var mov5= setTimeout(function(){  // bajamos la cuerda con los ganchos para que agarre el bombillo
					slideOpen("cuerda", 475);
					slideTop("finalCuerda", 507);
					slideTop("gancho1", 545);
					slideTop("gancho2", 545);
				}, 2500);
				var mov6= setTimeout(function(){  // subimos la cuerda con el bombillo agarrado
					slideOpen("cuerda", 125);
					slideTop("finalCuerda", 130);
					slideTop("gancho1", 165);
					slideTop("gancho2", 165);
					slideTop("bombillo", -274);
					gan3.play();
				}, 3000);
			 }, 400);

		} //FINAL rielSuperior

		function rielSuperiorMov2_900(){

			var mov7= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					avance("maquinaRiel", 1955, 0.9); //1383
					avance("bombillo", 1111, 0.9);
				}, 400);

			var movr= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					gan4.play();
				}, 500);			

		}

		function rielSuperiorMovHorizontal_900(distancia){

			var mov7= setTimeout(function(){  // corremos la polea completa con todo y bombillo
					avance("maquinaRiel", distancia, 0.9);
				}, 400);

		}

		function rielsuperiorMov3_900(){
				var mov8= setTimeout(function(){  // abrimos los ganchos
					rotacionEstatica("gancho1", 23);
					rotacionEstatica("gancho2", -23);
				}, 500);

				var mov9= setTimeout(function(){  // el bombillo cae
					slideTop("bombillo", -157);
				}, 700);

				var mov9= setTimeout(function(){  // el bombillo suena al caer
					bombillo1.play();
				}, 900);				

				var mov10= setTimeout(function(){  // el bombillo desaparece dentro de la máquina
					slideOutDown("bombillo");
					elementoDesaparece("bombillo", 400);
				}, 1000);

				var mov10= setTimeout(function(){  // el bombillo desaparece dentro de la máquina
					slideOpen("cuerda", 40);
					avance2("finalCuerda", 37);
					avance2("gancho1", 35);
					avance2("gancho2", 35);
				}, 1700);
		}





		// -------------------------- EFECTOS TUERCAS QUE GIRAN ----------------------------- //

		function rotacionTuercas_900(){
			rotacionNormal("tuerca1", 15);
			rotacionNormal("tuerca2", 30);
			rotacionInversa("tuerca3", 30);
			rotacionNormal("tuerca4", 80);
			rotacionInversa("tuerca7", 40);
			rotacionNormal("tuerca8", 60);
			rotacionNormal("tuerca9", 70);
			rotacionInversa("tuerca10", 60);
			rotacionNormal("tuerca11", 70);
			rotacionNormal("tuerca12", 70);
			rotacionInversa("tuerca13", 60);
			rotacionNormal("tuerca14", 70);
			rotacionInversa("tuerca15", 30);
			rotacionNormal("tuerca16", 50);
		}

		function detenerRotTuercas_900(){
			rotacionDetenerNormal("tuerca1");
			rotacionDetenerNormal("tuerca2");
			rotacionDetenerInversa("tuerca3");
			rotacionDetenerNormal("tuerca4");
			rotacionDetenerInversa("tuerca7");
			rotacionDetenerNormal("tuerca8");
			rotacionDetenerNormal("tuerca9");
			rotacionDetenerInversa("tuerca10");
			rotacionDetenerNormal("tuerca11");
			rotacionDetenerNormal("tuerca12");
			rotacionDetenerInversa("tuerca13");
			rotacionDetenerNormal("tuerca14");
			rotacionDetenerInversa("tuerca15");
			rotacionDetenerNormal("tuerca16");
		}

		function tuercaMaquina1_900(){
			rotacionNormal("tuerca5", 20);
			rotacionInversa("tuerca6", 10);
		}

		function tuercaMaquina1Det_900(){
			rotacionDetenerNormal("tuerca5");
			rotacionDetenerInversa("tuerca6");
		}

		function tuercaMaquina2_900(){
			rotacionInversa("tuerca17", 10);
		}
		function tuercaMaquina2Det_900(){
			rotacionDetenerInversa("tuerca17");
		}

		function tuercaMaquina3_900(){
			rotacionInversa("tuerca19", 40);
			rotacionInversa("tuerca20", 50);
		}

		function tuercaMaquina3Det_900(){
			rotacionDetenerInversa("tuerca19");
			rotacionDetenerInversa("tuerca20");
		}

		function tuercaMaquina4_900(){
			rotacionInversa("tuerca18", 10);
		}



		// -------------------------- MÁQUINA QUE TIEMBLA ----------------------------- //


		function tiemblaMaquina_900(){
			tiembla("maquinaAmarilla");
		}
		 

		// -------------------------- EFECTOS DE GORDITOS EN TUBERÍAS ----------------------------- //

		//los parámetros corresponden a:  
		//id, clase, a donde debe llegar (left en pixeles), tiempo de recorrido
		//y el tiempo en que debe desaparecer (3000 son 3 segundos, por ejemplo).

		function gordito1_900() { gordito("gordito1", "gordito1", 1053, 1, 1300); }
		function gordito2_900() { gordito("gordito2", "gordito2", 2742, 2, 3300); }
		function gordito3_900() { gordito("gordito3", "gordito3", 4645, 1, 1600); }
		function gordito7_900() { gordito("gordito7", "gordito7", 4826, 1, 1500); }
		function gordito8_900() { gordito2("gordito8", "gordito8", 246, 1, 1300); }





		// -------------------------- EFECTOS DE HUMO ----------------------------- //


		//parámetros corresponden a: id del elemento, distancia a recorrer, tiempo que se tarda
		function humo1_900(){
			elementoAparece("humo1", 600);
			var hum= setTimeout(function(){
				elementoDesaparece("humo1", 500);
			}, 2000); 
		}

		function carritoYHumo_900(){

			var animCarrito= setTimeout(function(){
				
				carril1.play();
				carrito("carrito", 697, 6);

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

		function ADN_900(){
			rotarY("adn");
		}

		// -------------------------- APARECE BOMBILLO ----------------------------- //

		function apareceBombillo_900(){
			elementoAparece("bombillo", 400);
			avance("bombillo", 312, 0.7);
		}


		// -------------------------- PASADORES O PALANCAS EN MÁQUINAS ----------------------------- //

		// los parámetros de avance corresponden a: id, distancia a recorrer (left o top en pixeles) y rapidez de la animación

		function pasadores1_900(){

			var pasadoresSuben1 = setTimeout(function(){
				avance2("btn1", 154, 0.8);
				avance2("btn2", 149, 0.9);
				avance2("btn3", 156, 1);
				avance2("btn4", 148, 0.7);
			}, 500);

			var pasadoresBajan1 = setTimeout(function(){
				avance2("btn1", 200, 0.8);
				avance2("btn2", 187, 0.9);
				avance2("btn3", 195, 1);
				avance2("btn4", 203, 0.7);
			}, 1500);

		}


		function pasadores2_900(){

			rotacionEstatica("valvula1", 90);

			var pasadoresSuben2 = setTimeout(function(){
				avance2("btn5", 466, 0.7);
				avance2("btn6", 472, 0.8);
				avance2("btn7", 460, 0.5);
			}, 600);

			var pasadoresBajan2 = setTimeout(function(){
				rotacionEstatica("valvula1", 10);
				avance2("btn5", 441, 0.7);
				avance2("btn6", 428, 0.8);
				avance2("btn7", 441, 0.5);
			}, 1300);
		}


		function pasador3_900(){

			var btn11 = setTimeout(function(){
				//1440x900
				if(screen.availHeight > 799 && (screen.availWidth > 1400) 
	        	&& (screen.availWidth < 1460) && (screen.availHeight < 1025)){
					avance("btn11", 5120, 0.9);
	        	}
	        	//1680x900
		        else if(screen.availHeight > 799 && screen.availWidth > 1500){
					avance("btn11", 5189, 0.9);
		        }
		        else if((screen.availHeight > 900 && screen.availWidth > 1024) 
				&& (screen.availHeight < 1025 && screen.availWidth < 1301)){
		        	avance("btn11", 5077, 0.9);
				}
				
			}, 600);

			var btn11 = setTimeout(function(){
				//1440x900
				if(screen.availHeight > 799 && (screen.availWidth > 1400) 
	        	&& (screen.availWidth < 1460) && (screen.availHeight < 1025)){
					avance("btn11", 5099, 0.9);
	        	}
	        	//1680x900
		        else if(screen.availHeight > 799 && screen.availWidth > 1500){
					avance("btn11", 5168, 0.9);
		        }				
		        else if((screen.availHeight > 900 && screen.availWidth > 1024) 
				&& (screen.availHeight < 1025 && screen.availWidth < 1301)){
		        	avance("btn11", 5063, 0.9);
				}
			}, 2000);
		}

		function palancas1_900(){

			var pasadorIzquierda1 = setTimeout(function(){
				avance("pasador1", 2813, 0.9);
				avance("pasador2", 2807, 0.8);
			}, 600);

			var pasadorDerecha1 = setTimeout(function(){
				avance("pasador1", 2764, 0.9);
				avance("pasador2", 2767, 0.8);
			}, 2000);
		}


		function palancas2_900(){

			var pasadoresSuben3 = setTimeout(function(){
				//1440x900
				if(screen.availHeight > 799 && (screen.availWidth > 1400) 
	        	&& (screen.availWidth < 1460) && (screen.availHeight < 1025)){
					avance2("pasador3", 316, 0.7);
					avance2("pasador4", 323, 0.9);
	        	}
	        	//1680x900
		        else if(screen.availHeight > 799 && screen.availWidth > 1500){
			        avance2("pasador3", 300, 0.7);
					avance2("pasador4", 308, 0.9);
		        }
				//1280x1024
		        else if((screen.availHeight > 900 && screen.availWidth > 1024) 
					&& (screen.availHeight < 1025 && screen.availWidth < 1301)){
					avance2("pasador3", 320, 0.7);
					avance2("pasador4", 319, 0.9);
		        }	

			}, 600);

			var pasadoresBajan3 = setTimeout(function(){
				//1440x900
				if(screen.availHeight > 799 && (screen.availWidth > 1400) 
	        	&& (screen.availWidth < 1460) && (screen.availHeight < 1025)){
		        	avance2("pasador3", 365, 0.7);
					avance2("pasador4", 369, 0.9);
	        	}
	        	//1680x900
		        else if(screen.availHeight > 799 && screen.availWidth > 1500){
			        avance2("pasador3", 352, 0.7);
					avance2("pasador4", 358, 0.9);
		        }
				//1280x1024
		        else if((screen.availHeight > 900 && screen.availWidth > 1024) 
					&& (screen.availHeight < 1025 && screen.availWidth < 1301)){
					avance2("pasador3", 358, 0.7);
					avance2("pasador4", 363, 0.9);
		        }		        

			}, 2000);
		}




		// -------------------------- AGUJAS DE LAS MÁQUINAS ----------------------------- //

		function aguja1_900(){
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

		function aguja2_900(){
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

		function aguja3_900(){
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

		function aguja4_900(){
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

		function aguja5_900(){
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

		function aguja6_900(){
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

		function carpetaMaquina_900(){

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

		function shakeCorreo_900(){
			var correo= setTimeout(function(){
				swing("correo");
			}, 200);
		}

		function detenerCorreo_900(){
			removerClase("correo", "correo");
		}


		// ---Luces de máquinas--- //

		function lucesMaquina_900(){
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

		function lucesMaquinaDet_900(){ 
			removerClase("btn8", "btn8");
			removerClase("btn9", "btn9");
			removerClase("btn10", "btn10");
		}

		function lucesLaptop_900(){
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

		function lucesLaptopDet_900(){ 
			removerClase("luz9", "luz9");
			removerClase("luz10", "luz10");
			removerClase("luz11", "luz11");
		}	



		// ---Mundo que rueda por máquina--- //

		function mundoRueda_900(){
			var mundo= setTimeout(function(){
				avance("mundo", 4206, 2);
			}, 100);

			var mundo2= setTimeout(function(){
				avance("mundo", 4386, 2);
			}, 3000);

			var mundo3= setTimeout(function(){
				elementoDesaparece("mundo");
			}, 6000);
		}


		// --- Productos que entran y salen por desagüe --- //

		function productosDesague_900(){
			var productos = setTimeout(function(){
				avance2("producto1", 480, 1.8);
				avance2("producto2", 507, 1.3);
				avance2("producto3", 477, 1.8);
				avance2("producto4", 511, 1);
			 avance2("producto5", 507, 0.6);
			}, 500);
			var productos = setTimeout(function(){
				avance2("producto1", 434, 1.8);
				avance2("producto2", 445, 1.3);
				avance2("producto3", 443, 1.8);
				avance2("producto4", 449, 1);
			 avance2("producto5", 442, 0.6);
			}, 2500);
		}


		// ---Luces parpadeantes--- //

		function lucesPares_900(){
			var productos = setTimeout(function(){
				flash("luz3");
			}, 500);

			var productos = setTimeout(function(){
				flash("luz4");
			}, 1100);
		}

		function detenerLucesPares_900(){
			removerClase("luz3", "luz3");
			removerClase("luz4", "luz4");
		}

		function luzMaquina1_900(){
			var luces3 = setTimeout(function(){
				flash("luz6");
			}, 500);	
		}

		function detenerLuzMaquina1_900(){
			removerClase("luz6", "luz6");
		}

		function luzMaquina2_900(){
			var luces3 = setTimeout(function(){
				flash("luz8");
			}, 500);
		}

		function detenerLuzMaquina2_900(){
			removerClase("luz8", "luz8");
		}

		function rotarValvula3_900(){
			rotacionEstatica("valvula3", 60);
		}




		// ---Tubo de ensayo moviéndose por el riel--- //

		function gotaCayendo_900(){
			slideOpen("gota", 26); //aparece la gota
			var movimiento0 = setTimeout(function(){ // la gota cae
				removerTransicion("gota");
			 	avance2("gota", 692, 0.6);
			}, 200);
			var movimiento0 = setTimeout(function(){ // la gota desaparece
				elementoDesaparece("gota", 200);
			}, 800);
		}

		function tuboEnsayoMov1_900(){

			var tuboEnsayo1 = setTimeout(function(){

					var movimiento1 = setTimeout(function(){ // el tubo de ensayo hace el recorrido horizontal
			 		avance("tuboEnsayo1", 3398, 1.2);
					}, 100);

					var movimiento2 = setTimeout(function(){ // hacemos la rotación
			 			rotacionEstatica("tuboEnsayo1", -25);
					}, 1800);

				  	var movimiento3 = setTimeout(function(){ // movemos el tubo en diagonal
			 		moverDiagonal("tuboEnsayo1", 3398, 673, -520, 589, 90);
				 	}, 2000);

					var movimiento4 = setTimeout(function(){ // el tubo desaparece en la máquina
						rotacionEstatica("tuboEnsayo1", -5);
					}, 3000);
					var movimiento5 = setTimeout(function(){ // el tubo desaparece en la máquina
						avance("tuboEnsayo1", 3621, 0.9);
					}, 3300);					
					var movimiento6 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 			elementoDesaparece("tuboEnsayo1", 400);
				 	}, 4000);
			}, 50);
		}

		function tuboEnsayoMov2_900(){

			var tuboEnsayo2 = setTimeout(function(){

					elementoAparece("tuboEnsayo2", 200); 
					slideIn("tuboEnsayo2");

					var movimiento = setTimeout(function(){ // el tubo de ensayo hace el recorrido horizontal 2
			 		avance("tuboEnsayo2", 3782, 1.5);
					}, 1800);

					var movimiento2 = setTimeout(function(){ // hacemos la rotación 2
			 			rotacionEstatica("tuboEnsayo2", -25);
					}, 3000);

				  	var movimiento3 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 		moverDiagonal("tuboEnsayo2", 3782, 573, -400, 493, 90);
				 	}, 3000);

					var movimiento4 = setTimeout(function(){ // el tubo desaparece en la máquina 2
						rotacionEstatica("tuboEnsayo2", 0);
						avance("tuboEnsayo2", 3992, 0.9);
					}, 4300);
					var movimiento5 = setTimeout(function(){ // movemos el tubo en diagonal 2
			 			elementoDesaparece("tuboEnsayo2", 400);
				 	}, 6000);

			}, 1500);
		}


		// ---Cajita moviéndose por el riel--- //

		function cajitaMov1_900(){

			var cajita = setTimeout(function(){

					// 1440x900
					if(screen.availHeight > 799 && (screen.availWidth > 1400) 
	        		&& (screen.availWidth < 1460) && (screen.availHeight < 1025)){

						var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
				 			avance("cajita", 4629, 1.6);
						}, 500);
					}
					//1680x900
					else if(screen.availHeight > 799 && screen.availWidth > 1500){
						var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
				 			avance("cajita", 4641, 1.6);
						}, 500);
					}
					//1280x1024
					else if((screen.availHeight > 900 && screen.availWidth > 1024) 
					&& (screen.availHeight < 1025 && screen.availWidth < 1301)){
						var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
				 			avance("cajita", 4646, 1.6);
						}, 500);
					}

					var sonido = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			caeHoja.play();
					}, 2900);
					var movimiento1 = setTimeout(function(){ // la cajita hace el primer recorrido horizontal
			 			elementoAparece("hoja1", 200);
			 			zoomInDown("hoja1");
					}, 2700);


					var movimiento = setTimeout(function(){ // la cajita hace el primer recorrido horizontal

						cajaMov1.play();

						//1440x900
						if(screen.availHeight > 799 && (screen.availWidth > 1400) 
			        		&& (screen.availWidth < 1460) && (screen.availHeight < 1025)){
								avance("cajita", 5147, 3);
							}
						//1680x900	
						else if(screen.availHeight > 799 && screen.availWidth > 1500){
							avance("cajita", 5301, 3);
						}
						//1280x1024
						else if((screen.availHeight > 900 && screen.availWidth > 1024) 
						&& (screen.availHeight < 1025 && screen.availWidth < 1301)){
							avance("cajita", 5015, 3);
						}
		
					}, 3300);



					var movimiento4 = setTimeout(function(){ // hacemos la rotación

						//1440x900
						if(screen.availHeight > 799 && (screen.availWidth > 1400) 
				        && (screen.availWidth < 1460) && (screen.availHeight < 1025)){
							rotacionEstatica("cajita", -17);
						}
						//1680x900		
						else if(screen.availHeight > 799 && screen.availWidth > 1500){
							rotacionEstatica("cajita", -13);
						}
						else if((screen.availHeight > 900 && screen.availWidth > 1024) 
						&& (screen.availHeight < 1025 && screen.availWidth < 1301)){
							rotacionEstatica("cajita", -19);
						}							

					}, 6300);

					var movimiento5 = setTimeout(function(){ // movemos la cajita en diagonal

						if(screen.availHeight > 799 && (screen.availWidth > 1400) 
		        		&& (screen.availWidth < 1460) && (screen.availHeight < 1025)){
					 		moverDiagonal("cajita", 5147, 523, -400, 468, 50); 
						}
						else if(screen.availHeight > 799 && screen.availWidth > 1500){
					 		moverDiagonal("cajita", 5301, 523, -400, 500, 50);  
						}
						else if((screen.availHeight > 900 && screen.availWidth > 1024) 
						&& (screen.availHeight < 1025 && screen.availWidth < 1301)){
							moverDiagonal("cajita", 5015, 523, -350, 420, 45); 
						}

					}, 7000);	

					var movimiento8 = setTimeout(function(){ // rotamos de nuevo la caja a su angulo normal
			 			elementoDesaparece("cajita", 400);
					}, 8000);				 										

			}, 50);
		}



		// ---telefono y manito que aparecen dentro de las máquinas--- //

		function apareceTlf_900(){
			var telefono = setTimeout(function(){
				elementoAparece("telefono", 100);  //aparece el tlf
			 	zoomInDown("telefono");
				var desapareceTlf = setTimeout(function(){  //desaparece el tlf
						rotateOutRight("telefono");
						elementoDesaparece("telefono", 300);
				}, 2000);
			}, 300);
		}


		function apareceManito_900(){
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

		function productoFinalMov_900(){
			var palanca = setTimeout(function(){
				elementoAparece("productofinal", 200);
			 	zoomIn("productofinal");
			}, 500);
		}

		function palancaFinal_900(){
			rotacionEstatica("palanca2", 35);
			var palanca= setTimeout(function(){ //se abre el cuadro de texto
				rotacionEstatica("palanca2", 0);
			}, 800); 
		}
		
		function logoAzul_900(){
			pulse("logoAzul");
			elementoAparece("manoCursor4", 400);
		}

		function logoFucsia_900(){
			elementoDesaparece("logoAzul", 400);
			rubberBand2("logoFucsia");
		}