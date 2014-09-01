module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ["css/*.concat.css", "css/*.min.css", "img/build"],
        concat: {
            // 2. Configuration for concatinating files goes here.
            basic: {
                src: [
                    'css/normalize.css',
                    'css/base.css',
                    'css/layout.css',
                    'css/forms.css',
                    'css/tables.css',
                    'css/buttons.css',
                    'css/menus.css',
                    'css/flexslider.css',
                    'css/screen.css' // All CSS in the css folder that are not minified already
                ],
                dest: 'css/screen.concat.css'
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['screen.concat.css'],
                dest: 'css',
                ext: '.min.css'
            }
        },
        rem_to_px: {
            options: {
                baseFontSize: 14,
                removeFontFace: true,
            },
            dist: {
                src: ['css/screen.min.css'],
                dest: 'css/polyfills/rem_fallback.css'
            }
        },
        watch: {
            files: [
                'css/normalize.css',
                'css/base.css',
                'css/layout.css',
                'css/forms.css',
                'css/tables.css',
                'css/buttons.css',
                'css/menus.css',
                'css/flexslider.css',
                'css/screen.css'
            ],
            tasks: ['clean', 'concat', 'cssmin']
        }/*,
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    flatten: true,
                    src: ['*.{png,jpg,jpeg,gif}'],
                    dest: 'img/build'
                }]
            }
        },
        watch: {
            css: {
                files: ['css/*.css'],
                tasks: ['cssmin'],
                options: {
                    livereload: true,
                },
            },
        }*/

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-rem-to-pixels');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean', 'concat', 'cssmin', 'rem_to_px']);

};
