var gulp = require('gulp');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('server-start', ['compass'], function(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("sass/**.scss", ['compass']);
    gulp.watch("*.html").on('change', reload);

});
 
gulp.task('compass', function() {
  gulp.src('sass/*.scss')
  	.pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(compass({
      //config_file: './config.rb',
      css: 'css',
      sass: 'sass'
    }))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['server-start']);
