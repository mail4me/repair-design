const gulp = require('gulp');
const minify = require('gulp-minify-css');
const rename  =  require('gulp-rename');
const browserSync = require('browser-sync').create();
gulp.task('hello', function(done) {
  console.log('Привет мир!');
  done();
  });

  // Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});
gulp.task('minify', function() {
  return gulp.src('css/*.css')
  .pipe(minify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./minify.css'));
});
