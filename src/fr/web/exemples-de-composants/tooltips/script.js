document.addEventListener("DOMContentLoaded", function(event) {
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  		return new boosted.Tooltip(tooltipTriggerEl)
	})

});
