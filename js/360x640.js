function AnimacionesMovil(s1, s2, s3){

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

			var mov1= setTimeout(function(){ //las tuercas comienzan a girar
				entradaLlavito1_movil();
			}, 1000);

			$('#dialogoClick').on('click touchend', function() {

				entradaLlavito2_movil();

				var mov1= setTimeout(function(){ //las tuercas comienzan a girar
					tuercaMaquina1_movil();
				}, 2500);
				var mov1= setTimeout(function(){ //Carpeta dentro de máquina
					carpetaMaquina_movil();
				}, 3000);
				var mov3= setTimeout(function(){ // se mueve la aguja1
					carpeta.play();
				 	rotacionNormal("tuercaMaquina1",70);
				}, 4500);
				var mov5= setTimeout(function(){ // Se mueve la aguja2, se encienden las luces rojas
					primeraMaquina1.play();
				}, 5000);
				var mov6= setTimeout(function(){
					tada("ma1");  //animación de la primera máquina
				}, 7000);
				var mov8= setTimeout(function(){ // deja de moverse la primera máquina
					removerClase("ma1", "ma1");
					segundaMaquina.play();
					moverKeyframes("barra1", "recorrerBarras 3s steps(7) infinite");
					moverKeyframes("latido1", "recorrerLatido 3s steps(8) infinite");
				}, 10000);
				var mov8= setTimeout(function(){ // Primer gordito
					productosDesague_movil();
					ideasFlotando.play();
				}, 12000);
				var mov6= setTimeout(function(){ // Pasan los 5 productos por el desagüe
					logoAzul_movil();
				}, 19000);

			 });

		$('#logoAzul1').on('click touchend', function() {

			elementoDesaparece("manoCursor4", 200);
			var mov9= setTimeout(function(){ // Primer gordito
				//movAndroide.play();	
				apareceLlavito_movil("llavi0");
			}, 600);
		});

		$('#equis0').on('click touchend', function() {  //click en cerrar llavito


				var mov9= setTimeout(function(){ // Primer gordito
					desapareceLlavito_movil("llavi0");
				}, 300);

				var mov9= setTimeout(function(){ // Primer gordito
					logoFucsia_movil();
					logoAzul.play();
				}, 1000);
				var mov3= setTimeout(function(){ // sale humo y tiembla la máquina
					primeraMaquina2.play();
					tiemblaMaquina_movil();
				}, 2000);
				var mov4= setTimeout(function(){ // aparece el bombillo
					apareceBombillo_movil();
				}, 3500);
				var mov5= setTimeout(function(){ // el riel de arriba se mueve y se lleva el bombillo
					rielSuperiorMov1_movil();
				}, 4000);
				var mov6= setTimeout(function(){ 
					rielSuperiorMov2_movil();
				}, 7500);
				var mov7= setTimeout(function(){ // el riel de arriba se mueve y se lleva el bombillo

					
					if(es_firefox){
						$(window).scrollLeft(s1);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: s1
						}, 800);
					}
										
				}, 8000);

				var mov9= setTimeout(function(){ // 
					//movAndroide.play();	
					apareceLlavito_movil("llavi2");
				}, 9000);

		}); // FIN DE ACTIVACION 1	

		$('#equis').on('click touchend', function() {  //click cerrando el llavito3


				var mov9= setTimeout(function(){ // 
					desapareceLlavito_movil("llavi2");
				}, 300);

				var mov2= setTimeout(function(){
					rielsuperiorMov3_movil();				
					moverKeyframes("riel3", "recorrerRieles 14s steps(26) infinite");
					p2Maquina1.play();
					tuercaMaquina2_movil();  
				}, 1600);	           // la tuerca comienza a funcionar
				var mov13= setTimeout(function(){ // el carrito rueda por el riel
					humo567();
					carritoYHumo_movil();
				}, 2500);
				var mov14= setTimeout(function(){ // se mueven los pasadores y la aguja
					gordito2_movil();
					moverKeyframes("latido2", "recorrerLatido 3s steps(8) infinite");
				}, 6000);
				var mov15= setTimeout(function(){ 
					detenerKeyframes("riel3");
				}, 7500);
				var mov17= setTimeout(function(){   // hacemos scrolls para la 3ra pagina

					if(es_firefox){
						$(window).scrollLeft(s2);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: s2
						}, 800);
					}						

				}, 11500);

				var mov9= setTimeout(function(){ // llavito
					//movAndroide.play();	
					apareceLlavito_movil("llavi3");
				}, 12500);

		});// FIN ACTIVACION 3

		$('#equis2').on('click touchend', function() {  // equis 2


				var mov9= setTimeout(function(){ // llavito
					desapareceLlavito_movil("llavi3");
				}, 300);

				var mov10= setTimeout(function(){ // llavito
					cajaMov1.play();
					cajitaMov1_movil();
				}, 1000);

				var mov11= setTimeout(function(){ // llavito
					correo1.play();
					shakeCorreo_movil();
				}, 2500);

				var mov12= setTimeout(function(){ // llavito
					lucesPares_movil();	
				}, 3500);

				var mov13= setTimeout(function(){ // llavito

					if(es_firefox){
						$(window).scrollLeft(s3);
					}
					else {
						$('html,body').animate({
			   				 scrollLeft: s3
						}, 800);
					}					

				}, 6000);

				var mov14= setTimeout(function(){ // llavito
					apareceLlavito_movil("llavi4");
				}, 8000);									
											
		});// FIN DE ACTIVACION 5	


		$('#equis3').on('click touchend', function() { // equis 3

				var mov20= setTimeout(function(){ // aparece el llavito4
					desapareceLlavito_movil("llavi4");	
				}, 300);

				var mov21= setTimeout(function(){ // aparece el llavito4
					moverKeyframes("latido3", "recorrerLatido 3s steps(8) infinite");
					rotarValvula3_movil();	
				}, 500);				

				var mov22= setTimeout(function(){ // aparece el llavito4
					luzMaquina1_movil();
				}, 1500);

				var mov23= setTimeout(function(){ // aparece el llavito4
					elementoAparece("manoCursor3",400);
				}, 3000);	

				$('#palanca2').on('click touchend', function() { // equis 3

						var caja= document.getElementById("cajita");

						elementoDesaparece("manoCursor3", 200);

						if( caja.style.display != "none" ){
							palancaFinal.play();
							palancaFinal_movil();
						}
						else {
							palancaFinal.play();
							palancaFinal_movil();
							var mov= setTimeout(function(){
								productoFinalMov_movil();	
							}, 1000);
							var llaviUltimo= setTimeout(function(){
								apareceLlavito_movil("llavi5");
							}, 2500);							
						}
				});

		});// FIN ACTIVACION 7	


}