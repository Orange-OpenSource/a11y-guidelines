$(document).ready(function() {
  $("#to").on("blur", function () {
    addItem($(this).val());
    $(this).val("");
  });

  $("#to").on("keypress", function (e) {

    if (e.which === 44) {       // virgule
      addItem($(this).val());
      $(this).val("");
      e.preventDefault();
    } else if (e.which === 8) {  // backspace
      if ($("#to").val() === "") {
        removeItem($("#selection-list li:last").remove());
      }
    } else if (e.which === 13) {
      e.preventDefault();
    }
  });

  $("#to").on("focus", function (e) {
    $(this).parent().addClass("focus");
  });

  $("#to").on("blur", function (e) {
    $(this).parent().removeClass("focus");
  });

  $("#selection-list").on("click", "button", function () {
    removeItem($(this).parent());
    $("#to").focus();
  });

});

function removeItem(item) {
  item.remove();
  speak(item.find("button").text() + " supprimé des destinataires, " + $("#selection-list li").length + " destinataires sélectionnés");
}

function addItem(text) {
  if (!text) {
    return;
  }

  var link = $("<button>").attr("aria-label", "retirer " + text + " de la liste.").text(text);
  $("<li>").html('<span class="sr-only">' + text + '</span>').append(link).appendTo("#selection-list");
  speak(text + " ajouté aux destinataires, " + $("#selection-list li").length + " destinataires ajoutés");
}

function speak(text, priority) {
  var el = document.createElement("div");
  var id = "speak-" + Date.now();
  el.setAttribute("id", id);
  el.setAttribute("aria-live", priority || "polite");
  el.classList.add("sr-only");
  document.body.appendChild(el);

  window.setTimeout(function () {
    document.getElementById(id).innerHTML = text;
  }, 100);

  window.setTimeout(function () {
    document.body.removeChild(document.getElementById(id));
  }, 1000);
}
