;(function () {

	'use strict';



	// iPad and iPod detection
	let isiPad = function(){
		return (navigator.platform.indexOf("iPad") !== -1);
	};

  let isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") !== -1) ||
			(navigator.platform.indexOf("iPod") !== -1)
	    );
	};

  let fullHeight = function() {
		if ( !isiPad() || !isiPhone() ) {
			$('.js-fullheight-home').css('height', $(window).height() - $('.fh5co-main-nav').height());
			$(window).resize(function(){
				$('.js-fullheight-home').css('height', $(window).height()  - $('.fh5co-main-nav').height());
			})
		}
	};

	// Loading page
  let loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

  let fh5coTabs = function() {
		// $('.fh5co-tabs-container').
		$('.fh5co-tabs li a').click(function(event){
			event.preventDefault();
			var $this = $(this),
				tab = $this.data('tab');
				$('.fh5co-tabs li').removeClass('active');
				$this.closest('li').addClass('active');
				$this.closest('.fh5co-tabs-container').find('.fh5co-tab-content').removeClass('active');
				$this.closest('.fh5co-tabs-container').find('.fh5co-tab-content[data-tab-content="'+tab+'"]').addClass('active');
		});
	};

  let gridAutoHeight = function() {
		if (!isiPhone() || !isiPad()) {
			$('.fh5co-grid-item').css('height', $('.fh5co-2col-inner').outerHeight()/2);
		}
		$(window).resize(function(){
			if (!isiPhone() && !isiPad()) {
				$('.fh5co-grid-item').css('height', $('.fh5co-2col-inner').outerHeight()/2);
			}
		});
	};

	let sliderSayings = function() {
		$('#fh5co-sayings .flexslider').flexslider({
			animation: "slide",
			slideshowSpeed: 5000,
			directionNav: false,
			controlNav: true,
			smoothHeight: true,
			reverse: true
	  	});
	};

	let offcanvasMenu = function() {
		$('body').prepend('<div id="fh5co-offcanvas" />');
		$('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');

		$('.fh5co-main-nav .fh5co-menu-1 a, .fh5co-main-nav .fh5co-menu-2 a').each(function(){

			let $this = $(this);

			$('#fh5co-offcanvas').append($this.clone());

		});
		// $('#fh5co-offcanvas').append
	};

	let mainMenuSticky = function() {

		let sticky = $('.js-sticky');

		sticky.css('height', sticky.height());
		$(window).resize(function(){
			sticky.css('height', sticky.height());
		});

		let $section = $('.fh5co-main-nav');

		$section.waypoint(function(direction) {

		  	if (direction === 'down') {

			    	$section.css({
			    		'position' : 'fixed',
			    		'top' : 0,
			    		'width' : '100%',
			    		'z-index' : 99999
			    	}).addClass('fh5co-shadow');;

			}

		}, {
	  		offset: '0px'
		});

		$('.js-sticky').waypoint(function(direction) {
		  	if (direction === 'up') {
		    	$section.attr('style', '').removeClass('fh5co-shadow');
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 69; }
		});

	};

	// Parallax
	let parallax = function() {

		// $(window).stellar();
		if (!isiPhone() || isiPad() ) {
 			$(window).stellar({ horizontalScrolling: false });
 		}

	};


	// Burger Menu
	let burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			let $this = $(this);

			if( $('body').hasClass('offcanvas-visible') ) {
				$('body').removeClass('offcanvas-visible fh5co-overflow');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-visible fh5co-overflow');
				$this.addClass('active');
			}

			event.preventDefault();

		});

	};

	let scrolledWindow = function() {

		$(window).scroll(function(){

			let scrollPos = $(this).scrollTop();


		   if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

	};

	// Click outside of offcanvass
	let mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    let container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas-visible') ) {

    			$('body').removeClass('offcanvas-visible');
    			$('.js-fh5co-nav-toggle').removeClass('active');

	    	}


	    }
		});

	};

	let goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function(){

			let $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};


	// Page Nav
	let clickMenu = function() {
		let topVal = ( $(window).width() < 769 ) ? 0 : 58;

		$(window).resize(function(){
			topVal = ( $(window).width() < 769 ) ? 0 : 58;
		});
		$('.fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"])').click(function(event){
			let section = $(this).data('nav-section');

				if ( $('div[data-section="' + section + '"]').length ) {

					$('html, body').animate({
			        	scrollTop: $('div[data-section="' + section + '"]').offset().top - topVal
			    	}, 500, 'easeInOutExpo');

			   }

		    event.preventDefault();

		    // return false;
		});


	};

	// Reflect scrolling in navigation
	let navActive = function(section) {

		$('.fh5co-main-nav a[data-nav-section], #fh5co-offcanvas a[data-nav-section]').removeClass('active');
		$('.fh5co-main-nav, #fh5co-offcanvas').find('a[data-nav-section="'+section+'"]').addClass('active');

	};

	let navigationSection = function() {

		let $section = $('div[data-section]');

		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}

		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};

	// Document on load.
	$(function(){

		fullHeight();
		loaderPage();
		fh5coTabs();
		gridAutoHeight();

		// sliderMain();
		// sliderSayings();
		offcanvasMenu();
		mainMenuSticky();
		parallax();
		burgerMenu();
		scrolledWindow();
		mobileMenuOutsideClick();
		clickMenu();
		navigationSection();
		goToTop();

	});

}());
