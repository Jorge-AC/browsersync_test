var gulp = require('gulp');
var compassImagehelper = require('gulp-compass-imagehelper');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('compass-imagehelper', function () {
    return gulp.pipe(compassImagehelper({

            images_path: 'images/',
            css_path: 'css/'
        }))
        .pipe(gulp.dest('sass'));
});



