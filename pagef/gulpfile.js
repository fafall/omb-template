var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    stylish = require('jshint-stylish'),
    jshint = require('gulp-jshint'),
    w3cjs = require('gulp-w3cjs'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    path = require('path');

var env,
    jsSources,
    sassSources,
    htmlSources,
    outputDir,
    htmlDest,
    sassStyle;

env = 'development';



if (env==='development') {
  outputDir = 'dest/development/';
  sassStyle = 'expanded';
} else {
  outputDir = 'dest/production/';
  sassStyle = 'compressed';
}

jsSources = [
  'src/scripts/jqloader.js',
  'src/scripts/TweenMax.min.js',
  'src/scripts/jquery.scrollmagic.min.js',
  'src/scripts/script.js'
];
sassSources = ['src/sass/style.scss'];
htmlSources = [outputDir + '*.html'];

gulp.task('js', function() {
  'use strict';

  gulp.src('src/scripts/script.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));

  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .on('error', gutil.log)
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(outputDir + 'assets/js'))
    .pipe(connect.reload());
});

gulp.task('jsCustom', function() {
  'use strict';

  gulp.src('src/scripts/my-script.js')
  .pipe(gulp.dest(outputDir + 'assets/js'))
    .pipe(connect.reload());
});


gulp.task('compass', function() {
  'use strict';
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'src/sass',
      css: outputDir + 'assets/css',
      image: outputDir + 'assets/images',
      style: sassStyle,
      sourcemap: true,
      require: ['susy', 'breakpoint']
    })
    .on('error', gutil.log))
//    .pipe(gulp.dest( outputDir + 'css'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  'use strict';
  gulp.watch(jsSources, ['js']);
  gulp.watch(['src/sass/*.scss', 'src/sass/*/*.scss'], ['compass']);
  gulp.watch('dest/*.html', ['html']);
});

gulp.task('connect', function() {
  'use strict';
  connect.server({
    root: outputDir, //racine projet
    livereload: true
  });
});

gulp.task('html', function() {
  'use strict';

   gulp.src('dest/development/*.html')

    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(connect.reload());
});

gulp.task('copyhtml', function() {
  'use strict';

    gulp.src('src/*.html')
   .pipe(gulp.dest(outputDir))
   .pipe(connect.reload());
});

// Copy images to production
gulp.task('move', function() {
  'use strict';
  gulp.src('dest/development/images/**/*.*')
  .pipe(gulpif(env === 'production', gulp.dest(outputDir+'images')));
});

gulp.task('default', ['watch', 'copyhtml', 'html', 'js', 'jsCustom', 'compass', 'move', 'connect']);
