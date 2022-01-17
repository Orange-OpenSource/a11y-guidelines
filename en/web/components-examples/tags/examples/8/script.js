document.addEventListener("DOMContentLoaded", function(event) {

    var listButton = document.getElementsByClassName('delete');
    for (let item of listButton) {
        item.onclick = function(e) {
            if(this.parentElement.previousElementSibling != null){
                console.log(this.parentElement.previousElementSibling)
                this.parentElement.previousElementSibling.querySelector("button").focus();
            }
            else if (this.parentElement.nextElementSibling != null){
                this.parentElement.nextElementSibling.querySelector("button").focus();
            }
            this.parentElement.remove();
        }
    }
});
