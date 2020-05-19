$(document).ready(function() {
    $("button").on("click", function () {
        $(this).parent().prev().find("button").focus();        
        $(this).parent().remove();
    });
});
