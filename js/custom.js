
jQuery(document).ready(function() {

    
	/*
		Preloader
	*/
	
  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 

	/*
		Final Countdown Settings
	*/
	var finalDate = '2018/08/01';

	$('div.counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<div class="days-wrapper"><span class="days">%D</span>дни</div><span class="test">:</span>' + 
   										 	 '<div class="hours-wrapper"><span class="hours">%H</span>часы</div><span class="test">:</span>' + 
   										 	 '<div class="minutes-wrapper"><span class="minutes">%M</span>минуты</div><span class="test">:</span>' +
   										 	 '<div class="seconds-wrapper"><span class="seconds">%S</span>секунды</div>'));

   });  

});
