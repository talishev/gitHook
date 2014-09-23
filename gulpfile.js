var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var map = require('map-stream');
var symlink = require('gulp-symlink');

var errorReporter = function () {
    return map(function (file, cb) {
        if (!file.jshint.success) {
            process.exit(1);
        }
        cb(null, file);
    });
};


gulp.task('lint', function () {
    gulp.src('js/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(errorReporter());
});

gulp.task('hook', function () {
    return gulp.src('pre-commit')
        .pipe(symlink('.git/hooks/', 'pre-commit'));
});
