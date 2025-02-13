const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

var scssFiles = 'src/**/*.scss';
var cssFiles = 'css/**/*.css';

var cssPath = './css';
var destPath = './dist';

gulp.task('build', function () {
    return gulp.src(scssFiles)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(cssPath));
});

gulp.task('minify', function () {
    return gulp.src(cssFiles)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename('GovJE.min.css'))
        .pipe(gulp.dest(destPath));
});

gulp.task('default', function () {
    gulp.watch(scssFiles, gulp.series('build'));
    gulp.watch(cssFiles, gulp.series('minify'));
});