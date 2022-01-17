document.addEventListener("DOMContentLoaded", function(event) {

    var listButton = document.getElementsByClassName('delete');
    for (let item of listButton) {
        item.onclick = function(e) {
            this.parentElement.remove();
        }
    }
});
