/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
var title;
$(document).ready(function() {
    title = document.title;

    window.setTimeout(function() {
        $("#chatbot-window").show();
        push("Djingo", "Bonjour, puis-je vous aider ?");
        $("form").on("submit", function () {
            sendMessage();
            return false;
        })
        $("#chatbot-close").on("click", function () {
            $("#chatbot-window").hide();
        });
        $("#chatbot-hide").on("click", function () {
            $("#chatbot-window").toggleClass("chatbot-hidden");
        });
        $("#chatbot-show").on("click", function () {
            $("#chatbot-window").toggleClass("chatbot-hidden");
        });
        $("#ico-contrast").on("click", function () {
            $("#chatbot-window").toggleClass("high-contrast");
            if ($("#chatbot-window").hasClass("high-contrast")) {
                $("#ico-contrast").attr("aria-checked", "true");
            } else {
                $("#ico-contrast").attr("aria-checked", "false");
            }
            
        });
        $("#chat-input").on("focus", function () {
            document.title = title;
        });
    }, 5000);    
});

function push(from, message) {    
    var lastFrom = $("#chat-content .message").last().attr("data-from");
    if (lastFrom !== from) {
        $("#chat-content").append('<div aria-hidden="true" data-from="' + from + '" class="from">' + from + '</div>');
    }
    
    if (from==="moi") {
        playSound("Send_a_message");
    } else {
        playSound("Receive_a_message");
        document.title = "Djingo dit ... " + title;
    }
    

    $("#chat-content").append('<div data-from="' + from + '" class="message"><span class="sr-only">' + from + ' dit : </span>' + message + '</div>');    
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