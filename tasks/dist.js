var fs = require('fs');
var ncp = require('ncp').ncp;
var mkdirp = require('mkdirp');
var Promise = require('promise');

var pNcp = Promise.denodeify(ncp);
var pMkdirp = Promise.denodeify(mkdirp);

// Création de la tache grunt
module.exports = function(grunt) {
    grunt.registerTask('dist', function(target) {        
        var done = this.async();       
              
        if (target) {
            if (target == 'home') {                
                pNcp(target + "/output/html", "output").then(function () {                    
                    return pNcp("./node_modules/boosted/dist", "./output/boosted");
                }).done(
                    function () {                                              
                        grunt.log.writeln("Distribution home copiée dans /output.");
                        done();
                    },
                    function (err) {
                        grunt.log.writeln('Erreur : ', err);
                    }                    
                );                
            } else {
                pMkdirp('output/' + target).then(function () {
                    return pNcp(target + "/output/html", "output/" + target);
                }).done(
                    function () {                                              
                        grunt.log.writeln("Distribution " + target + " copiée dans /output/" + target);
                        done();
                    },
                    function (err) {
                        grunt.log.writeln('Erreur : ', err);
                    }
                );                
            }
        }
    });
};