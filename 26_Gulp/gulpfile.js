const gulp = require('gulp');
const sass = require('gulp-sass');

// Hacemos una tarea con gulp.task
// On error nos permite mostrar los errores que pueda generar sass
// Dest indica donde guardara lo compilado
gulp.task('sass', async () => {
	return gulp.src('./src/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('./dist/'));
});

// Para que gulp compile cada que detecte un cambio usamos watch
gulp.task('watch', async () => {
	gulp.watch('./src/sass/*.sass', gulp.series('sass'));
});