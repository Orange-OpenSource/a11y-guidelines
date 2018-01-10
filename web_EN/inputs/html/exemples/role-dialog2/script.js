/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
$(document).ready(function() {

  // --- Exemple final ---
  // Ouverture de l'exemple final
  $('#openButton').on('click', function () {
    $('[role=dialog], .dialog').hide();
    $('#dialog').fadeIn();

    // Sauvegarde le focus pour le repositionner à la fermeture
    $('#dialog').attr('data-focusBack', 'openButton');

    // Place le focus sur l'élément par défaut
    $('#dialog .defaultFocus').focus();
  });

  // Gestion de la touche échap
  $('#dialog').on('keydown', function (e) {
    if (e.keyCode == 27) {
      $('#'+$("#dialog").attr('data-focusBack')).focus();
      $("#dialog").hide();
    }
  });

  // Boutons de fermeture des dialog
  $('[role=dialog] button').on('click', function () {
    $('#'+$("#dialog").attr('data-focusBack')).focus();
    $("#dialog").hide();
  })

  $('.dialog-start').on('focus', function () {
    $(this).parent().find('button:last').focus();
  });

  $('.dialog-stop').on('focus', function () {
    $(this).parent().find('button:first').focus();
  });
  
  // --- Listbox ---
  // On focus
  $("[role=listbox]").on("focus", function () {
      // If no selected element, select the first by default
      if (!$(this).find("[aria-selected=true]").length) {               
          $(this).find("[role=option]:first").attr("aria-selected", "true").focus();
      } else {
          $(this).find("[aria-selected=true]").focus();
      }
  });
  
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
              $('#'+$("#dialog").attr('data-focusBack')).focus();
              $("#dialog").hide();
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
  $("[role=option]").on("dblclick", function (e) {
    $('#'+$("#dialog").attr('data-focusBack')).focus();
    $("#dialog").hide();
  });

  // Mouse down
  $("[role=option]").on("mousedown", function (e) {
      $(this).parent().find("[aria-selected=true]").attr("aria-selected", "false");
      $(this).attr("aria-selected", "true").focus();
      e.preventDefault();
  });
  
  // On focus option
  $("[role=option]").on("focus", function (e) {
      $(this).parent().attr("tabindex", "-1");
  });
  
  $("[role=option]").on("blur", function (e) {    
      $(this).parent().attr("tabindex", "0");
  });
  
});
