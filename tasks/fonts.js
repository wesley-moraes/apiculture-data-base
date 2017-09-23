var liveReload = require('gulp-livereload'),
    gulp = require('gulp'),
    config = require('./config').config;

config.build_path_font = config.build_path + '/fonts';
config.build_vendor_path_font = config.build_path_font;
config.vendor_path_font = [
    config.bower_path + '/font-awesome/fonts/*'
];

gulp.task('copy-fonts', function(){
    gulp
        .src(config.vendor_path_font)
        .pipe(gulp.dest(config.build_vendor_path_font))
        .pipe(liveReload());
});
