function Animaciones900(r1, r2, r3, r4, s1, s2, s3) { 

	var activacion1= document.getElementById('equis0'); // listo
	var activacion2= document.getElementById('text1'); //listo
	var activacion3= document.getElementById('equis'); //listo
	var activacion4= document.getElementById('text2'); //listo
	var activacion5= document.getElementById('equis2'); //listo
	var activacion6= document.getElementById('text3'); // listo
	var activacion7= document.getElementById('equis3'); //listo
	var activacion8= document.getElementById('text4');  //listo
	var activacion9= document.getElementById('equis4'); //listo
	var activacion10= document.getElementById('text5'); //listo
	var activacion11= document.getElementById('equis5'); //listo
	var activacion12= document.getElementById('text6');  //listo
	var activacion13= document.getElementById('equis6'); //listo
	var activacion14= document.getElementById('text7'); //listo	
	var activacion15= document.getElementById('equis7'); //listo
	var activacion16= document.getElementById('text8'); //listo	
	var activacion17= document.getElementById('equis8'); //listo
	var activacion20= document.getElementById('text9'); //listo
	var activacion21= document.getElementById('palanca2'); //listo
	var activacion22= document.getElementById('logoAzul1'); //listo
	var activacion19= document.getElementById('miniWeb'); //listo
	var activacion23= document.getElementById('dialogoClick'); //listo
	var valvula3 = document.getElementById('valvula3');



	//RESOLUCION 1600 X 900

			var mov1= setTimeout(function(){ //las tuercas comienzan a girar
				entradaLlavito1_900();
			}, 1000);
			

			$('#dialogoClick').on('click touchend', function() {

				entradaLlavito2_900();

				var mov1= setTimeout(function(){ //las tuercas comienzan a girar
					tuercaMaquina1_900();
				}, 2500);
				var mov1= setTimeout(function(){ //Carpeta dentro de máquina
					carpetaMaquina_900();
				}, 3000);
				var mov3= setTimeout(function(){ // se mueve la aguja1
					carpeta.play();
					aguja1_900();
				 	rotacionNormal("tuercaMaquina1",70);
				}, 4500);
				var mov4= setTimeout(function(){ // se mueven los pasadores
					pasadores1_900();
				}, 7000);
				var mov5= setTimeout(function(){ // Se mueve la aguja2, se encienden las luces rojas
					primeraMaquina1.play();
				}, 5000);
				var mov6= setTimeout(function(){
					tada("ma1");  //animación de la primera máquina
				}, 7000);
				var mov8= setTimeout(function(){ // deja de moverse la primera máquina
					removerClase("ma1", "ma1");
					aguja2_900();
					segundaMaquina.play();
					lucesMaquina_900();
					moverKeyframes("barra1", "recorrerBarras 3s steps(7) infinite");
					moverKeyframes("latido1", "recorrerLatido 3s steps(8) infinite");
				}, 10000);
				var mov8= setTimeout(function(){ // Primer gordito
					productosDesague_900();
					ideasFlotando.play();
				}, 12000);
				var mov6= setTimeout(function(){ // Pasan los 5 productos por el desagüe
					logoAzul_900();
				}, 19000);

			});


		$('#logoAzul1').on('click touchend', function() {
			elementoDesaparece("manoCursor4", 200);
			var mov9= setTimeout(function(){ // Primer gordito
				//movAndroide.play();	
				apareceLlavito_900("llavi0");
			}, 600);
		});
			

		$('#equis0').on('click touchend', function() { //click en cerrar llavito

			if(document.getElementById('1').style.backgroundColor== "red"){

				var mov9= setTimeout(function(){ // Primer gordito
					desapareceLlavito_900("llavi0");
				}, 300);
			}
			else {

				var mov9= setTimeout(function(){ // Primer gordito
					desapareceLlavito_900("llavi0");
					document.getElementById('1').style.backgroundColor= "red";
				}, 300);

				var mov9= setTimeout(function(){ // Primer gordito
					logoFucsia_800();
					logoAzul.play();
				}, 1000);
				
				var mov1= setTimeout(function(){ // Primer gordito
					gordito8_900();
				}, 2000); 
				var mov8= setTimeout(function(){ // Segundo gordito	
					gordito1_900();
					lucesMaquinaDet_900();
					detenerKeyframes("barra1");
					detenerKeyframes("latido1");
				}, 3200); 
				var mov2= setTimeout(function(){ // Primer gordito
					giroManilla.play();
					pasadores2_900();
				}, 5000); 
				var mov3= setTimeout(function(){ // sale humo y tiembla la máquina
					humo1_800();
					primeraMaquina2.play();
					tiemblaMaquina_900();
				}, 5500);
				var mov4= setTimeout(function(){ // aparece el bombillo
					apareceBombillo_900();
				}, 8000);
				var mov5= setTimeout(function(){ // el riel de arriba se mueve y se lleva el bombillo
					rielSuperiorMov1_900();
				}, 9000);
				var mov6= setTimeout(function(){ 
					rielSuperiorMov2_900();
				}, 13000);
				var mov7= setTimeout(function(){ // el riel de arriba se mueve y se lleva el bombillo

					if(es_firefox){
						$(window).scrollLeft(s1);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: s1
						}, 800);
					}	

					var barra1= document.getElementById('barraLeft');
					barra1.style.display = 'block';						
				}, 13500);
				var mov8= setTimeout(function(){ // 
					elementoAparece("text1", 600);
					elementoAparece("manoCursor", 200);
				}, 14000);

				activacion2.onclick= function(){
					elementoDesaparece("manoCursor", 200);
					var mov9= setTimeout(function(){ // 
						//movAndroide.play();	
						apareceLlavito_900("llavi2");
					}, 600);
				}

				
			} // FIN DEL ELSE
		}); // FIN DE ACTIVACION 1


		$('#equis').on('click touchend', function() {  //click cerrando el llavito3

			if(document.getElementById('2').style.backgroundColor== "red"){
				var mov9= setTimeout(function(){ // 
					desapareceLlavito_900("llavi2");
				}, 300);
			}
			else {

				var mov9= setTimeout(function(){ // 
					desapareceLlavito_900("llavi2");
					document.getElementById('2').style.backgroundColor= "red";
				}, 300);   //desaparece llavito3 y se activa la maquinaria

				var mov2= setTimeout(function(){
					rielsuperiorMov3_900();				
					moverKeyframes("riel3", "recorrerRieles 14s steps(26) infinite");
					p2Maquina1.play();
					tuercaMaquina2_900();  
				}, 1600);	           // la tuerca comienza a funcionar
				var mov13= setTimeout(function(){ // el carrito rueda por el riel
					humo567();
					carritoYHumo_900();
				}, 2500);
				var mov14= setTimeout(function(){ // se mueven los pasadores y la aguja
					palancas1_900();
					gordito2_900();
					aguja3_900();
					moverKeyframes("latido3", "recorrerLatido 3s steps(8) infinite");
				}, 6000);
				var mov15= setTimeout(function(){ 
					rielSuperiorMovHorizontal_900(r1);  //se mueve el riel sobre las redes sociales
					detenerKeyframes("riel3");
				}, 7500);
				var mov17= setTimeout(function(){   // hacemos scrolls para la 3ra pagina
					elementoDesaparece("text1", 400);
					rielSuperiorMovHorizontal_900(r2);

					if(es_firefox){
						$(window).scrollLeft(s2);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: s2
						}, 800);
					}						

				}, 11500);
				var mov18= setTimeout(function(){   // hacemos scrolls para la 3ra pagina
					elementoAparece("text3", 600);	
					elementoAparece("manoCursor", 200);
				}, 13000);

			} //FIN DEL ELSE
		});// FIN ACTIVACION 3

		$('#text3').on('click touchend', function() {
			elementoDesaparece("manoCursor", 200);
			var mov9= setTimeout(function(){ // llavito
				//movAndroide.play();	
				apareceLlavito_900("llavi3");
			}, 600);
		});


		$('#equis2').on('click touchend', function() {  // equis 2

			if(document.getElementById('3').style.backgroundColor== "red"){

				var mov9= setTimeout(function(){ // llavito
					desapareceLlavito_900("llavi3");
				}, 300);
			}
			else {

				var mov9= setTimeout(function(){ // llavito
					desapareceLlavito_900("llavi3");
					document.getElementById('3').style.backgroundColor= "red";
				}, 300);

				var mov9= setTimeout(function(){ // llavito
					ADN_800();
				}, 500);
				
				var mov19= setTimeout(function(){ 
					gotaCayendo_900();
				}, 1500);
				var movr1= setTimeout(function(){ 
					gota1.play();
				}, 2000);				
				var mov20= setTimeout(function(){ // se mueve el primer tubo de ensayo
					moverKeyframes("riel1", "recorrerRieles 14s steps(26) infinite");
					moverKeyframes("riel2", "recorrerRieles 14s steps(26) infinite");
					carril2.play();
					tuboEnsayoMov1_900();
					moverKeyframes("riel4", "recorrerRieles 14s steps(26) infinite");
					moverKeyframes("riel5", "recorrerRieles 14s steps(26) infinite");
				}, 2800);
				var mov21= setTimeout(function(){ // movimientos de tubos de ensayo
					maquinaTubo.play();
					tuercaMaquina3_900();
					tuboEnsayoMov2_900();
				}, 3500);	
				var mov21= setTimeout(function(){ // movimientos de tubos de ensayo
					carril2.play();
				}, 3800);						
				var mov23= setTimeout(function(){ // movimientos del transformador
					tuercaMaquina4_900();
					aguja5_900();
					moverKeyframes("barra2", "recorrerBarras 3s steps(8) infinite");
					luzMaquina2_900();	
				}, 5500);
				var mov24= setTimeout(function(){ // movimiento del transformador 2
					tada("transformador");
					transformador1.play();
				}, 9500);
				var mov25= setTimeout(function(){ // el mundito pasa por la máquina
					removerClase("transformador", "transformador");
					mundoRueda_900();
					planeta.play();
				}, 12500);
				var mov26= setTimeout(function(){ // hacemos scroll hasta la pantalla 4
					elementoDesaparece("text3", 600);
					rielSuperiorMovHorizontal_900(r3);

					if(es_firefox){
						$(window).scrollLeft(s3);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: s3
						}, 800);
					}	

					var barra1= document.getElementById('barraRight');
					barra1.style.display = 'none';
					
				}, 17000);
				var mov27= setTimeout(function(){ // aparece el llavito4
					elementoAparece("text2", 600);
					elementoAparece("manoCursor", 200);	
				}, 18000);
			} // FIN DEL ELSE
		});// FIN DE ACTIVACION 5



		$('#text2').on('click touchend', function() {
			elementoDesaparece("manoCursor", 400);
			var mov28= setTimeout(function(){ // aparece el llavito4
				//movAndroide.play();	
				apareceLlavito_900("llavi4");
			}, 600);
		});



		$('#equis3').on('click touchend', function() { // equis 3

			if(document.getElementById('4').style.backgroundColor== "red"){

				var llavito4= setTimeout(function(){
					//movAndroide.play();	
					desapareceLlavito_900("llavi4");
					elementoDesaparece("text3", 600);
					elementoAparece("text9", 300);					
				}, 1000);
				
			}
			else {
				var mov28= setTimeout(function(){ // aparece el llavito4
					desapareceLlavito_900("llavi4");
					document.getElementById('4').style.backgroundColor= "red";	
				}, 300);
				var mov28= setTimeout(function(){ // corre el gordito por la tubería
					moverKeyframes("riel6", "recorrerRieles 14s steps(26) infinite");
					cajaMov1.play();
					cajitaMov1_900();
					gordito3_900();
				}, 2000);
				var mov29= setTimeout(function(){ // se encienden las luces de la laptop
					lucesLaptop_900();
				}, 3500);
				var mov32= setTimeout(function(){   // aparece y desaparece el tlf en la máquina
					apareceTlf_900();
				}, 4500);
				var mov33= setTimeout(function(){ // segundo movimiento de la cajita, corre el riel
					elementoDesaparece("text2", 400);	
					correo1.play();		
					shakeCorreo_900();
					palancas2_900();  // se mueven las palancas de la máquina
					pasador3_900();   // se mueve el botoncito verde
					lucesPares_900();    // se encienden las luces
					moverKeyframes("riel7", "recorrerRieles 14s steps(26) infinite");
					moverKeyframes("riel8", "recorrerRieles 14s steps(26) infinite");
					moverKeyframes("riel9", "recorrerRieles 14s steps(26) infinite");
					moverKeyframes("barra3", "recorrerBarras 3s steps(7) infinite");
				}, 5500);  
				var mov28= setTimeout(function(){   //scroll a la última pantalla
					elementoDesaparece("text2", 400);
				}, 6000);
				var mov35= setTimeout(function(){ // ultimo llavito
					rielSuperiorMovHorizontal_900(r4);
					penultimaMaq.play();
					moverKeyframes("latido2", "recorrerLatido 3s steps(8) infinite");
					rotarValvula3_900();	
					apareceManito_900();	
				}, 7500);
				var mov37= setTimeout(function(){ // luces y mov. última máquina
					aguja6_900();
					luzMaquina1_900();
					elementoAparece("manoCursor3",400);
				}, 10000);
			} //FIN DE ELSE
		});// FIN ACTIVACION 7

		$('#text9').on('click touchend', function() {
			
			elementoDesaparece("manoCursor", 200);

			var llavito4= document.getElementById("llavi4");

			if(llavito4.style.top != 1200+"px"){
				//movAndroide.play();	
				desapareceLlavito_900("llavi4");

				var llavito4= setTimeout(function(){
					//movAndroide.play();	
					apareceLlavito_900("llavi5");
				}, 2000);
			} 
			else {

				var mov28= setTimeout(function(){ // aparece el llavito4
					//movAndroide.play();	
					apareceLlavito_900("llavi5");
				}, 600);

			}

			
		});


		$('#palanca2').on('click touchend', function() {

				var caja= document.getElementById("cajita");

				elementoDesaparece("manoCursor3", 200);

				if( caja.style.display != "none" ){
					palancaFinal.play();
					palancaFinal_900();
				}
				else {
					palancaFinal.play();
					palancaFinal_900();
					var mov= setTimeout(function(){
						elementoAparece("text9", 300);
						elementoAparece("manoCursor", 200);	
						productoFinalMov_900();	
					}, 1000);
				}
		});

}//FIN DEL SCRIPT	