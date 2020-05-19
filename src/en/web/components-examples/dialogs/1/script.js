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
    $(this).parent().parent().parent().hide();
  })

  $('.dialog-start').on('focus', function () {
    $(this).parent().find('button:last').focus();
  });

  $('.dialog-stop').on('focus', function () {
    $(this).parent().find('button:first').focus();
  });


  // --- Exemple step 1 ---
  // Overture de l'exemple step 1
  $('#etape1-openButton').on('click', function () {
    $('[role=dialog], .dialog').hide();
    $('#etape1-dialog').fadeIn();
  });

  // Boutons de fermeture
  $('#etape1-dialog').on('click', function () {
    $('#etape1-dialog').hide();
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
