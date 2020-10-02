$(document).ready(function() {
  const openButton = $('#openButton')
  const dialog = $('#dialog')
  const options = $("[role=option]")

  function showDialog() {
    dialog.show();

    // If no selected element, select the first by default
    if (!dialog.find("[aria-selected=true]").length) {
      dialog.find("[role=option]:first").attr("aria-selected", "true").focus();
    } else {
      dialog.find("[aria-selected=true]").focus();
    }
  }

  function hideDialog () {
    openButton.focus();
    dialog.hide()
  }

  // --- Exemple final ---
  // Ouverture de l'exemple final
  openButton.on('click', function () {
    $('[role=dialog], .dialog').hide();
    showDialog();
  });

  // Gestion de la touche échap
  dialog.on('keydown', function (e) {
    if (e.keyCode === 27) {
      hideDialog();
    }
  });

  // Boutons de fermeture des dialog
  $('[role=dialog] button').on('click', function () {
    hideDialog();
  })

  $('.dialog-start').on('focus', function () {
    $(this).parent().find('button:last').focus();
  });

  $('.dialog-stop').on('focus', function () {
    $(this).parent().find('button:first').focus();
  });
  
  // --- Listbox ---
  // On keydown
  $("[role=listbox]").on("keydown", function (e) {            
      var currentItem = $(this).find("[aria-selected=true]");          
      switch (e.keyCode) {
          case 38:  // Up arrow
              if (currentItem.prev().length) {
                  currentItem.attr("aria-selected", "false");                    
                  currentItem.prev().attr("aria-selected", "true").focus();
              }                    
              e.preventDefault();
              break;
          case 40: // Down arrow          
              if (currentItem.next().length) {
                  currentItem.attr("aria-selected", "false");
                  currentItem.next().attr("aria-selected", "true").focus();
              }
              e.preventDefault();
              break;
          case 13: // Enter
              hideDialog();
              e.preventDefault();
              break;
          case 36: // home                    
              currentItem.attr("aria-selected", "false");                    
              currentItem.parent().find("[role=option]").first().attr("aria-selected", "true").focus();
              e.preventDefault();
              break;
          case 35: // end
              currentItem.attr("aria-selected", "false");                    
              currentItem.parent().find("[role=option]").last().attr("aria-selected", "true").focus();
              e.preventDefault();
              break;                   
      }
  });
  
  // double click
  options.on("dblclick", function (e) {
    hideDialog();
  });

  // Mouse down
  options.on("mousedown", function (e) {
      $(this).parent().find("[aria-selected=true]").attr("aria-selected", "false");
      $(this).attr("aria-selected", "true").focus();
      e.preventDefault();
  });
  
  // On focus option
  options.on("focus", function (e) {
      $(this).parent().attr("tabindex", "-1");
  });

  options.on("blur", function (e) {
      $(this).parent().attr("tabindex", "0");
  });
});
