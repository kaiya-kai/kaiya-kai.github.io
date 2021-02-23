/*-----------------------------------------------------------------------------------
    Template Name: Onitir IT solution html template
    Template URI: https://webtend.biz/onitir
    Author: WebTend
    Author URI: https://www.webtend.com
    Version: 1.0

	Note: This is Main js File For custom and jQuery plugins activation Code..
-----------------------------------------------------------------------------------

/*---------------------------
	JS INDEX
	===================
    01. Preloader
    02. Scroll to top
    03. Banner Slider One
    04. Active EasyPieChart
    05. Active CounterToUp
	06. Active Progress bars
    07. Click For gtToTop
    08. Magnific Popup
    09. Team Slider
    10. Testimonial Slider
    11. Service Slider
    12. Testimonial Slider Two
    13. Clinet Carousel
    14. Portfolio Gird
    15. Portfolio Masonry
    16. Portfolio Slider
    17. Bootstrap Accordion
    18. Banner Slider Two
    19. OFF Canvas Menu
    20. Feature Masonry
    21. Mobile Menu
    22. Sticky Header

-----------------------------*/

var onitirDoc;

(function ($) {
	'use strict';
	onitirDoc = {
		init: function () {
			 
			this.gtToTop();
			this.magnificPopUp();
	 
		},
		// Slider One
		 
		 
		// Click For gtToTop
		gtToTop() {
			$('.go-top').on('click', function () {
				$('html, body').animate(
					{
						scrollTop: '0',
					},
					1200
				);
			});
		},
		// Magnific Popup
		magnificPopUp() {
			$('.popup-video').magnificPopup({
				
				type: 'image'

				// other options
			});
		},
		// Team Slider
		 
		 
	};

	// Document Ready
	$(document).ready(function () {
		onitirDoc.init();
	});

	// Window Load
	$(window).on('load', function () {

		// Preloader111
		$('#preloader').delay(500).fadeOut(500);
	});

	// Window Scroll
	$(window).on('scroll', function () {
		// Scroll to top
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');

		// Sticky Header
		var scroll = $(window).scrollTop();
		if (scroll < 110) {
			$('header.sticky-header').removeClass('sticky');
		} else {
			$('header.sticky-header').addClass('sticky');
		}
	});
})(jQuery);
