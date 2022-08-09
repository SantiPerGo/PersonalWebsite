/*
   
    Template Name : WebRes - Personal Resume Template
    Author : UiPasta Team
    Website : https://www.uipasta.com/
    Support : https://www.uipasta.com/contact-us/
	
	
*/



/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Tooltip
   7. Ajaxchimp for Subscribe Form
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
 

*/
particlesJS("particles-js", 
    {"particles":{"number":{"value":50,"density":
    {"enable":true,"value_area":1000}},"color":{"value":"#000"},
    "shape":{"type":"circle","stroke":{"width":0,"color":"#000"},
    "polygon":{"nb_sides":5},"image":{"src":"img/github.svg",
    "width":100,"height":100}},"opacity":{"value":0.5,"random":false,
    "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
    "size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,
    "size_min":0.1,"sync":false}},"line_linked":
    {"enable":true,"distance":150,"color":"#000","opacity":1,"width":1},
    "move":{"enable":true,"speed":6,"direction":"none","random":false,
    "straight":false,"out_mode":"out","bounce":false,"attract":
    {"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":
    {"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
    "onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":
    {"distance":400,"line_linked":{"opacity":1}},"bubble":
    {"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
    "repulse":{"distance":150,"duration":0.4},"push":{"particles_nb":4},
    "remove":{"particles_nb":2}}},"retina_detect":true});

(function ($) {
    'use strict';

    jQuery(document).ready(function () {

       /* Preloader */
		
        $(window).load(function () {
            $('.preloader').delay(800).fadeOut('slow');
        });
		
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		

        
        /* Tooltip */
         
         $(function () {
           $('[data-toggle="tooltip"]').tooltip()
           })
		   
		 
        
        /* Ajaxchimp for Subscribe Form */
		
         $('#mc-form').ajaxChimp();
		   
		   
  
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


       
        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
            gallery: { enabled: true },
			zoom: { enabled: true,
			        duration: 500
					
          },
		  
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }
		  
		  
          });
	   

          $('.portfolio-popup2').magnificPopup({
            type: 'iframe',
            iframe: {
                markup: '<style>.mfp-iframe-holder .mfp-content {max-width: 900px;height:500px}</style>'+ 
                        '<div class="mfp-iframe-scaler" >'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '</div></div>',
                patterns: {
                            youtube: {
                               index: 'youtube.com/', 
                               id: 'v=', 
                               src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
                           }
                }
            },			
          });
		  
         
		 
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: false,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "fadeUp"
        });
		
		
		
		
        /* Statistics Counter */
		
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });
              
		   
            });

   })(jQuery);