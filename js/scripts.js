$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	loop:true,
		 margin:10,
		 nav:true,
		 autoplay:true,
		 autoplayTimeout:3000,
		 navText: [ '', ' ' ],

		 responsive:{
			  0:{
					items:3
			  },
			  

			  1100:{
					items:10
			  },

			 
		 }
	});
  $( function() {
    $( "#accordion" ).accordion();
  } );
  
});




