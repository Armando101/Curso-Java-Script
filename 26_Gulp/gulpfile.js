const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');

// Hacemos una tarea con gulp.task
// On error nos permite mostrar los errores que pueda generar sass
// Dest indica donde guardara lo compilado
gulp.task('sass', async () => {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('style_min', async () => {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass())	// Convierte sass a css
		.pipe(minifyCSS())	// minifica  el codigo
		.pipe(concat('style_main_min.css'))	// concatena todos los archivos sass en uno solo
		.pipe(gulp.dest('./dist/')); // Guarda el css
});

// Para que gulp compile cada que detecte un cambio usamos watch
gulp.task('watch', async () => {
	gulp.watch('./src/sass/*.scss', gulp.series('style_min'));
});
