const gulp = require('gulp');
const { appHTML } = require('./app.js');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

function servidor(cb){
	return gulp.src('build')
		.pipe(webserver({
			port: 8080,
			open: true,/*abrir o browser*/
			livereload: true
		}));
}

function monitorarArquivos(cb){
	watch('src/**/*.html', () => gulp.series('appHTML')());
	watch('src/**/*.js', () => gulp.series('appJS')());
	watch('src/**/*.scss', () => gulp.series('appCSS')());
	watch('src/assets/imgs/*.*', () => gulp.series('appIMG')());
	return cb();
}

module.exports = {
	servidor, monitorarArquivos
}