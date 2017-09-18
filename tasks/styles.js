var liveReload = require('gulp-livereload'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('./config').config;

config.build_path_css = config.build_path + '/css';
config.build_vendor_path_css = config.build_path_css;
config.vendor_path_css = [
    config.bower_path + '/reset-css/reset.css'
]

gulp.task('copy-styles', function(){
    return gulp
        .src([
            config.assets_path + '/css/**/*.scss'
    ])
    .pipe(sass({
        outputStyle: 'expanded' //compressed, expanded
    }))
    .pipe(gulp.dest(config.build_path_css))
    .pipe(liveReload());

    gulp
        .src(config.vendor_path_css)
        .pipe(gulp.dest(config.build_vendor_path_css))
        .pipe(liveReload());
});
