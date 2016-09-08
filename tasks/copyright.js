// Tache pour mettre des meta-données copyright sur les images (EXIF, IPTC et XMP)
// Celle-ci créer un fichier copyrightCmd.bat à la racine du projet qu'il faudra executer à la main
// Le fichier .bat utilise la comme exiv2 qui permet de manipuler les meta-données
// Avant d'execute le fichier .bat, il faut installer exiv2 et le déclarer dans le path windows.
// http://www.exiv2.org/download.html

module.exports = function(grunt) {    
    grunt.registerTask('copyright', 'set copyright metadata on image files', function(target) {                
        
        var cmdString = "";                        
        var fs = require('fs');

        // Message à inscrire dans les meta-données
        var copyrightString = 'Copyright (C) 2016 Orange SA All rights reserved';

        // Liste des images à traiter
        var files = grunt.file.read('copyrighted-images.txt').toString().split("\n");

        for (var i in files) {
            var file = files[i];
            cmdString += 'exiv2 -M"set Exif.Image.Copyright ' + copyrightString + ' " ' + file + ' -M"set Iptc.Application2.Copyright ' + copyrightString + ' " ' + file + ' -M"set Xmp.dc.rights ' + copyrightString + ' " ' + file + '\n';
        }

        // Création d'un fichier copyrightCmd.bat à la racine du projet qu'il faudra exécuter à la main
        grunt.file.write("copyrightCmd.bat", cmdString);        
    });
};
