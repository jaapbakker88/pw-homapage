
$(document).ready(function(){
  $('.testimonials').slick({
  	autoplay: true,
  	arrows: false,
  	autoplaySpeed: 6000,
  	dots: true
  });
  $(window).scroll(function(){
	    var fromTopPx = 100; // distance to trigger
	    var scrolledFromtop = jQuery(window).scrollTop();
	    if(scrolledFromtop > fromTopPx){
	        $('.main-nav').addClass('scrolled');
	    }else{
	        $('.main-nav').removeClass('scrolled');
	    }
	});
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector('.menuBtn').style.opacity = "0";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector('.menuBtn').style.opacity = "1";
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        closeNav();
    }
});

