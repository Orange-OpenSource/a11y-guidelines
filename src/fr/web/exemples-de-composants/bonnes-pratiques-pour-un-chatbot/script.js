var title;

title = document.title;

document.getElementById("btnChatbot").onclick = function() {
	document.getElementById("chatbot-window").style.display = "block";
	document.getElementById("btnChatbot").classList.add("sr-only");
	document.getElementById("chat-input").focus();
};

document.querySelector("#chatbot form").onsubmit = function(e) {
	sendMessage();
    return false;
};

document.getElementById("chatbot-close").onclick = function() {
	document.getElementById("chatbot-window").style.display = "none";
	document.getElementById("btnChatbot").classList.remove("sr-only");
};

document.getElementById("chatbot-hide").onclick = function() {
	document.getElementById("chatbot-window").classList.toggle("chatbot-hidden");
	document.getElementById("chatbot-show").focus();
};

document.getElementById("chatbot-show").onclick = function() {
	document.getElementById("chatbot-window").classList.toggle("chatbot-hidden");
	document.getElementById("chatbot-hide").focus();
};


document.getElementById("chat-input").onfocus = function() {
	 document.title = title;
};

push("Djingo", "Bonjour, puis-je vous aider ?", true); 

document.querySelectorAll("#btnExemple1, #btnExemple2").forEach(function(b){
	b.onclick = function () {
		  alert("Ouverture du chatbot !");
	};	
});

document.getElementById("btnChoice").onclick = function() {
	document.getElementById("chatbot-window").style.display = "block";
	document.getElementById("btnChatbot").classList.add("sr-only");
	document.getElementById("chatbot-window").classList.remove = "chatbot-hidden";
	
	window.setTimeout(function () {
        push("moi", "Et si on parlait accessibilité ?");        
    },0);
	
	window.setTimeout(function () {
		document.getElementById("chat-container").setAttribute("aria-live", "off");
		document.querySelectorAll("#poll1, #poll-web, #poll-mobile").forEach(function(p){
			p.setAttribute("id","");
		});
		push("Djingo", "Excellente idée ! Vous souhaitez parler d'accessibilité web ou mobile ?", true, "poll1"); 
		rawPush('moi', '<button id="poll-web" class="btn btn-primary btn-poll">Web</button><button id="poll-mobile" class="btn btn-primary btn-poll">Mobile</button>');

		document.getElementById('poll-web').onclick = function() {
			removePoll("Parlons d'accessibilité web.");
		}

		document.getElementById('poll-mobile').onclick = function() {
			removePoll("Parlons d'accessibilité mobile.");
		}
		
		window.setTimeout(function() {
			document.getElementById("chat-container").setAttribute("aria-live", "polite");
		}, 0);
		
		document.getElementById("poll1").focus();
	}, 2000);    
}

function removePoll(message) {
	window.setTimeout(function () {
		push("moi", message);
	}, 500);
	document.getElementById("chat-input").value = "";
	document.getElementById("chat-input").focus();
	document.querySelector(".from.invisible").remove();
	document.querySelector(".messages:last-child").remove();     
}

function rawPush(from, message) {
	var chatContent = document.getElementById('chat-content');
	var lastFrom = chatContent.querySelector((".messages:last-child")).getAttribute("data-from");    
    if (lastFrom !== from) {
       chatContent.innerHTML = chatContent.innerHTML + '<span data-from="' + from + '" class="from invisible" aria-hidden="true">' + from + '</span><div class="messages" data-from="' + from + '"></div>';
    }
    chatContent.querySelector((".messages:last-child")).innerHTML = chatContent.querySelector((".messages:last-child")).innerHTML + '<div class="raw-message"><span class="sr-only">' + from + ' dit : </span>' + message + '</div>';    
	
	chatContent.style.scrollTop = document.getElementById("chat-content").scrollHeight;
    chatContent.scrollTop = chatContent.scrollHeight;
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
    var chatContent = document.getElementById('chat-content');
    chatContent.scrollTop = chatContent.scrollHeight;
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
