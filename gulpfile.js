// Gulp plugins
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

// Source and destinations
const styleDist = 'assets/build/css/'
const styleSrc = 'assets/src/styles/style.scss'
const scriptDist = 'assets/build/js/'
const scriptCustomSrc = 'assets/src/scripts/custom.js'
const scriptBasetSrc = [
  'assets/src/scripts/lib/jquery.min.js',
  'assets/src/scripts/lib/bootstrap.bundle.min.js',
  'assets/src/scripts/lib/modernizr.min.js',
  'assets/src/scripts/lib/jquery.cycle2.min.js',
  'assets/src/scripts/lib/jquery.cycle2.carousel.min.js',
  'assets/src/scripts/lib/glightbox.min.js',
  'assets/src/scripts/lib/slick.min.js'
]

/*========================================================== 
    Compile SASS into CSS
==========================================================*/
gulp.task('styles', function () {
  return gulp
    .src(styleSrc)
    .pipe(
      sass({
        outputStyle: 'compressed',
        // outputStyle: 'expanded', // uncomment line for expanded
        errorLogToConsole: true
      })
    )
    .on('error', console.error.bind(console))
    .pipe(cleanCSS()) // comment line for expanded
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(styleDist))
})

/*========================================================== 
    Combine JavaScript Base
==========================================================*/
gulp.task('baseJavascript', function () {
  return gulp
    .src(scriptBasetSrc)

    .pipe(concat('base.min.js'))

    .pipe(uglify())

    .pipe(gulp.dest(scriptDist))
})

/*========================================================== 
    Combine JavaScript Custom
==========================================================*/
gulp.task('customJavascript', function () {
  return (
    gulp
      .src(scriptCustomSrc)

      .pipe(concat('custom.js'))

      // .pipe(uglify())

      .pipe(gulp.dest(scriptDist))
  )
})

// Watch tasks
gulp.task('watch', function () {
  gulp.watch('assets/src/styles/**/*.scss', gulp.series('styles'))
  gulp.watch('assets/src/styles/**/*.css', gulp.series('styles'))
  gulp.watch('assets/src/scripts/**/**/*.js', gulp.series('baseJavascript'))
  gulp.watch('assets/src/scripts/**/*.js', gulp.series('customJavascript'))
  // gulp.watch('assets/src/img/*', gulp.series('images'));
})
