/* =================================
   LOADER
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
})

/* =================================
===  RESPONSIVE VIDEO           ====
=================================== */

$(".video-container").fitVids();


/* =================================
===  MAILCHIMP                 ====
=================================== */

$('.mailchimp').ajaxChimp({
    callback: mailchimpCallback,
    url: "http://webdesign7.us6.list-manage.com/subscribe/post?u=9445a2e155b82208d73433060&amp;id=16dc80e353" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
});

function mailchimpCallback(resp) {
     if (resp.result === 'success') {
        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);

    } else if(resp.result === 'error') {
        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
    }
}


/* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK - ADDED ON V1.5*/

// if (matchMedia('(max-width: 480px)').matches) {
//     $('.main-navigation a').on('click', function () {
//         $(".navbar-toggle").click();
//     });
// }
//
//
// /* NAVIGATION VISIBLE ON SCROLL */
//
// $(document).ready(function () {
//     mainNav();
// });
//
// $(window).scroll(function () {
//     mainNav();
// });
//
// if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
//   function mainNav() {
//         var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//         if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});
//
//         else $('.sticky-navigation').stop().animate({"top": '-60'});
//     }
// }
//
// if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
//   function mainNav() {
//         var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//         if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});
//
//         else $('.sticky-navigation').stop().animate({"top": '-120'});
//     }
// }



/* =================================
===  DOWNLOAD BUTTON CLICK SCROLL ==
=================================== */
jQuery(function( $ ){
			$('#download-button').localScroll({
				duration:1000
			});
		});

/* =================================
===  VIDEO BACKGROUND           ====
=================================== */
if (matchMedia('(min-width: 640px)').matches) {


}


 /* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura);

}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});


 /* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura);

}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});


/* =================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});


/* =================================
===  WOW ANIMATION             ====
=================================== */
wow = new WOW(
  {
    mobile: false
  });
wow.init();


/* =================================
===  OWL CROUSEL               ====
=================================== */
$(document).ready(function () {

    $("#feedbacks").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 800,
        paginationSpeed: 400,
        autoPlay: 5000,
        singleItem: true
    });

    var owl = $("#screenshots");

    owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });


});


/* =================================
===  Nivo Lightbox              ====
=================================== */
$(document).ready(function () {

    $('#screenshots a').nivoLightbox({
        effect: 'fadeScale',
    });

});


/* =================================
===  SUBSCRIPTION FORM          ====
=================================== */
$("#subscribe").submit(function (e) {
    e.preventDefault();
    var email = $("#subscriber-email").val();
    var dataString = 'email=' + email;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email)) {
        $.ajax({
            type: "POST",
            url: "subscribe/subscribe.php",
            data: dataString,
            success: function () {
                $('.subscription-success').fadeIn(1000);
                $('.subscription-error').fadeOut(500);
                $('.hide-after').fadeOut(500);
            }
        });
    } else {
        $('.subscription-error').fadeIn(1000);
    }

    return false;
});



// /* =================================
// ===  CONTACT FORM          ====
// =================================== */
// $("#contact").submit(function (e) {
//     e.preventDefault();
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var subject = $("#subject").val();
//     var message = $("#message").val();
//     var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

//     function isValidEmail(emailAddress) {
//         var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
//         return pattern.test(emailAddress);
//     };

//     if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
//         $.ajax({
//             type: "POST",
//             url: "/contact-form",
//             data: dataString,
//             success: function () {
//                 $('.success').fadeIn(1000);
//                 $('.error').fadeOut(500);
//             }
//         });
//     } else {
//         $('.error').fadeIn(10);
//         $('.success').fadeOut(500);
//     }

//     return false;
// });




/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
$('.expand-form').simpleexpand({
    'defaultTarget': '.expanded-contact-form'
});



/* =================================
===  STELLAR                    ====
=================================== */
$(window).stellar({
horizontalScrolling: false
});


/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}


/*==================================
=== slick												====
==================================*/

$(document).ready(function(){
  $('.as-seen-on').slick({
		slidesToShow: 7,
	  slidesToScroll: 1,
	  autoplay: false,
	  autoplaySpeed: 4000,
		verticalScrolling: true,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
	]
  });
});

/*==================================
=== cycle images								====
==================================*/

function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function(){
// run every 7s
setInterval('cycleImages()', 4500);
})


/*==================================
=== cycle images                ====
==================================*/
  var appStoreButton = document.querySelector('.iTunes-link');
  appStoreButton.addEventListener(
    'click', 
    function() { 
      fbq('trackCustom', 'ClickAppStore', {
        content_name: 'AppStore', 
        content_category: 'Click',
      });          
    },
    false
  );
  var playStoreButton = document.querySelector('.PlayStore-link');
  playStoreButton.addEventListener(
    'click', 
    function() { 
      fbq('trackCustom', 'ClickPlayStore', {
        content_name: 'PlayStore', 
        content_category: 'Click',
      });          
    },
    false
  );

/*==================================
=== Custom Tomorrowland stuff   ====
==================================*/

// $(document).ready(function () {
//   if(window.location.href.indexOf("tml") > -1) {
//     document.querySelector(".tml-1").textContent = "Party with a Local is a free app that connects people who love to party - for Tomorrowland events near you";
//     document.querySelector(".tml-2").textContent = "The purpose of the app is exactly what it sounds like: to connect users for a night out...";
//     document.querySelector(".tml-3").textContent = "Want to go to Tomorrowland parties but lacking a killer party crew?";
//     document.querySelector(".tml-4").innerHTML = "From EDM heads to techno snobs…<br>everyone can join the party!";

//     // $('.tml-1').textContent = 'Party with a Local is a free app that connects people who love to party - for Tomorrowland events near you';
//     // $('.tml-2').textContent = 'The purpose of the app is exactly what it sounds like: to connect users for a night out...';
//     // $('.tml-3').textContent = 'Want to go to Tomorrowland parties but lacking a killer party crew?';
//     // $('.tml-4').innerHtml = 'From EDM heads to techno snobs…<br>everyone can join the party!';
//     $('.tml-5').hide();
//     $('.tml-6').hide();
//   }
// });



var $contactForm = $('.contact-form');
$contactForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: '//formspree.io/info@partywith.co',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    },
    success: function(data) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--success">Message sent!</div>');
    },
    error: function(err) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
    }
  });
});