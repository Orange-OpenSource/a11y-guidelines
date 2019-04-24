---
---

var index = lunr(function () {
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

documentTitles["<%= @baseUrl%>exemples/masquage/index.html"] = "Accessible hiding";
index.add({
    url: "<%= @baseUrl%>exemples/masquage/index.html",
    title: "Accessible hiding",
    body: "Elements not visible on the screen but accessible to assistive technology huidden display none visibility sr-only aria-hidden."
});

documentTitles["<%= @baseUrl%>exemples/chatbot/index.html"] = "Chatbot accessibility best practices";
index.add({
    url: "<%= @baseUrl%>exemples/chatbot/index.html",
    title: "Chatbot accessibility best practices",    
    body: "Chatbot accessibility best practices, create an accessible chat bot message skip links"
});