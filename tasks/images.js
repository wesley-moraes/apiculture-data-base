var liveReload = require('gulp-livereload'),
    gulp = require('gulp'),
    config = require('./config').config;

config.images_vendor_path = config.assets_path + '/img/*';

gulp.task('copy-images', function(){
    gulp
        .src([
            config.images_vendor_path
        ])
        .pipe(gulp.dest(config.build_path + '/images'))
        .pipe(liveReload());
})
