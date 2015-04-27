$(function(){
        var bodyH=$("body").height();
        $("body").height(bodyH);
        
        var swiper = $('.swiper-container').swiper({
            mode: 'vertical',
            speed:  600
        });
        
        $('#zhiwen').click(function(){
          window.location.href="A-result.html";
        })
        
        $('.arrowbox').click(function(){
          swiper.swipeNext();
        });
        
        var loaded = 0;
        if ($('body img').length === 0) {
            show_page();
        } else {
            $('body img').imagesLoaded().progress(function(instance, image) {
              loaded++;
              if (loaded == instance.images.length) {
                show_page();
                setTimeout(showGif,1000)
              }
            });
        }
        
        function show_page() {
            $(".page-loading").fadeOut();
        }

    function showGif(){
      var $fall=$('<img src="img/fall.gif" class="fall">');
      $fall.appendTo($('body'));
      setTimeout(function(){
        $fall.remove();
      },4000)
    }
})


