var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('deploy', function(){
  return gulp.src('semantic/dist/semantic.min.css')
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('../cheeseandburger.github.io/assets/css'))
});