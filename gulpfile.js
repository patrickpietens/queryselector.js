'use strict';

const babel = require('gulp-babel');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const umd = require('gulp-umd');

function onError() {
    notify.onError({ title: 'Compile Error', message: '<%= error.message %>' }).apply(this, arguments);
};

const isProduction = process.env.NODE_ENV === 'production';

gulp.task('default', () => {
    const source = 'src/queryselector.js';
    const destination = 'dist';

    const umdOptions = {
        templateName: 'returnExports',
        exports: (file) => 'queryselector',
    };

    const babelOptions = {
        presets: ['es2015'],
    };

    return gulp.src(source)
        .pipe(babel(babelOptions))
        .pipe(umd(umdOptions)).on('error', onError.bind(this))
        .pipe(gulpif(isProduction, uglify())).on('error', onError.bind(this))
        .pipe(gulp.dest(destination));
});
