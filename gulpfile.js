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

var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-css-views', function() {
  return gulp.src('src/views/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/views/css'));
});


var minify = require('gulp-minify');
 
gulp.task('compress-js', function() {
  gulp.src('src/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('compress-js-views', function() {
  gulp.src('src/views/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist/views/js'))
});

gulp.task('run', ['minify', 'images', 'images-views', 'minify-css', 'compress-js', 'compress-js-views']);





