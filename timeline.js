(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;
    
    function updateFocus() {
      var navbarHeight = $("#navbar").outerHeight();
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var focusPoint = scrollTop + (windowHeight / 2);

      selectors.item.each(function(i) {
        var $this = $(this);
        var offsetTop = $this.offset().top;
        var height = $this.height();

        if (offsetTop <= focusPoint && (offsetTop + height) > focusPoint) {
          selectors.item.removeClass(selectors.activeClass);
          $this.addClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" + $this.find(selectors.img).attr("src") + ")"
          );
        }
      });

      // Handle last item
      if (scrollTop + windowHeight >= $(document).height() - 50) {
        selectors.item.removeClass(selectors.activeClass);
        selectors.item.last().addClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" + selectors.item.last().find(selectors.img).attr("src") + ")"
        );
      }
    }

    $(window).on('scroll resize', updateFocus);
    updateFocus();
  };
})(jQuery);

$("#timeline-1").timeline();