var gulp = require('gulp')
var sass = require('gulp-sass')
var jsmin = require('gulp-jsmin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
const babel = require('gulp-babel');
gulp.task('css',function(){
	return gulp.src('./add.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cssmin())
    .pipe(gulp.dest('./build'));
})

gulp.task('js',function(){
	return gulp.src('app.js')
	.pipe(babel({
		presets: ['env']
	}))
	.pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build'))
})


gulp.task('default', ['css','js'])