module.exports = function () {
    $.gulp.task('copy', function() {
        return $.gulp.src([
            'src/fonts/*.{woff,woff2,ttf}',
            'src/img/**',
            'src/*.html',
            'src/*.ico'
        ], {
            base: 'src'
        })
        .pipe($.gulp.dest('build'));
    });
};