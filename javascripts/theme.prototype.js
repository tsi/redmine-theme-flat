// Older Redmine versions used prototype instead of jQuery.
// If you're using Redmine < 2.1 you'll probably want to use this script instead.

(function() {

  function toggleSiblings() {
    var fieldset = this.up();
    fieldset.toggleClassName('show-children');
  }

  function hideUpdate() {
    document.getElementById("update").hide();
  }

  document.observe("dom:loaded", function(){
    var update = $("update");
    var close = document.createElement("div");
    close.innerHTML = 'x';
    close.className = 'update-close';
    update.insertBefore(close, update.firstChild);
    close.onclick = hideUpdate;

    // toggleFieldset();
    var fieldsets = document.querySelectorAll('#update fieldset.tabular');
    for (var i = 0; i < fieldsets.length; i++) {
      fieldsets[i].children[0].onclick = toggleSiblings;
      if (fieldsets[i].children[0].children.length) {
        fieldsets[i].children[0].children[0].addEventListener("click", function(e) {e.stopPropagation()}, false);
      }
    }
  });

})();
