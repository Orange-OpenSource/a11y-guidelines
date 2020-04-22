/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
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

    $("#bonnes-pratiques-pour-un-chatbot-skiplink").on("click", function () {
        if ($("#bonnes-pratiques-pour-un-chatbot-window").is(":visible")) {
            $("#chat-input").focus();
        } else {
            $("#bonnes-pratiques-pour-un-chatbot-window").show();
            $("#btnChatbot").addClass("sr-only");
            $("#chat-input").focus();
        }
    });

    $("#btnChatbot").on("click", function () {
        $("#bonnes-pratiques-pour-un-chatbot-window").show();
        $("#btnChatbot").addClass("sr-only");
        $("#chat-input").focus();
    });

    $("form").on("submit", function () {
        sendMessage();
        return false;
    })
    $("#bonnes-pratiques-pour-un-chatbot-close").on("click", function () {
        $("#bonnes-pratiques-pour-un-chatbot-window").hide();
        $("#btnChatbot").removeClass("sr-only");
    });
    $("#bonnes-pratiques-pour-un-chatbot-hide").on("click", function () {
        $("#bonnes-pratiques-pour-un-chatbot-window").toggleClass("chatbot-hidden");
        $("#bonnes-pratiques-pour-un-chatbot-show").focus();
    });
    $("#bonnes-pratiques-pour-un-chatbot-show").on("click", function () {
        $("#bonnes-pratiques-pour-un-chatbot-window").toggleClass("chatbot-hidden");
        $("#bonnes-pratiques-pour-un-chatbot-hide").focus();
    });

    $("#chat-input").on("focus", function () {
        document.title = title;
    });        
    
    push("Djingo", "Bonjour, puis-je vous aider ?", true); 
   
    $("#btnExemple1, #btnExemple2").on("click", function () {
        alert("Ouverture du bonnes-pratiques-pour-un-chatbot !");
    });

    $("#btnChoice").on("click", function () {
        $("#bonnes-pratiques-pour-un-chatbot-window").show();
        $("#btnChatbot").addClass("sr-only");
        $("#bonnes-pratiques-pour-un-chatbot-window").removeClass("chatbot-hidden");
        window.setTimeout(function () {
            push("moi", "Et si on parlait accessibilité ?");        
        },0);
        
        window.setTimeout(function () {
            $("#chat-container").attr("aria-live", "off");
            $("#poll1, #poll-web, #poll-mobile").attr("id","");
            push("Djingo", "Excellente idée ! Vous souhaitez parler d'accessibilité web ou mobile ?", true, "poll1"); 
            rawPush('moi', '<button id="poll-web" class="btn btn-primary btn-poll">Web</button><button id="poll-mobile" class="btn btn-primary btn-poll">Mobile</button>');            
            window.setTimeout(function() {
                $("#chat-container").attr("aria-live", "polite");
            }, 0);
            $("#poll1").focus();
        }, 2000);       
    });

    $('body').on('click', '#poll-web', function () {                
        window.setTimeout(function () {
            push("moi", "Parlons d'accessibilité Web.");
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
            push("moi", "Parlons d'accessibilité mobile.");
        },500);
    });    

});

function rawPush(from, message) {
    var lastFrom = $("#chat-content .messages").last().attr("data-from");
    if (lastFrom !== from) {
        $("#chat-content").append('<span data-from="' + from + '" class="from invisible" aria-hidden="true">' + from + '</span><div class="messages" data-from="' + from + '"></div>');
    }
    $("#chat-content .messages").last().append('<div class="raw-message"><span class="sr-only">' + from + ' dit : </span>' + message + '</div>');    
    $("#chat-content").animate({scrollTop: document.getElementById("chat-content").scrollHeight }, 100);
}

function push(from, message, silence, id) {
    var lastFrom = $("#chat-content .messages").last().attr("data-from");
    var id = id?' id="'+id+'" ':'';
    if (lastFrom !== from) {
        $("#chat-content").append('<span data-from="' + from + '" class="from" aria-hidden="true">' + from + '</span><div class="messages" data-from="' + from + '"></div>');
    }

    if (!silence) {
        if (from==="moi") {
            playSound("Send_a_message");
        } else {
            playSound("Receive_a_message");
            if (!document.hasFocus() || document.activeElement !== document.getElementById('chat-input')) {
                document.title = "Djingo dit ... " + title;
            }
        }
    }

    $("#chat-content .messages").last().append('<div class="message" ' + id + ' tabindex="-1"><span class="sr-only">' + from + ' dit : </span>' + message + '</div>');    
    $("#chat-content").animate({scrollTop: document.getElementById("chat-content").scrollHeight }, 100);
}

function sendMessage() {
    var msg = $("#chat-input").val();
    if (msg == '') {
        return;
    }
    push("moi", msg);
    $("#chat-input").val("").focus();
    
    // echo reply
    window.setTimeout(function () {
        push("Djingo", msg);
    }, 4000);
}

function playSound(filename){   
    document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="./sounds/' + filename + '.mp3" type="audio/mpeg" /><source src="./sounds/' + filename + '.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="./sounds/' + filename +'.mp3" /></audio>';
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
