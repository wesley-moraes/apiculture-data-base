var liveReload = require('gulp-livereload'),
    gulp = require('gulp'),
    config = require('./config').config;

config.build_path_css = config.build_path + '/css';
/*config.build_vendor_path_css = config.build_path_css;
config.vendor_path_css = [
    config.bower_path + '';
]*/

gulp.task('copy-styles', function(){
    gulp
        .src([
            config.assets_path + '/css/**/*.css'
    ])
    .pipe(gulp.dest(config.build_path_css))
    .pipe(liveReload());
});
