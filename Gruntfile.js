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
				src: ['dev/vendor/js/jquery.min.js', 'dev/vendor/js/underscore.min.js', 'dev/vendor/js/bootstrap.min.js', 'dev/vendor/js/angular.min.js', 'dev/vendor/js/**/*.js'],
				dest: 'dist/js/vendor.min.js'
			},
			sourcecss: {
				src: ['dev/source/css/**/*.css'],
				dest: 'dist/css/app.css'
			},			
			vendorcss: {
				src: ['dev/vendor/css/bootstrap.min.css', 'dev/vendor/css/bootstrap-responsive.min.css','dev/vendor/css/**/*.css'],
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
				files: [{expand: true, cwd:'dev/', src: ['index.html'], dest: 'dist/'}]
			},
			layout: {
				files: [{expand: true, cwd:'dev/', src: ['layout.html'], dest: 'dist/'}]
			},
			images: {
				files: [{expand: true, cwd:'dev/source/img/', src: ['**/*'], dest: 'dist/img/'}]
			},			
			templates: {
				files: [{expand: true, cwd:'dev/source/tmpl/', src: ['**/*'], dest: 'dist/tmpl/'}]
			}

		},

		watch: {
			index: {
				files: ['dev/index.html'],
				tasks: ['copy:index'],
				options: {
      				livereload: true,
      			}
			},
			layout: {
				files: ['dev/layout.html'],
				tasks: ['copy:layout'],
				options: {
      				livereload: true,
      			}
			},
			distindex: {
				files: ['dist/index.html'],
				options: {
      				livereload: true,
      			}				
			},
			images: {
				files: ['dev/source/img/**/*', 'dev/vendor/img/**/*' ],
				tasks: ['copy:images'],
				options: {
      				livereload: true,
      			}
			},
			templates: {
				files: ['dev/source/tmpl/**/*.html'],
				tasks: ['copy:templates'],
				options: {
      				livereload: true,
      			}				
			},			
			sourcejs: {
				files: ['dev/source/js/**/*.js'],
				tasks: ['concat:sourcejs'],
				options: {
      				livereload: true,
      			}				
			},
			vendorjs: {
				files: ['dev/vendor/img/**/*.js'],
				tasks: ['concat:vendorjs'],
				options: {
      				livereload: true,
      			}				
			},
			sourcecss: {
				files: ['dev/source/css/**/*.css'],
				tasks: ['concat:sourcecss', 'cssmin:minify'],
				options: {
      				livereload: true,
      			}				
			},						
			vendorcss: {
				files: ['dev/vendor/css/**/*.css'],
				tasks: ['concat:vendorcss'],
				options: {
      				livereload: true,
      			}				
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