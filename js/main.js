$(document).ready(function() {
		    $('.top-menu').each(function(index) {
		        $(this).prev().addClass('collapsible').click(function() {
		            if ($(this).next().css('display') == 'none') {
		                $(this).next().slideDown(300, function() {
		                    $(this).prev().removeClass('collapsed').addClass('expanded');
		                });
		            } else {
		                $(this).next().slideUp(300, function() {
		                    $(this).prev().removeClass('expanded').addClass('collapsed');
		                    $(this).find('ul').each(function() {
		                        $(this).hide().prev().removeClass('expanded').addClass('collapsed');
		                    });
		                });
		            }
		            return false;
		        });
		    });
		});

$(document).ready(function() {
var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 0,
    loop: true,
    nav:false,
    dots: true,
    autoplay:true,
    autoPlaySpeed: 4000,
    autoplayTimeout:4000,
    animateOut: 'fadeOut',
    navText:['<i class="fa fa-angle-left" aria-hidden="true" style="font-weight:900";></i>', '<i class="fa fa-angle-right" aria-hidden="true" style="font-weight:900"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
});