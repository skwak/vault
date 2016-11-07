module.exports = function(grunt) {
  grunt.initConfig({

    // browserify: {
    //   dist: {
    //     files: {
    //       'assets/js/main.bundle.js': ['assets/js/main.js']
    //     }
    //   }
    // },
    //
    // uglify: {
    //   build: {
    //     src: 'assets/js/main.bundle.js',
    //     dest: 'assets/js/main.min.js',
    //   }
    // },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/css/main.css': 'src/scss/main.scss'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'build/css/main.min.css': ['build/css/main.css']
        }
      }
    },


    watch: {
      css: {
        files: ['src/*/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          interrupt: true,
        }
      }
      // js: {
      //   files: ['assets/js/main.js'],
      //   tasks: ['browserify', 'uglify'],
      //   options: {
      //     interrupt: true,
      //   }
      // }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['watch', 'uglify', 'sass', 'cssmin']);
};
