var title;

$(document).ready(function() {
    title = document.title;

    $(".skiplink").on("focus", function () {
        $("#skip-links").removeClass("sr-only");
        window.scrollTo(0,0);
    });

    $(".skiplink").on("blur", function () {
        $("#skip-links").addClass("sr-only");
    });

    $("#chatbot-skiplink").on("click", function () {
        if ($("#chatbot-window").is(":visible")) {
            $("#chat-input").focus();
        } else {
            $("#chatbot-window").show();
            $("#btnChatbot").addClass("sr-only");
            $("#chat-input").focus();
        }
    });

    $("#btnChatbot").on("click", function () {
        $("#chatbot-window").show();
        $("#btnChatbot").addClass("sr-only");
        $("#chat-input").focus();
    });

    $("form").on("submit", function () {
        sendMessage();
        return false;
    })
    $("#chatbot-close").on("click", function () {
        $("#chatbot-window").hide();
        $("#btnChatbot").removeClass("sr-only");
    });
    $("#chatbot-hide").on("click", function () {
        $("#chatbot-window").toggleClass("chatbot-hidden");
        $("#chatbot-show").focus();
    });
    $("#chatbot-show").on("click", function () {
        $("#chatbot-window").toggleClass("chatbot-hidden");
        $("#chatbot-hide").focus();
    });

    $("#chat-input").on("focus", function () {
        document.title = title;
    });        
    
    push("Djingo", "Hello, may I help you ?", true); 
   
    $("#btnExemple1, #btnExemple2").on("click", function () {
        alert("Opening the chatbot !");
    });

    $("#btnChoice").on("click", function () {
        $("#chatbot-window").show();
        $("#btnChatbot").addClass("sr-only");
        $("#chatbot-window").removeClass("chatbot-hidden");
        window.setTimeout(function () {
            push("me", "What about accessibility ?");
        },0);
        
        window.setTimeout(function () {
            $("#chat-container").attr("aria-live", "off");
            $("#poll1, #poll-web, #poll-mobile").attr("id","");
            push("Djingo", "Excellent idea ! Do you want to talk about web or mobile accessibility ?", true, "poll1"); 
            rawPush('me', '<button id="poll-web" class="btn btn-primary btn-poll">Web</button><button id="poll-mobile" class="btn btn-primary btn-poll">Mobile</button>');            
            window.setTimeout(function() {
                $("#chat-container").attr("aria-live", "polite");
            }, 0);
            $("#poll1").focus();
        }, 2000);       
    });

    $('body').on('click', '#poll-web', function () {                
        window.setTimeout(function () {
            push("me", "Let's talk about web accessibility.");
        }, 500);
        $("#chat-input").val("").focus();
        $(".from.invisible").remove();
        $(".messages").last().remove();        
    });

    $('body').on('click', '#poll-mobile', function () {
        $("#chat-input").val("").focus();
        $(".from.invisible").remove();
        $(".messages").last().remove();
        window.setTimeout(function () {
            push("me", "Let's talk about mobile accessibility.");
        },500);
    });    

});

function rawPush(from, message) {
    var lastFrom = $("#chat-content .messages").last().attr("data-from");
    if (lastFrom !== from) {
        $("#chat-content").append('<span data-from="' + from + '" class="from invisible" aria-hidden="true">' + from + '</span><div class="messages" data-from="' + from + '"></div>');
    }
    $("#chat-content .messages").last().append('<div class="raw-message"><span class="sr-only">' + from + ' says : </span>' + message + '</div>');        
    $("#chat-content").css({scrollTop: document.getElementById("chat-content").scrollHeight });

    var chatContent = document.getElementById('chat-content');
    chatContent.scrollTop = chatContent.scrollHeight;
}

function push(from, message, silence, id) {
    var lastFrom = $("#chat-content .messages").last().attr("data-from");
    var id = id?' id="'+id+'" ':'';
    if (lastFrom !== from) {
        $("#chat-content").append('<span data-from="' + from + '" class="from" aria-hidden="true">' + from + '</span><div class="messages" data-from="' + from + '"></div>');
    }

    if (!silence) {
        if (from==="me") {
            playSound("Send_a_message");
        } else {
            playSound("Receive_a_message");
            if (!document.hasFocus() || document.activeElement !== document.getElementById('chat-input')) {
                document.title = "Djingo says ... " + title;
            }
        }
    }

    $("#chat-content .messages").last().append('<div class="message" ' + id + ' tabindex="-1"><span class="sr-only">' + from + ' says : </span>' + message + '</div>');    
    var chatContent = document.getElementById('chat-content');
    chatContent.scrollTop = chatContent.scrollHeight;
}

function sendMessage() {
    var msg = $("#chat-input").val();
    if (msg == '') {
        return;
    }
    push("me", msg);
    $("#chat-input").val("").focus();
    
    // echo reply
    window.setTimeout(function () {
        push("Djingo", msg);
    }, 4000);
}

function playSound(filename){
    document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="./sounds/' + filename + '.mp3" type="audio/mpeg" /><embed hidden="true" autostart="true" loop="false" src="./sounds/' + filename +'.mp3" /></audio>';    
}

/* --- On supprime le focus lors de la navigation avec la souris --- */
var head = document.head || document.getElementsByTagName('head')[0];
var axsStyles = head.appendChild(document.createElement('style'));
document.addEventListener('mousedown', function() {
    axsStyles.innerHTML = '* {outline:none !important}';
});
document.addEventListener('keydown', function() {
    axsStyles.innerHTML = '';
});
/* ---- */
