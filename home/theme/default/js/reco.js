app = {};

$(document).ready( function () {
  var title = " - " + $("head title").text();
  if ($(".page-title:first").length > 0) {
    title = $(".page-title:first").text() + title;
  } else {
     title = $("h1:first").text() + title;
  }

  // Mise à jour du titre de la page
  $("head title").text(title);
  document.title = title;

  var resize = function () {
    window.setTimeout( function () {
      $("#left-navigation").innerWidth($("#sidebar").innerWidth()-10);
    }, 100);
  }
  resize();
  $(window).resize(function(){resize();});

  // Fill left navigation menu
  $("#navigation").clone(true).attr("id", "left-navigation").appendTo("#sidebar");

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
    $("#left-navigation").addClass("highlight-zone");
  });

  $("#skip-nav").on("blur mouseleave", function () {
    $("#left-navigation").removeClass("highlight-zone");
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
  hljs.initHighlightingOnLoad();

  // Ajout d'ancres sur les titres
  $("h1, h2" ).wrapInner(function () {
   return '<a tabindex="-1" role="presentation" class="anchor" href="#' + $(this).attr("id") + '"></a>';
  });

  if (window.location.search.indexOf('print') !== -1) {
    return window.print();
  }

  // Lien retour en haut de page
  $(window).scroll(function () {
    if (app.scrollTimer) {
      window.clearTimeout(app.scrollTimer);
    }
    app.scrollTimer = window.setTimeout(function () {
      if ($(this).scrollTop() > 50) {
          $('#back-to-top').fadeIn();
            $('#back-to-top').tooltip('show');
      } else {
          $('#back-to-top').fadeOut();
          $('#back-to-top').tooltip('hide');
      }
    }, 500);
  });

  // Déplacement du focus à l'affichage du formulaire de recherche
  $('#searchbar').on('shown.bs.collapse', function() {
    $("#search").focus();
  });

  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
  });

  if ($("li .subtitle").length == 0) { // if no submenu displayed
    $(window).on("scroll", function(){    
      var marginTop = 0, windowHeight = $(window).height(), navHeight = $("#left-navigation").innerHeight(), topHeight = $("#top-navbar").innerHeight();

      if (navHeight + topHeight > windowHeight) {
        marginTop = (navHeight + topHeight) * $(window).scrollTop() / $(document).height();
        if (navHeight + topHeight - marginTop < windowHeight) {
          marginTop = navHeight + topHeight - windowHeight;
        }
      }
      $("#sidebar>ul").css('margin-top', "-" + marginTop +'px');

    });
  }
  
  // list glossary items
  generateGlossaryLinks();
});

function setBreadcrumb(param) {
    param.forEach(function (element, index, array) {
    if (element.url) {
            $(".breadcrumb").append($("<li class=\"breadcrumb-item\"><a href='" + element.url + "'>" + element.label + "</a></li>"));
        } else {
            $(".breadcrumb").append($("<li class=\"breadcrumb-item\">" + element.label + "</li>"));
        }
    });
    $(".breadcrumb li:last").addClass("active");

    if ($(".breadcrumb li a:last").attr('href').split('/').pop() != location.href.split('/').pop()) {
      $(".breadcrumb li a:last").parent().addClass("last");
    }
}

function addSubMenu(subMenus) {
    var currentItem, htmlStringToAppend, itemsQuery, item;
    var collapsible = " onClick='expandCollapse(this)' ";

    currentItem = getCurrentItem().last();
    currentItem.after('<ul class="subtitles" class="hidden-xs">');    

    if (subMenus) {
      subMenus.forEach(function(subMenu) {
        
        var htmlStringToAppend = '<li class="subtitle submenu"><a' + (subMenu.className?' class="' + subMenu.className + '" ':' ') + 'aria-haspopup="true" aria-expanded="' + (subMenu.expanded === true?"true":"false") + '" href="' + (subMenu.url?subMenu.url:"#") + '"'+ (subMenu.url?'':collapsible) +'>' + subMenu.label + '</a></li>';
        
        if (subMenu.expanded === true || !subMenu.url) {
          if (!subMenu.expanded) {
            htmlStringToAppend+="<ul style='display: none;'></ul>";
          } else {
            htmlStringToAppend+="<ul></ul>";
          }
        }

        $('.subtitles').append(htmlStringToAppend);
        
        if (subMenu.onExpand) {
          $(".subtitle a:last").on("expand", subMenu.onExpand);
        }                          

        if (subMenu.expanded === true || !subMenu.url) {          
          itemsQuery = subMenu.itemsQuery?subMenu.itemsQuery:'h2';          
          $(itemsQuery).each(function() {          
            item = '<li class="subtitle"><a href="#' + $(this).attr("id") + '">' + $(this).text() + '</a></li>';
            $(".subtitles ul:last").append(item);
          });
        }        

      });
    }

    currentItem.parent().parent().addClass("autoscroll");
    
    $('.subtitle:last').after('</ul>');

    currentItem.attr("aria-haspopup", "true").attr("aria-expanded", "true");    
}
    
function expandCollapse(el) {
  if ($(el).attr("aria-expanded")==="true") {      
      $(el).parent().next().fadeOut();      
      $(el).attr("aria-expanded", "false");
  } else if ($(el).attr("aria-expanded")==="false") {
      $(el).parent().parent().find("ul").fadeOut()
      $(el).parent().parent().find("a[aria-expanded]").attr("aria-expanded","false");
      $(el).parent().next().fadeIn();
      $(el).trigger("expand");
      $(el).attr("aria-expanded", "true");
  }
}

function getCurrentItem() {
  var pageName;
  if ($("[data-menuitem]").length > 0) {
    pageName = $("[data-menuitem]").attr("data-menuitem");
  } else {
    pageName = (window.location.pathname).split("/").pop().split(".")[0];
  }
  if (pageName) {
        return $(".navbar-nav").find(".page-" + pageName);
  } else {
    return false;
  }
}

/*
  Glossary
*/
var GlossaryTitle = {
  "fr":"Glossaire",
  "en":"Glossary"
};
var Glossary = { // collection of all terms to be defined
  "AIDES TECHNIQUES":{
    "base":"<span lang='fr'>Une aide technique est un matériel ou logiciel utilisé par une personne en situation de handicap destiné à compenser, limiter ou neutraliser la déficience.</span>",
    "fr":""
  },
  "ASSISTIVE TECHNOLOGIES":{
    "base":"<span lang='en'>Assistive technologies are any product or software that is used to increase, maintain, or improve the functional capabilities of people with disabilities. Ergonomic keyboards, screen readers, magnifier and switch devices are examples.</span>",
    "fr":""
  },
  "API":{
    "base":"<span lang='en'>Application Programming Interface</span>",
    "fr":"interface de programmation"
  },
  "ARIA":{
    "base":"<span lang='en'>Accessible Rich Internet Applications</span>",
    "fr":"applications internet riches accessibles"
  },
  "AT":{
    "base":"<span lang='en'>Assistive Technology</span>",
    "fr":"technologie d’assistance"
  },
  "CSS":{
    "base":"<span lang='en'>Cascading Stylesheets</span>",
    "fr":"feuilles de style en cascade"
    },
  "DINSIC":{
    "base":"<span lang='fr'>Direction Interministérielle du Numérique et du Système d’Information et de Communication",
    "en":"French interministry digital and information systems direction"
  },
  "DOM":{
    "base":"<span lang='en'>Document Object Model</span>",
    "fr":"modèle d’objet document"
  },
  "EASE":{
    "base":"<span lang='en'>e-Accessibility Services for Everyone</span>",
    "fr":"service d’accessibilité numérique chez Orange"
  },
  "EULA":{
    "base":"<span lang='en'>End-User Licence Agreement</span>",
    "fr":"contrat utilisateur final"
  },
  "HTML":{
    "base":"<span lang='en'>HyperText Markup Language</span>",
    "fr":"langage de marquage hypertexte",
    },
  "HTML5":{
    "base":"<span lang='en'>HyperText Markup Language version 5</span>",
    "fr":"langage de marquage hypertexte version 5"
    },
  "ID":{
    "base":"<span lang='en'>Identifier</span>",
    "fr":"identifiant"
  },
  "IE":{
    "base":"<span lang='en'>Microsoft Internet Explorer</span>",
  },
  "iOS":{
    "base":"<span lang='en'>Apple’s Operating System for mobile and tablet</span>",
    "fr":"système d’exploitation d’Apple pour mobile et tablette"
  },
  "IP":{
    "base":"<span lang='en'>Internet Protocol</span>",
    "fr":"protocole internet"
  },
  "ISO":{
    "base":"<span lang='en'>International Organization for Standardization</span>",
    "fr":"organisation internationale pour la standardisation"
  },
  "JAWS":{
    "base":"<span lang='en'>Job Access With Speech</span>",
    "fr":"lecteur d’écran"
  },
  "JO":{
    "base":"<span lang='fr'>Journal Officiel</span>",
    "en":"French official journal of laws and regulations"
  },
  "JS":{
    "base":"Javascript",
    },
  "MIT":{
    "base":"<span lang='en'>Massachussetts Institute of Technology</span>",
    "fr":"institut de technologie du Massachussetts"
  },
  "NVDA":{
    "base":"<span lang='en'>NonVisual Desktop Access</span>",
    "fr":"lecteur d’écran"
  },
  "OSX":{
    "base":"<span lang='en'>Apple’s Operating System version 10</span>",
    "fr":"système d’exploitation d’Apple version 10"
  },
  "PC":{
    "base":"<span lang='en'>Personal Computer</span>",
    "fr":"ordinateur personnel"
  },
  "PDF":{
    "base":"<span lang='en'>Portable Document Format</span>",
    "fr":"format de documents portables"
  },
  "RGAA":{
    "base":"<span lang='fr'>Référentiel général d’Accessibilité des Administrations</span>",
    "en":"French Referential for the accessibility of administrations"
    },
  "SDK":{
    "base":"<span lang='en'>Software Development Kit</span>",
    "fr":"kit de développement logiciel"
  },
  "SEO":{
    "base":"<span lang='en'>Search Engine Optimisation</span>",
    "fr":"optimisation pour les moteurs de recherche"
  },
  "SVG":{
    "base":"<span lang='en'>Scalable Vector Graphics</span>",
    "fr":"graphique vectoriel adaptable"
  },
  "TBD":{
    "base":"<span lang='en'>To Be Done</span>",
    "fr":"à faire"
  },
  "TICS":{
    "base":"<span lang='fr'>Technologies de l'Information et de la Communication</span>",
    "fr":""
  },
  "TTS":{
    "base":"<span lang='en'>Text To Speech</span>",
    "fr":"conversion texte vers parole"
  },
  "UI":{
    "base":"<span lang='en'>User Interface</span>",
    "fr":"interface utilisateur"
  },
  "URL":{
    "base":"<span lang='en'>Universal Resource Locator</span>",
    "fr":"emplacement d’une ressource"
    },
  "W3C":{
    "base":"<span lang='en'>World Wide Web Consortium</span>",
    },
  "WAI":{
    "base":"<span lang='en'>Web Accesibility Initiative</span>",
    "fr":"initiative pour l’accessibilité web"
  },
  "WAI-ARIA":{
    "base":"<span lang='en'>Web Accesibility Initiative: Accessible Rich Internet Applications</span>",
    "fr":"applications internet riches accessibles"
  },
  "WCAG":{
    "base":"<span lang='en'>Web Content Accessibility Guidelines</span>",
    "fr":"recommandations d’accessibilité des contenus web"
  },
  "XHTML":{
    "base":"<span lang='en'>eXtensible HyperText Markup Language</span>",
    "fr":"langage de marquage hypertexte extensible",
    },
  "XML":{
    "base":"<span lang='en'>eXtensible Markup Language</span>",
    "fr":"langage de marquage extensible",
  },
  "XPath":{
    "base":"<span lang='en'>XML Path Language</span>",
    "fr":"langage de parcours XML"
  },
};

function generateGlossaryLinks() {
  // find the page's language
  var pagelang = $('HTML').attr('lang');
  // create an object to store the glossary table
  var GlossaryTable = [],
    anchorprefix="glossarytable", // prefix for links
    glossarytext = ""; // text string to generate final HTML
  
  // find all abbreviations
  //$('#content :not(a) abbr').each(function(){
  $('#content :not(a) > abbr').each(function(){
    var $abbr = $(this), text = $abbr.text().toUpperCase(); // storing variable to go faster
    
    if( Glossary[text] ) { // if the innerText of the node is found in Glossary
      var anchor = encodeURI(anchorprefix + text); // anchor that we will link to

      // add a new entry in the glossary table
      if( !Glossary[text]["alreadyset"] ) { // if not set yet
        // generate a string with the definition
        var str = Glossary[text]["base"];
        if(Glossary[text][pagelang]) { // if there is complementary content in the page's language
          str += ", " + Glossary[text][pagelang];
        }

        GlossaryTable.push({
          "dt":text, // key text
          "dd":str, // definition text
          "anchor":anchor
        });
        Glossary[text]["alreadyset"] = true;
      }

      // wrap $abbr in a link to the glossary table entry
      $abbr.wrap($("<a class='abbrlink' href='#" + anchor + "'>"));

      // add a title to the abbr if it doesn't already have one
      if ( !$abbr.attr('title') ) {
        $abbr.attr('title', $(Glossary[text]["base"]).text() );
      }

    }


  });

  // if glossary is empty => exit  
  if (!!!GlossaryTable.length) {    
    return true;
  }

  // generate glossary HTML
  // first, sort result table
  GlossaryTable.sort(function(a, b) {
    var strA = a.dt;
    var strB = b.dt;
    if (strA < strB) {
      return -1;
    }
    if (strA > strB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  // generate glossary text
  for(var i=0; i<GlossaryTable.length; i++) {
    glossarytext += "<dt id='" + GlossaryTable[i]["anchor"] + "'>" + GlossaryTable[i]["dt"] + "</dt>";
    glossarytext += "<dd>" + GlossaryTable[i]["dd"] + "</dd>";
  };
  // append glossary to #content
  var glossarytitle = (GlossaryTitle[pagelang]) ? GlossaryTitle[pagelang] : GlossaryTitle.en;
  glossarytext = "<div id='glossary' role='complementary'><h2>" + glossarytitle + "</h2><dl>" + glossarytext + "</dl></div>";
  $('#content').append(glossarytext);
}