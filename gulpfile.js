var gulp = require('gulp'),
    less = require('gulp-less'),
    minify = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var path = './assets/';

gulp.task('js', function () {
    return gulp.src(path + 'modal.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(path));
});

gulp.task('less', function () {
    return gulp.src(path + 'modal.less')
        .pipe(rename({suffix: '.min'}))
        .pipe(less())
        .pipe(minify({keepSpecialComments: 0}))
        .pipe(gulp.dest(path));
});

gulp.task('watch', function () {
    gulp.watch(path + 'modal.js', ['js']);
    gulp.watch(path + 'modal.less', ['less']);
});

gulp.task('default', ['js', 'less', 'watch']); 