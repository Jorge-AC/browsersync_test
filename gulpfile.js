var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('server-start', ['sass'], function(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("sass/**.scss", ['sass']);
    gulp.watch("*.html").on('change', reload);

});
 
gulp.task('sass', function () {
    gulp.src('sass/*.scss')
      .pipe(sass())
      .pipe(plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit('end');
      }}))
      .pipe(gulp.dest('./css'))
      .pipe(reload({stream: true}));
});

gulp.task('default', ['server-start']);
