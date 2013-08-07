module.exports = function(grunt) {
	
	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),
		
		
		// CONFIGURE TASKS
		concat: {
			sourcejs: {
				src: ['dev/source/js/**/*.js'],
				dest: 'dist/js/app.js'
			},
			vendorjs: {
				src: ['dev/vendor/js/jquery.min.js', 'dev/vendor/js/underscore.min.js', 'dev/vendor/js/bootstrap.min.js', 'dev/vendor/js/angular.min.js'],
				dest: 'dist/js/vendor.min.js'
			},
			sourcecss: {
				src: ['dev/source/css/**/*.css'],
				dest: 'dist/css/app.css'
			},			
			vendorcss: {
				src: ['dev/vendor/css/bootstrap.min.css', 'dev/vendor/css/bootstrap-responsive.min.css'],
				dest: 'dist/css/vendor.min.css'				
			}
		},

		uglify: {
    		options: {
    			banner: '/* 8-Bit Mellow Uberjuju application min.js file | <%= grunt.template.today("mm-dd-yyyy") %> */\n'
  			},
    		sourcejs: {
      			files: {
        			'dist/js/app.min.js': ['dist/js/app.js']
      			}
    		}
  		},

  		cssmin: {
  			add_banner: {
    			options: {
      				banner: '/* 8-Bit Mellow Uberjuju application min.css file | <%= grunt.template.today("mm-dd-yyyy") %> */\n'
    			},
    			files: {
      				'dist/css/app.css': ['dist/css/app.css']
    			}
  			},	
  			minify: {
    			expand: true,
    			cwd: 'dist/css/',
    			src: ['app.css'],
    			dest: 'dist/css/',
    			ext: '.min.css'
  			}
		},


		copy: {
			index: {
				files: [{expand: true, cwd:'dev/source/', src: ['index.html'], dest: 'dist/'}]
			},
			images: {
				files: [{expand: true, cwd:'dev/source/img/', src: ['**'], dest: 'dist/img/'}]
			},			
			templates: {
				files: [{expand: true, cwd:'dev/source/tmpl/', src: ['**'], dest: 'dist/tmpl/'}]
			}

		},

		watch: {
			index: {
				files: ['dev/index.html'],
				tasks: ['copy:index']
			},
			images: {
				files: ['dev/source/img/**/*'],
				tasks: ['copy:images']
			},
			templates: {
				files: ['dev/source/tmpl/**/*'],
				tasks: ['copy:templates']
			},			
			sourcejs: {
				files: ['dev/source/js/**/*'],
				tasks: ['concat:sourcejs']
			},
			vendorjs: {
				files: ['dev/vendor/img/**/*'],
				tasks: ['concat:vendorjs']
			},
			sourcecss: {
				files: ['dev/source/css/**/*'],
				tasks: ['concat:sourcecss', 'cssmin:minify']
			},						
			vendorcss: {
				files: ['dev/vendor/css/**/*'],
				tasks: ['concat:vendorcss']				
			},
			options: {
					livereload: true,
			}
		}
	});

	// LOADED CORE GRUNT-CONTRIB TASKS FROM NPM MODULE
	grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

	// LOAD A CUSTOM TASK
	//grunt.loadTasks("tasks");


	// SETUP THE WORKFLOW
	grunt.registerTask("default", ["concat", "uglify", "cssmin", "copy", "watch"]);

};