$(document).ready(function() {
    $("#btnSpeak").on("click", function () {
        srSpeak($("#message").val());
        $("#message").val("");
    });
});

function srSpeak(text, priority) {
    var el = document.createElement("div");
    var id = "faire-parler-le-lecteur-d-ecran-" + Date.now();
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
