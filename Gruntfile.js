module.exports = function(grunt) {
    grunt.config('baseUrl', (function(){      
      return grunt.option('baseUrl') || '';
  })());

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
          all: ['output/*'],
          home: ['home/output/*', 'output/home/*'],
          home_EN: ['home_EN/output/*', 'output/home_EN/*'],

          web: ['web/output/*', 'output/web/*'],
          web_EN: ['web_EN/output/*', 'output/web_EN/*'],

          mobile: ['mobile/output/*', 'output/mobile/*'],
          mobile_EN: ['mobile_EN/output/*', 'output/mobile_EN/*'],

          others: ['others/output/*', 'output/others/*'],
          others_EN: ['others_EN/output/*', 'output/others_EN/*']
        },
        
      
        copy: {
          license: {
            files: [{
              expand: true,
              dot: true,
              cwd: '.',
              dest: 'output/',
              src: [
                'LICENSE.txt',
                'NOTICE.txt'
              ]
            }]
          }         
        },
      
        insert: {
          options: {},
           dev: {
             files: [
              {
               src: "config/config-dev.js",
               dest: "output/js/reco.js",
               match: "app = {};"
              },
              {
               src: "config/config-dev.js",
               dest: "output/exemples/main-script.js",
               match: "app = {};"
              }
            ]
           },
          prod: {
            files: [
              {
               src: "config/config-prod.js",
               dest: "output/js/reco.js",
               match: "app = {};"
              },
              {
               src: "config/config-prod.js",
               dest: "output/exemples/main-script.js",
               match: "app = {};"
              }
            ]
          },
        },

        bfdocs: {
          home: {
            options: {
              title: 'Recommandations accessibilité Orange',
              manifest: 'home/manifest.json',
              dest: 'home/output/html',
              theme: 'home/theme/default',
              baseUrl: grunt.config('baseUrl')
            }
          },
          home_EN: {
            options: {
              title: 'Orange accessibility guidelines',
              manifest: 'home_EN/manifest.json',
              dest: 'home_EN/output/html',
              theme: 'home_EN/theme/default',
              baseUrl: grunt.config('baseUrl')
            }
          },          
          web: {
            options: {
              title: 'Recommandations accessibilité Orange pour le web',
              manifest: 'web/manifest.json',
              dest: 'web/output/html',
              theme: 'web/theme/default',
              baseUrl: grunt.config('baseUrl')
            }
          },
          web_EN: {
            options: {
              title: 'Orange web accessibility guidelines',
              manifest: 'web_EN/manifest.json',
              dest: 'web_EN/output/html',
              theme: 'web_EN/theme/default',
              baseUrl: grunt.config('baseUrl')
            }
          },
          mobile: {
            options: {
              title: 'Recommandations accessibilité Orange pour les mobiles',
              manifest: 'mobile/manifest.json',
              dest: 'mobile/output/html',
              theme: 'mobile/theme/default',
              baseUrl: grunt.config('baseUrl')
            }
          },
          mobile_EN: {
            options: {
              title: 'Orange mobile accessibility guidelines',
              manifest: 'mobile_EN/manifest.json',
              dest: 'mobile_EN/output/html',
              theme: 'mobile_EN/theme/default',
              baseUrl: grunt.config('baseUrl')
            }
          },
          others: {
            options: {
              title: 'Recommandations accessibilité Orange pour les autres plateformes',
              manifest: 'others/manifest.json',
              dest: 'others/output/html',
              theme: 'others/theme/default',
              baseUrl: grunt.config('baseUrl')
            }
          },
          others_EN: {
            options: {
              title: 'Orange accessibility recommendations for other platforms',
              manifest: 'others_EN/manifest.json',
              dest: 'others_EN/output/html',
              theme: 'others_EN/theme/default',
              baseUrl: grunt.config('baseUrl')
            }
          }
        },
        watch: {
          home: {
            files: ['home/theme/**/*', 'home/inputs/**/*', 'home_EN/theme/**/*', 'home_EN/inputs/**/*'],
            tasks: ['home']
          },
          web: {
            files: ['web/theme/**/*', 'web/inputs/**/*', 'web_EN/theme/**/*', 'web_EN/inputs/**/*'],
            tasks: ['web']
          },
          mobile: {
            files: ['mobile/theme/**/*', 'mobile/inputs/**/*', 'mobile_EN/theme/**/*', 'mobile_EN/inputs/**/*'],
            tasks: ['mobile']
          }
        },
        usebanner: {
          bannerCSS: {
            options: {
              position: 'replace',
              replace: true,
              banner: '/*!\n' +
              '* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.\n' +
              '* Copyright (C) 2016  Orange SA\n' +
              '* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/'
            },
            files: {
              src: [ '{,**/}/inputs/{,**/}/*.css']
            }
          },
          bannerJS: {
            options: {
              position: 'replace',
              replace: true,
              banner: '/*!\n' +
              '* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.\n' +
              '* Copyright (C) 2016  Orange SA\n' +
              '* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/'
            },
            files: {
              src: [ '{,**/}/inputs/{,**/}/*.js' ]
            }
          },
          bannerMD: {
            options: {
              position: 'bottom',
              replace: true,
              banner: '<!-- ' +
              ' This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.\n' +
              ' Copyright (C) 2016  Orange SA\n' +
              ' See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->'
            },
            files: {
              src: [ '{,**/}/inputs/{,**/}/*.md' ]
            }
          }
          // DOESNT WORK, DUPLICATE HEADER ,
          // bannerHTML: {
          //   options: {
          //     position: 'replace',
          //     replace: '<head>',        
          //     banner: '<head>\n<!-- ' +
          //     '* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.\n' +
          //     '* Copyright (C) 2016  Orange SA\n' +
          //     '* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->\n'
          //   },
          //   files: {
          //     src: [ '{,**/}/inputs/{,**/}/*.html']
          //   }
          // }          
        }         
    });

    // Tasks load
    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-beautiful-docs');    
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-insert');
            
    grunt.registerTask('build-home', ['clean:home', 'createMarkdown:home', 'bfdocs:home', 'dist:home']);
    grunt.registerTask('build-home_EN', ['clean:home_EN', 'createMarkdown:home_EN', 'bfdocs:home_EN', 'dist:home_EN']);

    grunt.registerTask('build-web', ['clean:web', 'createMarkdown:web', 'bfdocs:web', 'dist:web']);
    grunt.registerTask('build-web_EN', ['clean:web_EN', 'createMarkdown:web_EN', 'bfdocs:web_EN', 'dist:web_EN']);

    grunt.registerTask('build-mobile', ['clean:mobile', 'createMarkdown:mobile', 'bfdocs:mobile', 'dist:mobile']);
    grunt.registerTask('build-mobile_EN', ['clean:mobile_EN', 'createMarkdown:mobile_EN', 'bfdocs:mobile_EN', 'dist:mobile_EN']);

    grunt.registerTask('build-others', ['clean:others', 'createMarkdown:others', 'bfdocs:others', 'dist:others']);
    grunt.registerTask('build-others_EN', ['clean:others_EN', 'createMarkdown:others_EN', 'bfdocs:others_EN', 'dist:others_EN']);

    grunt.registerTask('build-all', ['clean:all', 'copy','build-home', 'build-home_EN', 'build-others', 'build-others_EN', 'build-web', 'build-web_EN', 'build-mobile', 'build-mobile_EN']);

    // Build for dev (default task)
    grunt.registerTask('default', ['build-all', 'insert:dev']);

    // Build for production
    grunt.registerTask('prod', ['build-all', 'insert:prod']);
        
    grunt.registerTask('home', ['build-home', 'build-home_EN', 'watch:home']);
    grunt.registerTask('web', ['build-web', 'build-web_EN', 'watch:web']);
    grunt.registerTask('mobile', ['build-mobile', 'build-mobile_EN', 'watch:mobile']);    
    
};