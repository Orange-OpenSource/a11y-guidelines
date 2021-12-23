document.addEventListener("DOMContentLoaded", function(event) {

  (function () {

    const listbox = document.getElementById("brand-list");

    listbox.onclick = function(e){
      let text = listbox.value;
      listbox.remove(listbox.selectedIndex)
      addItem(text);
    }

    listbox.onkeydown = function (e){
      switch(e.keyCode){
        case 13 : //enter
          if(listbox.selectedOptions.length>1){
            addItems(listbox.selectedOptions);
          }else{
            addItem(listbox.value)
            listbox.remove(listbox.selectedIndex)
          }
          e.preventDefault();
          break;
      }
    }

    document.getElementById('selection-list').onclick = function (e){
      if(e.target.nodeName == "BUTTON"){
        removeItem(e.target);
      }
    }

    document.getElementById("addBrands").onclick = function (e){
      if(listbox.selectedOptions.length>1){
            addItems(listbox.selectedOptions);
          }else{
            addItem(listbox.value)
            listbox.remove(listbox.selectedIndex)
          }
    }
  })();
});

function addItem(item, noSpeak) {
  if (!item) {
    return;
  }

  let button = document.createElement("button");
  button.setAttribute("aria-label","remove "+item+" from the list.");
  button.innerText = item;

  let li = document.createElement("li");
  li.innerHTML = '<span class="sr-only">' + item + '</span>';
  li.appendChild(button);

  document.getElementById("selection-list").appendChild(li)
  if (!noSpeak) {
    speak(item + " added from the selection, " + document.getElementById("selection-list").children.length + " added to recipients");
  }
}

function addItems(items) {
  var itemsText="";

  let listOption = Array.from(items)

  for (let item of listOption) {
    addItem(item.text)
    itemsText += item.text+" ";
    item.parentElement.remove(item.index)
  }
}

function removeItem(item) {
  let opt = document.createElement("option");
  opt.text=item.textContent;
  document.getElementById("brand-list").add(opt,null);
  item.parentElement.remove();
  speak(item.textContent + " removed from the selectop,, " + document.getElementById("selection-list").children.length + " added to recipients.");
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
