var liveReload = require('gulp-livereload'),
    gulp = require('gulp'),
    config = require('./config').config;

gulp.task('watch-dev', function(){

    liveReload.listen();
    gulp.start('copy-html', 'copy-styles', 'copy-scripts');
    gulp.watch(config.assets_path + '/**', [
        'copy-html', 'copy-styles', 'copy-scripts'
    ]);
});
