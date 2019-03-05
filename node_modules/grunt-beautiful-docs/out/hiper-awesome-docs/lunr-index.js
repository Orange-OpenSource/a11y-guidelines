
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["hiper-awesome-docs/changelog.html#an-awesome-changelog"] = "An awesome changelog";
index.add({
    url: "hiper-awesome-docs/changelog.html#an-awesome-changelog",
    title: "An awesome changelog",
    body: "# An awesome changelog  "
});

documentTitles["hiper-awesome-docs/changelog.html#version-010"] = "Version 0.1.0";
index.add({
    url: "hiper-awesome-docs/changelog.html#version-010",
    title: "Version 0.1.0",
    body: "## Version 0.1.0"
});


