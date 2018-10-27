'use strict'

var gulp = require('gulp')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')
var cssmin = require('gulp-cssmin')

gulp.task('compile', function() {
	return gulp.src('./src/*.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie > 8']
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('./dist'))
})

gulp.task('copyfont', function() {
	return gulp.src('./src/fonts/**')
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/fonts'))
})

gulp.task('build', ['compile', 'copyfont'])
