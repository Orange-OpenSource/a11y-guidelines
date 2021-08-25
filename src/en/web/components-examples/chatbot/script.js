var title;

title = document.title;

document.getElementById("btnChatbot").onclick = function() {
	document.getElementById("chatbot-window").style.display = "block";
	document.getElementById("btnChatbot").classList.add("sr-only");
	forceReadLastMessage();
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

push("Djingo", "Hello, may I help you ?", true); 

document.querySelectorAll("#btnExemple1, #btnExemple2").forEach(function(b){
	b.onclick = function () {
		  alert("Opening the chatbot !");
	};	
});

document.getElementById("btnChoice").onclick = function() {
	document.getElementById("chatbot-window").style.display = "block";
	document.getElementById("btnChatbot").classList.add("sr-only");
	document.getElementById("chatbot-window").classList.remove = "chatbot-hidden";
	
	window.setTimeout(function () {
        push("me", "What about accessibility ?");        
    },0);
	
	window.setTimeout(function () {
		document.getElementById("chat-container").setAttribute("aria-live", "off");
		document.querySelectorAll("#poll1, #poll-web, #poll-mobile").forEach(function(p){
			p.setAttribute("id","");
		});
		push("Djingo", "Excellent idea ! Do you want to talk about web or mobile accessibility ?", true, "poll1"); 
		rawPush('me', '<button id="poll-web" class="btn btn-primary btn-poll">Web</button><button id="poll-mobile" class="btn btn-primary btn-poll">Mobile</button>');

		document.getElementById('poll-web').onclick = function() {
			removePoll("Let's talk about web accessibility.");
		}

		document.getElementById('poll-mobile').onclick = function() {
			removePoll("Let's talk about mobile accessibility.");
		}
		
		window.setTimeout(function() {
			document.getElementById("chat-container").setAttribute("aria-live", "polite");
		}, 0);
		
		document.getElementById("poll1").focus();
	}, 2000);    
}

function removePoll(message) {
	window.setTimeout(function () {
		push("me", message);
	}, 500);
	document.getElementById("chat-input").value = "";
	document.getElementById("chat-input").focus();
	document.querySelector(".from.invisible").remove();
	document.querySelector(".messages:last-child").remove();     
}

function forceReadLastMessage() {
	var chatContent = document.getElementById("chat-content");
	var lastMessage = chatContent.querySelector((".messages:last-child"));
	var message = lastMessage.innerHTML;
	lastMessage.innerHTML = "";
	
	window.setTimeout(function () {
		lastMessage.innerHTML = message;
	}, 100);
}

function rawPush(from, message) {
	var chatContent = document.getElementById('chat-content');
	if (chatContent.querySelector((".messages:last-child"))) {
		var lastFrom = chatContent.querySelector((".messages:last-child")).getAttribute("data-from"); 
	}
	
    if (lastFrom !== from) {
		var el = document.createElement('span');
		el.setAttribute("data-from", from);
		el.setAttribute("class", "from invisible");
		el.setAttribute("aria-hidden", "true");
		chatContent.appendChild(el);

		el = document.createElement("div");
		el.setAttribute("class", "messages");
		el.setAttribute("data-from", from);		
		chatContent.appendChild(el);
    }
	
    chatContent.querySelector((".messages:last-child")).innerHTML = chatContent.querySelector((".messages:last-child")).innerHTML + '<div class="raw-message"><span class="sr-only">' + from + ' says: </span>' + message + '</div>';    
	
	chatContent.style.scrollTop = document.getElementById("chat-content").scrollHeight;
    chatContent.scrollTop = chatContent.scrollHeight;
}

function push(from, message, silence, id) {
	var chatContent = document.getElementById('chat-content');
	if (chatContent.querySelector((".messages:last-child"))) {
		var lastFrom = chatContent.querySelector((".messages:last-child")).getAttribute("data-from"); 
	}
	    
    var id = id?' id="'+id+'" ':'';
    if (lastFrom !== from) {
		
		var el = document.createElement('span');
		el.setAttribute("data-from", from);
		el.setAttribute("class", "from");
		el.setAttribute("aria-hidden", "true");
		el.innerHTML = from;		
		chatContent.appendChild(el);

		el = document.createElement("div");
		el.setAttribute("class", "messages");
		el.setAttribute("data-from", from);		
		chatContent.appendChild(el);		 
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
	
	chatContent.querySelector((".messages:last-child")).innerHTML = chatContent.querySelector((".messages:last-child")).innerHTML + '<div class="message" ' + id + ' tabindex="-1"><span class="sr-only">' + from + ' says: </span>' + message + '</div>';
    chatContent.scrollTop = chatContent.scrollHeight;
}

function sendMessage() {
    var msg = document.getElementById("chat-input").value;

    if (msg == '') {
        return;
    }
    push("me", msg);
	document.getElementById("chat-input").value = "";
	document.getElementById("chat-input").focus();
   
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
