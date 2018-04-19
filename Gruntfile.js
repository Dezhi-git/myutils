module.exports = function (grunt) {
    grunt.initConfig({
      watch: {
        js: {
          files: [  'app.js',
                    __dirname + '/middleware/*.js',
                     __dirname + '/routes/*.js',
                     __dirname + '/utils/*.js'],  //can use regex to match file
          tasks: ['develop'],
          options: { 
            nospawn: true   //is important !You need to specify nospawn : true in your watch task configuration so that the called tasks run in the same context.
          }
        }
      },
      develop: {
        server: {
          file: 'app.js' //the file to start server
        //   nodeArgs: ['--debug'],            // optional 
        //   args: ['appArg1', 'appArg2'],      // optional 
        //   env: { NODE_ENV: 'development'}      // optional 
        }
      },
      jslint: {
          files: ['app.js']
      }
    });
    [
        'grunt-contrib-watch',
        'grunt-jslint',
        'grunt-develop'
    ].forEach((task)=>{
        grunt.loadNpmTasks(task);
    });
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-jslint');
    // grunt.loadNpmTasks('grunt-develop');
    grunt.registerTask('default', ['develop', 'watch','jslint']);
  };