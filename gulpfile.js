var gulp        = require('gulp');
var browserSync = require('browser-sync');
var jade 		= require('gulp-jade');
var reload 		= browserSync.reload;

// or...
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "http://127.0.0.1:8000/"
    });
});

// Jade Task
gulp.task('jade', function() {
  return gulp.src('jade/*.jade')
         .pipe(jade())
         .pipe(gulp.dest('partials'));
});

// Index.html
gulp.task('entrypoint', function() {
	return gulp.src('jade/index.jade')
			   .pipe(jade())
			   .pipe(gulp.dest('./'));
});

// Default task
gulp.task('default', ['browser-sync'], function() {
	gulp.watch('jade/*.jade',['jade', browserSync.reload]);
	gulp.watch('css/*.css', browserSync.reload);
	gulp.watch('jade/index.jade',['entrypoint', browserSync.reload]);
	gulp.watch('*.html', browserSync.reload);
});