document.addEventListener("DOMContentLoaded", function(event) {

  const inputTo = document.getElementById("to");

  inputTo.onblur = function (e){
    addItem(this.value);
    this.value="";
    this.parentElement.classList.remove('focus');
  }

  inputTo.onkeydown = function (e){
    switch (e.keyCode){
      case 188 : //virgule
        addItem(this.value);
        this.value="";
        e.preventDefault();
        break;
      case 8 : // backspace
      if(this.value === ""){
        removeItem(document.getElementById("selection-list").lastElementChild);
      }
        e.preventDefault();
        break;
      case 13 : //enter
        e.preventDefault();
        break;
    }
  }
  
  inputTo.onfocus = function(e){
    this.parentElement.classList.add("focus");
  }

  document.getElementById("selection-list").onclick = function (e){
    if(e.target.nodeName == "BUTTON"){
      removeItem(e.target.parentElement);
    }
    inputTo.focus();
  }

});

function removeItem(item) {
  item.remove();
  speak(item.querySelector("button").textContent + " supprimé des destinataires, " + document.getElementById("selection-list").children.length + " destinataires sélectionnés");
}

function addItem(text) {
  if (!text) {
    return;
  }
  let button = document.createElement("button");
  button.setAttribute("aria-label","retirer "+text+" de liste.");
  button.innerText = text;

  let li = document.createElement("li");
  li.innerHTML = '<span class="visually-hidden">' + text + '</span>';
  li.appendChild(button);

  document.getElementById("selection-list").appendChild(li)
  speak(text + " ajouté aux destinataires, " + document.getElementById("selection-list").children.length + " élément sélectionné");
}

function speak(text, priority) {
  var el = document.createElement("div");
  var id = "speak-" + Date.now();
  el.setAttribute("id", id);
  el.setAttribute("aria-live", priority || "polite");
  el.classList.add("visually-hidden");
  document.body.appendChild(el);

  window.setTimeout(function () {
    document.getElementById(id).innerHTML = text;
  }, 100);

  window.setTimeout(function () {
    document.body.removeChild(document.getElementById(id));
  }, 1000);
}
