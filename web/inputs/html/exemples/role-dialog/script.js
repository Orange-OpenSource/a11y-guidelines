/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
$(document).ready(function() {

  // --- Exemple final ---
  // Ouverture de l'exemple final
  $('#final-openButton').on('click', function () {
    $('[role=dialog], .dialog').hide();
    $('#final-dialog').fadeIn();

    // Sauvegarde le focus pour le repositionner à la fermeture
    $('#final-dialog').attr('data-focusBack', 'final-openButton');

    // Place le focus sur l'élément par défaut
    $('#final-dialog .defaultFocus').focus();
  });

  // Gestion de la touche échap
  $('#final-dialog').on('keydown', function (e) {
    if (e.keyCode == 27) {
      $('#'+$(this).attr('data-focusBack')).focus();
      $(this).hide();
    }    
  });

  // Ouverture de l'exemple final 2
  $('#final-openButton2').on('click', function () {
    $('[role=dialog], .dialog').hide();
    $('#final-dialog').fadeIn();

    // Sauvegarde le focus pour le repositionner à la fermeture
    $('#final-dialog').attr('data-focusBack', 'final-openButton2');

    // Place le focus sur l'élément par défaut
    $('#final-dialog .defaultFocus').focus();
  });

  // Boutons de fermeture des dialog
  $('[role=dialog] button').on('click', function () {
    $('#'+$(this).parent().parent().attr('data-focusBack')).focus();
    $(this).parent().parent().hide();
  })

  $('.dialog-start').on('focus', function () {
    $(this).parent().find('button:last').focus();
  });

  $('.dialog-stop').on('focus', function () {
    $(this).parent().find('button:first').focus();
  });


  // --- Exemple step 1 ---
  // Overture de l'exemple step 1
  $('#step1-openButton').on('click', function () {
    $('[role=dialog], .dialog').hide();
    $('#step1-dialog').fadeIn();
  });

  // Boutons de fermeture
  $('#step1-dialog').on('click', function () {
    $('#step1-dialog').hide();
  })

  // --- Exemple step 2 ---
  // Overture de l'exemple step 2
 $('#step2-openButton').on('click', function () {
    $('[role=dialog], .dialog').hide();
    $('#step2-dialog').fadeIn();

    // Sauvegarde le focus pour le repositionner à la fermeture
    $('#step2-dialog').attr('data-focusBack', 'step2-openButton');

    // Place le focus sur l'élément par défaut
    $('#step2-dialog .defaultFocus').focus();
  });

 // Boutons de fermeture
  $('#step2-dialog button').on('click', function () {
    $('#'+$(this).parent().parent().attr('data-focusBack')).focus();
    $(this).parent().parent().hide();
  })

  // Gestion de la touche échap
  $('#step2-dialog').on('keydown', function (e) {
    if (e.keyCode == 27) {
      $('#'+$(this).attr('data-focusBack')).focus();
      $(this).hide();
    }
  });

});
