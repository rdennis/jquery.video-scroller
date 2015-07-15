var gulp = require('gulp');
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');

// var packageInfo = require('./package.json');

var i = 0;

gulp.task('ts', function(){
	return gulp.src('src/*.ts')
		.pipe(plumber())
		.pipe(ts({
			declarationFiles: false
		}))
		//.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});

gulp.task('script', function(){
    return gulp.src('src/*.js')
        .pipe(plumber())
		// .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
    gulp.watch('src/**/*.js', ['script']);
	gulp.watch('src/**/*.ts', ['ts']);
});

gulp.task('default', ['ts', 'script', 'watch']);