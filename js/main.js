$(document).ready(function (){

	var cache, isMenuVisible = false, isChatVisible = false, _duracion, lastPos = 0;;

	iniciar();

	function iniciar(){
		$('#bienvenida').find('.btn-bienvenida').each(function (i, item){
			setTimeout(function(el) {
	            $(item).show('slide', {direction:'left'}, 500);
	        }, i * 500, $(this));
		});
	}

	$('#misturnos').on('click', function (){
		cache = "left";
		$(this).parent().hide('slide', {direction:'left'}, 'slow').find('.panel').hide();
		$('#panel-turno').show('slide', {direction:'rigth'}, 'slow');
	});

	$('#nueva').on('click', function (){
		cache = "down";
		$(this).parent().hide('slide', {direction:'down'}, 'slow').find('.panel').hide();
		$('#game-area').show('slide', {direction:'up'}, 'slow');
	});

	$('#esperando').on('click', function (){
		cache = "rigth";
		$(this).parent().hide('slide', {direction:'rigth'}, 'slow').find('.panel').hide();
		$('#panel-espera').show('slide', {direction:'left'});
	});

	$('#mihistoria').on('click', function (){
		cache = "up";
		$(this).parent().hide('slide', {direction:'up'}, 'slow').find('.panel').hide();
		$('#panel-historial').show('slide', {direction:'down'});
	});

	$('.regresar').on('click', function (e){
		e.preventDefault();
		$(this).parent().hide('fade').find('.panel').hide();
		$('#bienvenida').show('slide', {direction:cache}, 'slow');
	});

	$('#menu').click( function (e){
		e.preventDefault();
		if (!isChatVisible) {
			if (!isMenuVisible) {
				mostrarMenu();
			} else{
				ocultarMenu();		
			}
			isMenuVisible = !isMenuVisible;
		}
	});

	$('#chat').click( function (e){
		e.preventDefault();
		if (!isMenuVisible) {
			if (!isChatVisible) {
				mostrarChat();		
			} else{
				ocultarChat();
			}
			isChatVisible = !isChatVisible;
		}
	});

/*	$( "#container" ).on( "swipeleft", swipeleftHandler );
	$( "#container" ).on( "swiperight", swipeRigthHandler );*/

	$('body').on({
		swipeleft : function (e){
			if (!isChatVisible && !isMenuVisible) {
	    		mostrarChat();
	    		isChatVisible = true;
	    	} else if (isMenuVisible) {
	    		ocultarMenu();
	    		isMenuVisible = false;
	    	}
		},
		swiperight : function (e){
			if (!isMenuVisible && !isChatVisible) {
				mostrarMenu();
				isMenuVisible = !isMenuVisible;
			} else if (isChatVisible) {
				ocultarChat();
				isChatVisible = !isChatVisible;
			}
		}
	});

	function mostrarMenu(){
		_duracion = 800;
		$('#nav-menu').animate({'margin-left':'-15em'}, {duration : _duracion, queue : false});
		$('#menu-bg').animate({'margin-left':'-15em'}, {duration : _duracion, queue : false});
		$('#container').animate({'margin-left':'15em'}, {duration : _duracion, queue : false});
		$('#container').animate({'margin-right':'-15em'}, {duration : _duracion, queue : false});
	}

	function ocultarMenu(){
		_duracion = 500;
		$('#nav-menu').animate({'margin-left':'0'}, {duration : _duracion, queue : false});
		$('#menu-bg').animate({'margin-left':'0'}, {duration : _duracion, queue : false});
		$('#container').animate({'margin-left':'0'}, {duration : _duracion, queue : false});
		$('#container').animate({'margin-right':'0'}, {duration : _duracion, queue : false});	
	}

	function mostrarChat(){
		_duracion = 800;
		$('#chat-conectados').animate({'margin-right':'-15em'}, {duration : _duracion, queue : false});
		$('#container').animate({'margin-left':'-15em'}, {duration : _duracion, queue : false});
		$('#container').animate({'margin-right':'15em'}, {duration : _duracion, queue : false});
	}

	function ocultarChat(){
		_duracion = 500;
		$('#chat-conectados').animate({'margin-right':'0'}, {duration : _duracion, queue : false});
		$('#container').animate({'margin-right':'0'}, {duration : _duracion, queue : false});
		$('#container').animate({'margin-left':'0'}, {duration : _duracion, queue : false});
	}

	$("#menu").click(function(){
		$("#container").toggleClass("active");
		$("#nav-menu").toggleClass("active");
		$("#chat-conectados").toggleClass("active");
		$("#menu-bg").addClass("active");
	});
});