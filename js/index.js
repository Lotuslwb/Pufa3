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
            
        if ($('body img').length === 0) {
            show_page();
        } else {
            $('body img').imagesLoaded().progress(function(instance, image) {
                show_page();
            });
        }
        
        function show_page() {
            $(".page-loading").fadeOut();
        }
})
