$(document).ready(function (){

	var isVisible = false;

	$('#misturnos').on('click', function (){
		$(this).parent().hide('slide', {direction:'up'}, 'slow').find('.panel').hide();
		$('#panel-turno').show('slide', {direction:'down'}, 'slow');
	});

	$('#nueva').on('click', function (){
		$(this).parent().hide('slide', {direction:'down'}, 'slow').find('.panel').hide();
	});

	$('#esperando').on('click', function (){
		$(this).parent().hide('slide', {direction:'left'}, 'slow').find('.panel').hide();
		$('#panel-espera').show('slide', {direction:'rigth'});
	});

	$('#mihistoria').on('click', function (){
		$(this).parent().hide('slide', {direction:'rigth'}, 'slow').find('.panel').hide();
		$('#panel-historial').show('slide', {direction:'left'});
	});

	$('#menu').on('click', function (e){
		e.preventDefault();
		if (!isVisible) {
			$('#container').animate({marginLeft : '15em'}, 600);
			$('#nav-menu').animate({marginLeft : '-15em'}, 600);
		} else{
			$('#container').animate({marginLeft : '0'});
			$('#nav-menu').animate({marginLeft : '0'});
		}
		isVisible = !isVisible;
	});
});