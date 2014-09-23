var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var map = require('map-stream');

var errorReporter = function () {
    return map(function (file, cb) {
        if (!file.jshint.success) {
            process.exit(1);
        }
        cb(null, file);
    });
};


gulp.task('default', function () {
    gulp.src('js/test.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(errorReporter());
});
