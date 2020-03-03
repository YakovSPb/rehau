

$(document).ready(function() {

    $('select').selectpicker();

// mobile meny
const mobileButton = document.getElementById('my_menu')
const mobileMenu = document.getElementById('menu')

mobileButton.addEventListener('click', function(){
	mobileMenu.classList.toggle('header-menu')
})

if($(window).width() > 1200) {
// Fixed menu
  jQuery(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>140){
	                $('.slide-menu').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<140){
	                $('.slide-menu').removeClass('fixed');
	            }
	        });
	    });

} 





});












