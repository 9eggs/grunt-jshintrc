module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        jshint: {

            files: [
                'Gruntfile.js',
                'scripts/src/*.js',
                '!scripts/lib/*.js'
            ],

            options: grunt.file.readJSON('.jshintrc')
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('jshinting', ['jshint']);
};
