var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoPreFixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('minify', function(){
    gulp.src('js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('processCSS', function(){
    gulp.src('styles/main.css')
    .pipe(autoPreFixer({
        browsers: ['last 2 versions'],
        cascade: false,
    }))
    .pipe(gulp.dest('build'))
});

gulp.task('default', ['minify', 'processCSS']);

gulp.task('watch', function() {
    gulp.watch('styles/*.css', ['processCSS']);
    gulp.watch('js/*.js', ['minify']);
});

gulp.task('serve', function(){
    browserSync.init({
        server: '.',
        port: 3000
    });
    gulp.watch('styles/*css', ['processCSS']).on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// TODO 6.3a - include browserSync

// TODO 4.2 - uglify / minify JavaScript

// TODO 6.1 - add default tasks

// TODO 6.2 - watch files

// TODO 6.3b - run a local server
