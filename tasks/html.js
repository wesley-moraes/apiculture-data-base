var liveReload = require('gulp-livereload'),
    gulp = require('gulp'),
    config = require('./config').config;

config.build_path_html = config.build_path + '/views';

gulp.task('copy-html', function(){
    gulp.
        src([
            config.assets_path + '/js/views/**/*.html'
        ])
        .pipe(gulp.dest(config.build_path_html))
        .pipe(liveReload());
});
