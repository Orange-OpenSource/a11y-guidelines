$(document).ready(function() {
    $("button").on("click", function () {
        $(this).parent().remove();
    });
});
