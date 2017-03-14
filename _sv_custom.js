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

}(window.jQuery);
