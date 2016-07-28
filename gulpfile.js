var gulp = require('gulp');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
gulp.task('compile', function() {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            module: 'commonjs',
            target: 'es2015',
            noImplicitAny: false,
            sourceMap: false,
            outDir: 'dist'
        })); 
});
gulp.task('ut test', ['compile'], function() {
    return gulp.src('dist/spec/*.js')
        .pipe(jasmine());
});
gulp.task('default', ['ut test']);