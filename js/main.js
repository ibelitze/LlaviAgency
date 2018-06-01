jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn').on('click touchend', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	$('.cd-btn2').on('click touchend', function(event){
		event.preventDefault();
		$('.cd-panel2').addClass('is-visible');
	});
	$('.cd-btn3').on('click touchend', function(event){
		event.preventDefault();
		$('.cd-panel3').addClass('is-visible');
	});
	$('.cd-btn4').on('click touchend', function(event){
		event.preventDefault();
		$('.cd-panel4').addClass('is-visible');
	});


	//clode the lateral panel
	$('.cd-panel').on('click touchend', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
	$('.cd-panel2').on('click touchend', function(event){
		if( $(event.target).is('.cd-panel2') || $(event.target).is('.cd-panel-close2') ) { 
			$('.cd-panel2').removeClass('is-visible');
			event.preventDefault();
		}
	});
	$('.cd-panel3').on('click touchend', function(event){
		if( $(event.target).is('.cd-panel3') || $(event.target).is('.cd-panel-close3') ) { 
			$('.cd-panel3').removeClass('is-visible');
			event.preventDefault();
		}
	});
	$('.cd-panel4').on('click touchend', function(event){
		if( $(event.target).is('.cd-panel4') || $(event.target).is('.cd-panel-close4') ) { 
			$('.cd-panel4').removeClass('is-visible');
			event.preventDefault();
		}
	});
	
});