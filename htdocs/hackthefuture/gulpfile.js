var gulp        = require('gulp')
var jshint      = require('gulp-jshint');
var prompt      = require('gulp-prompt');
var cache       = require('gulp-cached');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var prefix      = require('gulp-autoprefixer');
var nodemon     = require('gulp-nodemon');

var del         = require('del');
var through     = require('through2');
var bSync       = require('browser-sync');

var isProd = false;

var noop = function() {
  return through.obj();
}

var dev = function(task) {
  return isProd ? noop() : task;
}

gulp.task('clean', (done) => {
  del(['dist']).then(() => {
    done();
  });
});

gulp.task('lint', () => {
  return gulp.src(['config/**/*.js', 'models/**/*.js', 'routes/**/*.js', 'public/javascripts/**/*.js, app.js'])
    .pipe(cache('linting'))
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('nodescripts', gulp.series('lint', () => {
  return gulp.src(['bin/**/*', 'config/**/*.js', 'models/**/*.js', 'routes/**/*.js', 'app.js'], { base: './' })
    .pipe(gulp.dest('dist'));
}));

gulp.task('scripts', gulp.series('lint', () => {
  return gulp.src('public/javascripts/**/*.js')
    .pipe(dev(sourcemaps.init()))
    .pipe(uglify())
    .pipe(dev(sourcemaps.write()))
    .pipe(gulp.dest('dist/public/javascripts'));
}));

gulp.task('views', () => {
  return gulp.src('views/**/*.ejs', { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('public/images/**/*.*', { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('nodemon', (done) => {
  var called = false;
  return nodemon({
    script: 'dist/bin/www',
    ext: '*.js *.ejs'
  })
    .on('start', function onStart() {
      if (!called) {
        called = true;
        done();
      }
    })
    .on('restart', function onRestart() {
      setTimeout(function reload() {
        bSync.reload({
          stream: false
        });
      }, 500);
    });
});

gulp.task('browsersync',
  gulp.parallel('nodemon',
  (done) => {
    bSync.init({
      public: ['dist/**/*.*'],
      proxy: 'http://localhost:3000',
      port: 4000
    });

    done();
  }));

gulp.task('default',
  gulp.series('clean',
    gulp.parallel('nodescripts', 'scripts', 'views', 'images'),
    'browsersync',
    () => {
      gulp.watch('public/javascripts/**/*.js', gulp.parallel('scripts'));
      gulp.watch('views/**/*.ejs', gulp.parallel('views'));
      gulp.watch('public/images/**/*.*', gulp.parallel('images'));
      gulp.watch(['bin/**/*', 'config/**/*.js', 'models/**/*.js', 'routes/**/*.js', 'app.js'], gulp.parallel('nodescripts'));
      gulp.watch('dist/**/*', bSync.reload);
    }));

//TODO change this task
gulp.task('configure', () => {
  return gulp.src('readme.md')
    .pipe(prompt.prompt({
        type: 'checkbox',
        name: 'bump',
        message: 'What type of bump would you like to do?',
        choices: ['patch', 'minor', 'major']
    }, function(res){
        //value is in res.bump (as an array)
        console.log(res.bump);
    }));
});

//TODO change this task
gulp.task('generate',
  gulp.series(() => { isProd = true; },
  'configure'));
