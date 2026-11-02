document.addEventListener("DOMContentLoaded", function(event) {

    var listButton = document.getElementsByClassName('delete');
    for (let item of listButton) {
        item.onclick = function(e) {
            if(this.parentElement.previousElementSibling != null){
                this.parentElement.previousElementSibling.querySelector("button").focus();
            }
            else if (this.parentElement.nextElementSibling != null){
                this.parentElement.nextElementSibling.querySelector("button").focus();
            }
            this.parentElement.remove();
            srSpeak(this.text + " supprimé");
        }
    }
});

function srSpeak(text, priority) {
    var el = document.createElement("div");
    var id = "make-a-screen-reader-talk-" + Date.now();
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
