module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            js: {
                files: ['js/*.js'],
                tasks:  ['concat'],
            },
            css: {
                files: ['css/*.css'],
                tasks:  ['concat'],
            }
        },
        imagemin: { // Task
            all: { // Another target

                files: [{
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'dist/' // Destination path prefix
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['imagemin']);
};
