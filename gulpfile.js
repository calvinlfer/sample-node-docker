'use strict';
const gulp = require('gulp');
const zip = require('gulp-zip');
const install = require('gulp-install');
const del = require('del');

const files = ['index.js', 'package.json'];

gulp.task('clean', () => {
    return del(['dist']);
});

gulp.task('dist', ['clean'], () => {
    return gulp.src(files, {base: '.'})
        .pipe(gulp.dest('./dist'))
        .pipe(install({ production: true }));
});
