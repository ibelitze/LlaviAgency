function Animacionesmovil2(s1, s2, s3){

	var valvula3 = document.getElementById('valvula3');

			var mov1= setTimeout(function(){ //las tuercas comienzan a girar
				entradaLlavito1_movil2();
			}, 1000);

			$('#dialogoClick').on('click touchend', function() {

				entradaLlavito2_movil2();

				var mov1= setTimeout(function(){ //las tuercas comienzan a girar
					tuercaMaquina1_movil2();
				}, 2500);
				var mov1= setTimeout(function(){ //Carpeta dentro de máquina
					carpetaMaquina_movil2();
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
					productosDesague_movil2();
					ideasFlotando.play();
				}, 12000);
				var mov6= setTimeout(function(){ // Pasan los 5 productos por el desagüe
					logoAzul_movil2();
				}, 19000);

			 });

		$('#logoAzul1').on('click touchend', function() {

			elementoDesaparece("manoCursor4", 200);
			var mov9= setTimeout(function(){ // Primer gordito
				//movAndroide.play();	
				apareceLlavito_movil2("llavi0");
			}, 600);
		});

		$('#equis0').on('click touchend', function() {  //click en cerrar llavito


				var mov9= setTimeout(function(){ // Primer gordito
					desapareceLlavito_movil2("llavi0");
				}, 300);

				var mov9= setTimeout(function(){ // Primer gordito
					logoFucsia_movil2();
					logoAzul.play();
				}, 1000);
				var mov3= setTimeout(function(){ // sale humo y tiembla la máquina
					primeraMaquina2.play();
					tiemblaMaquina_movil2();
				}, 2000);
				var mov4= setTimeout(function(){ // aparece el bombillo
					apareceBombillo_movil2();
				}, 3500);
				var mov5= setTimeout(function(){ // el riel de arriba se mueve y se lleva el bombillo
					rielSuperiorMov1_movil2();
				}, 4000);
				var mov6= setTimeout(function(){ 
					rielSuperiorMov2_movil2();
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
					apareceLlavito_movil2("llavi2");
				}, 9000);

		}); // FIN DE ACTIVACION 1	

		$('#equis').on('click touchend', function() {  //click cerrando el llavito3


				var mov9= setTimeout(function(){ // 
					desapareceLlavito_movil2("llavi2");
				}, 300);

				var mov2= setTimeout(function(){
					rielsuperiorMov3_movil2();				
					moverKeyframes("riel3", "recorrerRieles 14s steps(26) infinite");
					p2Maquina1.play();
					tuercaMaquina2_movil2();  
				}, 1600);	           // la tuerca comienza a funcionar
				var mov13= setTimeout(function(){ // el carrito rueda por el riel
					humo567();
					carritoYHumo_movil2();
				}, 2500);
				var mov14= setTimeout(function(){ // se mueven los pasadores y la aguja
					gordito2_movil2();
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
					apareceLlavito_movil2("llavi3");
				}, 12500);

		});// FIN ACTIVACION 3

		$('#equis2').on('click touchend', function() {  // equis 2


				var mov9= setTimeout(function(){ // llavito
					desapareceLlavito_movil2("llavi3");
				}, 300);

				var mov10= setTimeout(function(){ // llavito
					cajaMov1.play();
					cajitaMov1_movil2();
				}, 1000);

				var mov11= setTimeout(function(){ // llavito
					correo1.play();
					shakeCorreo_movil2();
				}, 2500);

				var mov12= setTimeout(function(){ // llavito
					lucesPares_movil2();	
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
					apareceLlavito_movil2("llavi4");
				}, 8000);									
											
		});// FIN DE ACTIVACION 5	


		$('#equis3').on('click touchend', function() { // equis 3

				var mov20= setTimeout(function(){ // aparece el llavito4
					desapareceLlavito_movil2("llavi4");	
				}, 300);

				var mov21= setTimeout(function(){ // aparece el llavito4
					moverKeyframes("latido3", "recorrerLatido 3s steps(8) infinite");
					rotarValvula3_movil2();	
				}, 500);				

				var mov22= setTimeout(function(){ // aparece el llavito4
					luzMaquina1_movil2();
				}, 1500);

				var mov23= setTimeout(function(){ // aparece el llavito4
					elementoAparece("manoCursor3",400);
				}, 3000);	

				$('#palanca2').on('click touchend', function() { // equis 3

						var caja= document.getElementById("cajita");

						elementoDesaparece("manoCursor3", 200);

						if( caja.style.display != "none" ){
							palancaFinal.play();
							palancaFinal_movil2();
						}
						else {
							palancaFinal.play();
							palancaFinal_movil2();
							var mov= setTimeout(function(){
								productoFinalMov_movil2();	
							}, 1000);
							var llaviUltimo= setTimeout(function(){
								apareceLlavito_movil2("llavi5");
							}, 2500);							
						}
				});

		});// FIN ACTIVACION 7	


}