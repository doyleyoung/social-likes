// gruntjs.com
 
/*jshint node:true*/
module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		cmpnt: grunt.file.readJSON('../bower.json'),
		banner: '/*! Social Likes v<%= cmpnt.version %> by Artem Sapegin - ' +
				'http://sapegin.github.com/social-likes - Licensed MIT */\n',
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			files: ['social-likes.js']
		},
		jscs: {
			options: {
				config: ".jscs.json"
			},
			files: ['<%= jshint.files %>']
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: 'social-likes.js',
				dest: '../social-likes.min.js'
			}
		},
	});

	grunt.registerTask('default', ['jshint', 'jscs', 'uglify']);
	grunt.registerTask('build', ['uglify']);

};
