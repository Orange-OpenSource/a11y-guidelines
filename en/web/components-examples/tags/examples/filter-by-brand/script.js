$(document).ready(function() {
  $(function () {
    $("#brand-list").on("click", function () {
      var text = $("#brand-list :selected").text()
      $("#brand-list :selected").remove();
      addItem(text);
    });

    $("#brand-list").on("keydown", function (e) {
      switch (e.keyCode) {
        case 13: //enter
          if ($("#brand-list :selected").length > 1) {
            addItems($("#brand-list :selected"));
          } else {
            addItem($("#brand-list :selected").detach().text());
          }
          break;
      }
    });

    $("#selection-list").on("click", "button", function () {
      removeItem($(this));
    });

    $("#addBrands").on("click", function (e) {
      addItems($("#brand-list :selected"));
    });
  })
});

function addItem(item, noSpeak) {
  if (!item) {
    return;
  }

  var link = $("<button>").attr("aria-label", "remove " + item + " from the list.").text(item);
  $("<li>").html('<span class="sr-only">' + item + '</span>').append(link).appendTo("#selection-list");
  if (!noSpeak) {
    speak(item + " added to the selection, " + $("#selection-list li").length + " elements selected");
  }
}

function addItems(items) {
  var itemText, itemsText="";
  items.each(function (i, item) {
    itemText = $(item).detach().text();
    addItem(itemText, true);
    itemsText += itemText;
  });
  speak(itemsText + " added to the selection, " + $("#selection-list li").length + " elements selected");
}

function removeItem(item) {
  $("<option>").text(item.text()).appendTo("#brand-list");
  item.parent().remove();
  speak(item.text() + " removed from the selection, " + $("#selection-list li").length + " elements selected.");
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
