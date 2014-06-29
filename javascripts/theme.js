(function($) {

  $(document).ready(function() {
    var update = $('#update')
    var close = $("<div>", {'class': "update-close"}).text('x');

    update.prepend(close);
    close.click(function() {
      update.hide();
    });

    // toggleFieldset();
    $('#update fieldset.tabular legend').click(function() {
      $(this).closest('fieldset').toggleClass('show-children');
    });
  });

})(jQuery);
