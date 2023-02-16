$(function() {
  $('.n-list__open').on('click', function() {
    const openWrap =  $(this).parent().next();
    const openLists = openWrap.children();

    if (openWrap.is(':hidden')) {
      $(this).children().addClass('active');

      openWrap.slideDown(100);
      setTimeout(function() {
        openLists.css('opacity', '1');
      }, 100);
    } else {
      $(this).children().removeClass('active');

      setTimeout(function() {
        openWrap.slideUp(100);
      }, 250);
      openLists.css('opacity', '0');
    }
  })
})