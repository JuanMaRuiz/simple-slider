(function($){
	$.jSlider = function( options ){
		if ( typeof(options) == "undefined" || options == null ) { options = {}; };
		var jsldr = {
			options: $.extend({
			// Set options
			'speed': 0,			// Face speed
			'autoswitch': true,		// Auto slider options
			'autoswitch_speed': 5000 // Auto slider speed
			}, options),
			nextSlide: function() {
				$('.active').removeClass('active').addClass('oldActive');

				if($('.oldActive').is(':last-child')) {
					$('.slide').first().addClass('active');
				}else{
					$('.oldActive').next().addClass('active');
				}

				$('.oldActive').removeClass('oldActive');
				$('.slide').fadeOut(jsldr.options.speed);
				$('.active').fadeIn(jsldr.options.speed);
			},
			previewSlide: function() {
				$('.active').removeClass('active').addClass('oldActive');

				if($('.oldActive').is(':first-child')) {
					$('.slide').last().addClass('active');
				}else{
					$('.oldActive').prev().addClass('active');
				}

				$('.oldActive').removeClass('oldActive');
				$('.slide').fadeOut(jsldr.options.speed);
				$('.active').fadeIn(jsldr.options.speed);
			},
			init: function() {
				if(jsldr.options.autoswitch === true){
					setInterval( jsldr.nextSlide, jsldr.options.autoswitch_speed);
				}
			}
		};

		return {
			next: jsldr.nextSlide,
			prev: jsldr.previewSlide,
			init: jsldr.init
		}
	}

})(jQuery);

var jsldr = $.jSlider({
	speed: 500,			// Face speed
	autoswitch: true,		// Auto slider options
	autoswitch_speed: 5000 // Auto slider speed

});

jsldr.init();

$('#next').on('click', jsldr.next);

// Preview Handler

$('#prev').on('click', jsldr.prev);