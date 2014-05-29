$(document).ready(function (){

	var cache, isExpandido = false, isExpandido2 = false, _duracion;

	$('#misturnos').on('click', function (){
		cache = "up";
		$(this).parent().hide('slide', {direction:'up'}, 'slow').find('.panel').hide();
		$('#panel-turno').show('slide', {direction:'down'}, 'slow');
	});

	$('#nueva').on('click', function (){
		cache = "down";
		$(this).parent().hide('slide', {direction:'down'}, 'slow').find('.panel').hide();
		$('#game-area').show('slide', {direction:'up'}, 'slow');
	});

	$('#esperando').on('click', function (){
		cache = "left";
		$(this).parent().hide('slide', {direction:'left'}, 'slow').find('.panel').hide();
		$('#panel-espera').show('slide', {direction:'rigth'});
	});

	$('#mihistoria').on('click', function (){
		cache = "rigth";
		$(this).parent().hide('slide', {direction:'rigth'}, 'slow').find('.panel').hide();
		$('#panel-historial').show('slide', {direction:'left'});
	});

	$('.regresar').on('click', function (e){
		e.preventDefault();
		$(this).parent().hide('fade');
		$('#bienvenida').show('slide', {direction:cache}, 'slow');
	});

	$('#menu').click( function (e){
		e.preventDefault();
		if (!isExpandido) {
			_duracion = 800;
			$('#nav-menu').animate({'margin-left':'-15em'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-left':'15em'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-right':'0'}, {duration : _duracion, queue : false});
		} else{
			_duracion = 500;
			$('#nav-menu').animate({'margin-left':'0'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-left':'0'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-right':'0'}, {duration : _duracion, queue : false});
		}
		isExpandido = !isExpandido;
	});

	$('#chat').click( function (e){
		e.preventDefault();
		if (!isExpandido2) {
			_duracion = 800;
			$('#chat-conectados').animate({'margin-right':'-15em'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-left':'-15em'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-right':'15em'}, {duration : _duracion, queue : false});
		} else{
			_duracion = 500;
			$('#chat-conectados').animate({'margin-right':'0'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-right':'0'}, {duration : _duracion, queue : false});
			$('#container').animate({'margin-left':'0'}, {duration : _duracion, queue : false});
		}
		isExpandido2 = !isExpandido2;
	});

	$("#menu").click(function(){
		$("#container").toggleClass("active");
		$("#nav-menu").toggleClass("active");
		$("#chat-conectados").toggleClass("active");
	});
});