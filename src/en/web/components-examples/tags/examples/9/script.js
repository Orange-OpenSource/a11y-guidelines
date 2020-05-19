$(document).ready(function() {
    $("button").on("click", function () {
        $(this).parent().prev().find("button").focus();        
        $(this).parent().remove();
        srSpeak($(this).text() + "supprimé");
    });
});

function srSpeak(text, priority) {
    var el = document.createElement("div");
    var id = "make-a-screen-reader-talk-" + Date.now();
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
