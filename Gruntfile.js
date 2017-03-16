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
        imagemin: { 
            all: { 
                options: { 
                    optimizationLevel: 7
                },
                files: [{
                	expand: true, 
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
