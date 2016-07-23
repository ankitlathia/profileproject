'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		project: {
			app: ['.'],
			assets: ['<%= project.app %>/css'],
			css: ['<%= project.app %>/scss/agency.scss']
		},
		sass: {
			dev: {
				options: {
					style: 'expanded',
					compass: false
				},
				files: {
					'<%= project.assets %>/agency.css':'<%= project.css %>'
				}
			}
		},
		watch: {
			sass: {
				files: '<%= project.app %>/scss/{,*/}*.{scss,sass}',
				tasks: ['sass:dev']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'watch'
	]);

};