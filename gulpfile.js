"use strict";
const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('default', () => {
	return browserify({
		entries: ['./src/index.js'],
		standalone: 'my-react-module'
	})
	.transform(babelify, {
		presets: ['es2015', 'react'],
		plugins: []
	})
	.exclude('react')
	.bundle()
	.on('error', function(e) {
		gutil.log('Error', e);
	})
	.pipe(source('index.js'))
	.pipe(gulp.dest('dist'));
});