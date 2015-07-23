module.exports = function (grunt) {
	//Описание конфигурации
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['./js/**/*.js', '!./js/cats.gen.js'],
				tasks: ['jshint', 'concat:cats']
			}
		},
		//Sample concat
		concat: {
			cats: {
				src: ['./js/cats/**/*.js', '!./js/cats/cats.gen.js'],
				dest: './js/cats.gen.js'
			}
		},
		//Sample jshint
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'js/**/*.js',
				'!js/**/*.gen.js'
			]
		},
	});
	//Подгружаем необходимые плагины
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	//Регистрируем задачу
	grunt.registerTask('default', 'watch'); //вызывается по-умолчанию
}