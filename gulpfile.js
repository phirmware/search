// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
// Concatenate JS Files
gulp.task('scripts', function () {
    return gulp.src('*.js')
        .pipe(concat('main.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function () {
    // Watch .js files
    gulp.watch('*.js', ['scripts']);
});


// Default Task
gulp.task('default', ['scripts','watch']);