! function($) {
    // Nav current
    $(function() {
        $("a").each(function() {
            if ($(this).prop("href") == window.location.href) {
                $(this).addClass("current");
            }
        });
    });
    $(function() {
        $("a:first").each(function() {
            if ($('html').is('.work')) {
                $(this).addClass("current");
            }
        });
    });

    $(document).ready(function() {

        setTimeout(function() {
            $('body').addClass('loaded');
        }, 2000);

    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > 785) {
            $('.intro-work').hide();
        } else {
            $('.intro-work').show();
        }
    });

    $(function() {

        if (($(window).height() < 1080) || ($(window).width() < 1500)) {
            $('#hide').removeClass('intro-work');
        }
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

}(window.jQuery);
