 var userFeed = new Instafeed({
        get: 'user',
        userId: 286109578,
        accessToken: '286109578.1677ed0.e94b1764862147bba345d138341bee82',
        limit: 9,
        resolution: 'low_resolution',
        template: '<div class="press-item"><a href="{{link}}" target="_blank"><img src="{{image}}" class="img-responsive"/></a></div>',
        after: function(){
            $('.instagram').slick({
          		slidesToShow: 6,
          	  slidesToScroll: 1,
          	  autoplay: false,
          	  autoplaySpeed: 4000,
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
            })
          }
        });
    userFeed.run();
