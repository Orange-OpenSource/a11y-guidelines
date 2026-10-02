document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('btnSpeak');
    const input = document.getElementById('message');

    btn.addEventListener('click', () => {
        if(input.value.trim() !== "") {
            speak(input.value);
            input.value = "";
            input.focus();
        }
    });
});

function speak(message, priority = "polite") {
    const region = document.createElement("div");
    const id = "sr-" + Date.now();

    region.setAttribute("id", id);
    region.setAttribute("aria-live", priority);
    region.setAttribute("aria-atomic", "true");
    region.classList.add("visually-hidden");

    document.body.appendChild(region);
    
    if (priority === "assertive") {
        speechSynthesis.cancel();
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(message));

    setTimeout(() => {
        region.textContent = message;
    }, 50);

    setTimeout(() => {
        document.body.removeChild(region);
    }, 2000);
}
