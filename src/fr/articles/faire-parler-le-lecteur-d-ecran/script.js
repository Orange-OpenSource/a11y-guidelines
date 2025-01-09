document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('btnSpeak').addEventListener('click',function(){
        let message = document.getElementById('message');
        srSpeak(message.value);
        message.value="";
    })
});

function srSpeak(text, priority) {
    var el = document.createElement("div");
    var id = "faire-parler-le-lecteur-d-ecran-" + Date.now();
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
