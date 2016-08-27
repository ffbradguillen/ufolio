var  controllersList = [
  'js/controllers/homeController.js',
  'js/controllers/userProfileController.js',
  'js/controllers/registerController.js',
  'js/controllers/loginController.js',
  'js/controllers/contactoController.js',
];

var  servicesList = [
  'js/services/UsuarioService.js',
  'js/services/sharedProperties.js'
];

var gulp = require('gulp');

var concat = require('gulp-concat');
//Controllers
gulp.task('concatControllers', function() {
  return gulp.src(controllersList )
    .pipe(concat('controller-bundle.js'))
    .pipe(gulp.dest('assets/'));
});
//Services
gulp.task('concatServices', function() {
  return gulp.src(servicesList )
    .pipe(concat('service-bundle.js'))
    .pipe(gulp.dest('assets/'));
});

var uglify = require('gulp-uglify');
gulp.task('uglifyControllers', function() {
  return gulp.src(controllersList )
    .pipe(concat('controllers.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});

var sass = require('gulp-sass');
gulp.task('sass', function () {
  return gulp.src('sass/styles.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/'));
});

gulp.task('default', function(){
     gulp.watch('js/**/*.js',['concat']);
});

gulp.task('concat', ['concatControllers', 'concatServices', 'sass']);

