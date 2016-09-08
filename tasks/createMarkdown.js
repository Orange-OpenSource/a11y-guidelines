var fs = require('fs');
var ncp = require('ncp').ncp;
var mkdirp = require('mkdirp');
var Promise = require('promise');

var pNcp = Promise.denodeify(ncp);
var pMkdirp = Promise.denodeify(mkdirp);

// Création de la tache grunt
module.exports = function(grunt) {
    grunt.registerTask('createMarkdown', function(target) {        
        var done = this.async();                
      
        // Create folders
        pMkdirp(target + '/output/markdown').then(function() {
            return pMkdirp(target + '/output/html/images');
        }).then(function() {                    
            // Copie des images 
            return pNcp(target + "/inputs/images", target + "/output/markdown/images")          
        }).then(function() {
            grunt.log.writeln("Images copiées dans " + target + "/output/markdown.");
            // Copie des autres fichiers md
            return pNcp(target + "/inputs/md", target + "/output/markdown");          
        }).then(function() {
            grunt.log.writeln("Fichiés markdown copiés.");            
            // Copie des images dans beautiful (à cause d'un bug de beautifull)
            return pNcp(target + "/inputs/images", target + "/output/html/images");
        }).then(function() {
            grunt.log.writeln("Images copiées dans html/images.");
            // Copie des pages HTML (exemples...)
            return pNcp(target + "/inputs/html/", target + "/output/html/");
        }).done(
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
