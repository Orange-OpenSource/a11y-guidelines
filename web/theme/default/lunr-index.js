---
---

var index = lunr(function () {
    this.use(lunr.fr);
    this.field('body');
    this.ref('url');
});

var documentTitles = {};

<% for file in @manifest.files: %>
<% for section in file.sections: %>
documentTitles["<%= @baseUrl + file.slug %>.html#<%= section.slug %>"] = "<%= section.title.replace(/"/g, '\\"') %>";
index.add({
    url: "<%= @baseUrl + file.slug %>.html#<%= section.slug %>",
    title: "<%= section.title.replace(/"/g, '\\"') %>",    
    body: "<%= section.markdown.replace(/(\r\n|\n|\r)/g, " ").replace(/"/g, '\\"') %>"
});
<% end %>
<% end %>

documentTitles["<%= @baseUrl%>exemples/masquage/index.html"] = "Masquer des éléments de manière accessible";
index.add({
    url: "<%= @baseUrl%>exemples/masquage/index.html",
    title: "Masquer des éléments de manière accessible",
    body: "masquer accessible masquage hidden sr-only aria-hidden lecteur d'écran display:none display none visibility"
});

documentTitles["<%= @baseUrl%>exemples/chatbot/index.html"] = "Exemple de tchat bot accessible";
index.add({
    url: "<%= @baseUrl%>exemples/chatbot/index.html",
    title: "Exemple de tchat bot accessible",    
    body: "chat bot chatbot exemple liens d'évitement skip links message"
});