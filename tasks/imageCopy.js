var fs = require('fs');
var ncp = require('ncp').ncp;
var mkdirp = require('mkdirp');
var Promise = require('promise');

var pNcp = Promise.denodeify(ncp);
var pMkdirp = Promise.denodeify(mkdirp);

// Création de la tache grunt
module.exports = function(grunt) {
    grunt.registerTask('imageCopy', function(target) {        
        var done = this.async();      
        // Copie des images dans beautiful (à cause d'un bug de beautifull)
        pNcp(target + "/inputs/images", target + "/output/html/images").done(
                function () {
                    grunt.log.writeln("Pages HTML copiées.");
                    done();
                },
                function (err) {
                    grunt.log.writeln('Erreur : ', err);
                }
        );
    });
};
