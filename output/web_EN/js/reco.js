$(document).ready( function () {
  var title = $("h1:first").text() + " - " + $("head title").text();

  // Mise à jour du titre de la page
  $("head title").text(title);
  document.title = title;

  var resize = function () {
    $("#sidebar ul").innerWidth($("#sidebar").innerWidth()-10);
  }
  resize();
  $(window).resize(function(){resize();});
    
  // Skip links
  $(".skip-links a").on("focus", function () {
      $(".skip-links").removeClass("sr-only");
  });

  $(".skip-links a").on("blur", function () {
      $(".skip-links").addClass("sr-only");
  });

  $("#skip-content").on("focus mouseenter", function () {
    $("#content").addClass("highlight-zone");
  });

  $("#skip-content").on("blur mouseleave", function () {
    $("#content").removeClass("highlight-zone");
  });

  $("#skip-nav").on("focus mouseenter", function () {
    $("#navigation").addClass("highlight-zone");
  });

  $("#skip-nav").on("blur mouseleave", function () {
    $("#navigation").removeClass("highlight-zone");
  });

  // Chargement du menu de navigation pour les mobiles
  $("#navigation-mobile").html($("#sidebar ul").html());
  $("#navigation-mobile a").attr("id","");

  // Gestion de l'élément sélectionné dans le menu (soit automatique en fonction de l'url, soir présence d'un élément possédant un attribut data-menuitem dans le code de la page)
  var currentItem = getCurrentItem();
  if (currentItem) {
    currentItem.addClass("current");
  }

  // Gestion des sections cliquables pour les critères RGAA
  $(".linkSection").on("click", function () {
    var div = $(this).next("div");
    if (!div[0]) {
      div = $(this).parent().next("div");
    }
    div.toggleClass("sr-only");
  });

  // Mise en forme des exemples de code
  if (typeof hljs !== "undefined" && hljs !== null) {
    $('pre code').each(function(i, el) {
      return hljs.highlightBlock(el);
    });
  }

  // Ajout d'ancres sur les titres
  $("h1, h2" ).wrapInner(function () {
   return '<a class="anchor" href="#' + $(this).attr("id") + '"></a>';
  });

  if (window.location.search.indexOf('print') !== -1) {
    return window.print();
  }

  // Lien retour en haut de page
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
  });

  $('#back-to-top').tooltip('show');

  if ($("li .subtitle").length == 0) { // if no submenu displayed
    $(window).on("scroll", function(){    
      var marginTop = 0, windowHeight = $(window).height(), navHeight = $("#navigation").innerHeight(), topHeight = $("#top-navbar").innerHeight();

      if (navHeight + topHeight > windowHeight) {
        marginTop = (navHeight + topHeight) * $(window).scrollTop() / $(document).height();
        if (navHeight + topHeight - marginTop < windowHeight) {
          marginTop = navHeight + topHeight - windowHeight;
        }
      }
      $("#sidebar>ul").css('margin-top', "-" + marginTop +'px');

    });
  }
  
});

function setBreadcrumb(param) {
    param.forEach(function (element, index, array) {
    if (element.url) {
            $(".breadcrumb").append($("<li><a href='" + element.url + "'>" + element.label + "</a></li>"));
        } else {
            $(".breadcrumb").append($("<li>" + element.label + "</li>"));
        }
    });
    $(".breadcrumb li:last").addClass("active");
}

function addSubMenu() {  
    getCurrentItem().after('<ul id="subtitles" class="hidden-xs">');
    $('h2').each(function() {          
      var htmlStringToAppend = '<li class="subtitle"><a href="#' + $(this).attr("id") + '">' + $(this).text() + '</a></li>';
      $('#subtitles').append(htmlStringToAppend);      
    });
    $('.subtitle:last').after('</ul>');
		
		//Scrollspy
  	$('body').scrollspy();
  	$('body').data('bs.scrollspy').selector = "#sidebar ul ul li > a";
  	$('body').scrollspy('refresh');

		var scrollMenu = function () {
			var marginTop = 0, activeElement = $('#sidebar li .active a')[0], navHeight = $("#navigation").innerHeight(), topHeight = $("#top-navbar").innerHeight();
			if (activeElement && activeElement != $('#sidebar ul ul li > a:first')[0] && (navHeight + topHeight) > $(window).height()) {
				marginTop = activeElement.getBoundingClientRect().y - $('#navigation')[0].getBoundingClientRect().y - 100;
			}
			$("#sidebar>ul").css('margin-top', "-" + marginTop +'px'); 
		};
		$('#sidebar').on('activate.bs.scrollspy', scrollMenu);
		scrollMenu();    
}
    
function getCurrentItem() {
  var pageName;
  if ($("[data-menuitem]").length > 0) {
    pageName = $("[data-menuitem]").attr("data-menuitem");
  } else {
    pageName = (window.location.pathname).split("/").pop().split(".")[0];
  }
  if (pageName) {
        return $(".navbar-nav").find("#" + pageName);
  } else {
    return false;
  }
}
