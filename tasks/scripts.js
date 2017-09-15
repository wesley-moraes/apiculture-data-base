var liveReload = require('gulp-livereload'),
    gulp = require('gulp'),
    config = require('./config').config;

config.bower_path = config.assets_path + '/../bower_components';

config.build_path_js = config.build_path + '/js';
config.build_vendor_path_js = config.build_path_js;
config.vendor_path_js = [
    //Angular
    config.bower_path + '/angular/angular.min.js',
    config.bower_path + '/angular-route/angular-route.min.js',
    config.bower_path + '/angular-animate/angular-animate.min.js'
];

gulp.task('copy-scripts', function(){
    gulp
        .src([
        config.assets_path + '/js/**/*.js'
        ])
        .pipe(gulp.dest(config.build_path_js))
        .pipe(liveReload());

    gulp
        .src(config.vendor_path_js)
        .pipe(gulp.dest(config.build_vendor_path_js + '/../'))
        .pipe(liveReload());

    gulp
        .src(config.assets_path + '/*.js')
        .pipe(gulp.dest(config.build_vendor_path_js + '/../'))
        .pipe(liveReload());
})
