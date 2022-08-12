jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
	jQuery('.scroll_btn').click(function () {
		var Lochref = jQuery(this).attr('href');
		jQuery("html, body").stop().animate({
		scrollTop: jQuery(Lochref).offset().top -90
		}, 1500);
		return false;
	});
	jQuery('.parallax').simpleParallax();
});

jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() >= 1) {
        jQuery('.header-sticky').addClass('is_stuck');
    }
    else {
        jQuery('.header-sticky').removeClass('is_stuck');
    }
});

jQuery(".menu_bar").click(function() {
	jQuery(this).toggleClass('menuclose');  
	jQuery('.mobile_menu').toggleClass('mobile_menu_open'); 
	jQuery('.mobile_menu').fadeToggle('fast'); 
});
jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});