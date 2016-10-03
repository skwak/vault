module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      build: {
        src: 'assets/js/main.js',
        dest: 'assets/js/main.min.js',
      }
    },

    // sass: {
    //   options: {
    //     sourceMap: true
    //   },
    //   dist: {
    //     files: {
    //       'assets/stylesheets/main.css': 'assets/scss/main.scss'
    //     }
    //   }
    // },

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


    // cssmin: {
    //   target: {
    //     files: [{
    //       expand: true,
    //       cwd: 'assets/stylesheets/',
    //       src: ['main.css'],
    //       dest: 'assets/stylesheets/public/main'
    //       ext: '.min.css'
    //     }]
    //   }
    // },
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
        files: ['assets/js/*.js'],
        tasks: ['uglify'],
        options: {
          interrupt: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['watch', 'uglify', 'sass', 'cssmin']);
};
