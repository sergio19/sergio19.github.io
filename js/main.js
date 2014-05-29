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

	/*$('#menu').on('click', function (e){
		e.preventDefault();
		if (!isVisible) {
			$('#container').animate({marginLeft : '15em'}, 600);
			$('#nav-menu').animate({marginLeft : '-15em'}, 600);
		} else{
			$('#container').animate({marginLeft : '0'});
			$('#nav-menu').animate({marginLeft : '0'});
		}
		isVisible = !isVisible;
	});*/

	var isExpandido = false,
		_duracion;
	$('#menu').click( function(){
		if (!isExpandido) {
			_duracion = 800;
			$('#nav-menu').animate({left:'-200'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-left':'200px'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-right':'-200px'}, {duration : _duracion, queue : false});
		} else{
			_duracion = 500;
			$('#nav-menu').animate({left:'-200'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-left':'0'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-right':'0'}, {duration : _duracion, queue : false});
		}
		isExpandido = !isExpandido;
	});
});