
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["super-awesome-docs/docs.html#grunt-beautiful-docs"] = "grunt-beautiful-docs";
index.add({
    url: "super-awesome-docs/docs.html#grunt-beautiful-docs",
    title: "grunt-beautiful-docs",
    body: "# grunt-beautiful-docs  "
});

documentTitles["super-awesome-docs/docs.html#installation"] = "Installation";
index.add({
    url: "super-awesome-docs/docs.html#installation",
    title: "Installation",
    body: "## Installation  ```js npm install grunt-beautiful-docs ```"
});


