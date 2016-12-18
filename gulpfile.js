var gulp = require('gulp');


var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

var imageop = require('gulp-image-optimization');
 
gulp.task('images', function(cb) {
    gulp.src(['src/img/*.png','src/img/*.jpg','src/img/*.gif','src/img/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist/img')).on('end', cb).on('error', cb);
});

gulp.task('images-views', function(cb) {
    gulp.src(['src/views/images/*.gif','src/views/images/*.jpeg','src/views/images/*.jpg','src/views/images/*.png']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist/views/images')).on('end', cb).on('error', cb);
});

gulp.task('run', ['minify', 'images', 'images-views']);