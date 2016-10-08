module.exports = function(grunt) {
  grunt.initConfig({

    browserify: {
      dist: {
        files: {
          'assets/js/main.bundle.js': ['assets/js/main.js']
        }
      }
    },

    uglify: {
      build: {
        src: 'assets/js/main.bundle.js',
        dest: 'assets/js/main.min.js',
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/stylesheets/main.css': 'assets/scss/main.scss'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'assets/stylesheets/main.min.css': ['assets/stylesheets/main.css']
        }
      }
    },


    watch: {
      css: {
        files: ['assets/scss/*/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          interrupt: true,
        },
      },
      js: {
        files: ['assets/js/main.js'],
        tasks: ['browserify', 'uglify'],
        options: {
          interrupt: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['watch', 'browserify', 'uglify', 'sass', 'cssmin']);
};
