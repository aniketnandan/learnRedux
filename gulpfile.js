var gulp = require('gulp');
var del  = require("del");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require("gulp-watch");
var watchify = require('watchify');

gulp.task("del", function() {
  del("./server/views/build/bundle.js");
});

gulp.task('build', function () {
  var b = browserify({
    debug: true,
    entries: './public/js/components/init.jsx',
    extensions: ['.jsx']
  });

  bundle();

  function bundle() {
    console.log("oops..git");
    b.transform(babelify, {presets: ['react', 'es2015']})
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./server/views/build'));
  }
});


gulp.task("watch", ['dev'], function(){
  var watcher = gulp.watch(['./public/js/components/*.jsx', "./gulpfile.js"]);

  watcher.on('change', function(event) {
    var t = new Date();
    console.log("[" + (t.getHours() - 12) + ":" + t.getMinutes() + ":" + t.getSeconds() + "] there are some changes happend in "+ event.path +", you are having those changes");
  });
});

gulp.task('dev', ['del', 'build'], function () {
    console.log("started...");
})
