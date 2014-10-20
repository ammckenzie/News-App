$(document).ready(function() {


		/* Show Menu Tags */
        $('#showmenutags').click(function() {
                $('.menutags').slideToggle("fast");
        });


        /* Show Menu Sites */
        $('#showmenusites').click(function() {
                $('.menusites').slideToggle("fast");
        });


        $('.flyout').click(function() {
        	$('.grayout').fadeIn();
        	$('.menu').animate({left:'100%'});
        	$('.article-container').css('position','fixed');
        });

        $('.flyout-done').click(function() {
        	$('.grayout').fadeOut();
        	$('.menu').animate({left:'-100%'});
        	$('.menutags').slideUp();
        	$('.menusites').slideUp();
        	$('.article-container').css('position','relative');
       });

        

    });
