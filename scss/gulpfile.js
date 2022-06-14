var gulp = require('gulp');
var sass = require('gulp-sass');

var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('stylesheets/**/*.scss')
  .pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle: 'compressed'
      }).on('error', gutil.log))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('../css'))  

  //.pipe(gulp.dest('../wordpress/wp-content/themes/drjitendra/css'))
});



gulp.task('watch', function() {
  gulp.watch('stylesheets/**/*.scss', gulp.series('sass'));
});

