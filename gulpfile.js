const { series, parallel } = require('gulp');
const gulp = require('gulp');

const { appHTML, appJS, appCSS, appIMG } = require('./gulpTasks/app.js');
const { depsCSS, depsFonts } = require('./gulpTasks/deps.js');
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor.js');

gulp.task('appHTML', appHTML);
gulp.task('appJS', appJS);
gulp.task('appCSS', appCSS);
gulp.task('appIMG', appIMG);

module.exports.default = series(
	parallel(
		appHTML, appJS, appCSS, appIMG,
		depsCSS, depsFonts
	),
	servidor,
	monitorarArquivos
);