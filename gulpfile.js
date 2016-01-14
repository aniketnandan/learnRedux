var gulp               = require('gulp');
var babel              = require('babelify');
var transform          = require('vinyl-transform');
var browserify         = require('browserify');
var del                = require('del');
var source             = require('vinyl-source-stream');
var rename             = require("gulp-rename");
var fs                 = require("fs");
var bundle             = require("bundle");

gulp.task("clean", function() {
  return del("./views/build/bundle.js");
})

gulp.task("build", ["clean"], function(){
  return browserify({ "entries": ["./public/js/init.js", "./public/js/components/*.jsx"] })
    .transform(babel())
    .bundle()
    .pipe(gulp.dest("./views/build/bundle.js"));
})
