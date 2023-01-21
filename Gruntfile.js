module.exports = function (grunt) {
  const sass = require('node-sass')
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'build/css/style.css': 'source/sass/style.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['source/sass/**/*.scss'],
        tasks: ['sass:dist']
      }
    }
  })

  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  // grunt.loadNpmTasks('grunt-haml2html');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['sass', 'watch'])
}
