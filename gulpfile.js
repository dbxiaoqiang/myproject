var gulp = require('gulp');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
var istanbul = require('gulp-istanbul');
gulp.task('compile', function() {
    return gulp.src(['**/*.ts','!node_modules/**/*.ts'])
        .pipe(ts({
            module: 'commonjs',
            target: 'es2015',
            noImplicitAny: false,
            sourceMap: false,
            outDir: 'dist/src'
        }))
        .pipe(gulp.dest('dist')); 
});
gulp.task('pre test', ['compile'], function () {
    return gulp.src(['dist/src/*.js'])
        .pipe(istanbul())
        .pipe(istanbul.hookRequire());
});
gulp.task('ut test', ['pre test'], function() {
    return gulp.src('dist/spec/*.js')
        .pipe(jasmine())
        .pipe(istanbul.writeReports());
});
gulp.task('default', ['ut test']);