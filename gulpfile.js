'use strict';
let gulp = require('gulp');
let fs = require("fs");
let browserify = require("browserify");
let babelify = require("babelify");

gulp.task('build', function (cb) {
    return browserify("./src/main.js")
        .transform(babelify, {
            presets: ["es2015", "react"],
            //plugins: ['transform-runtime','transform-es3-member-expression-literals', 'transform-es3-property-literals']
            plugins: ['transform-es3-member-expression-literals', 'transform-es3-property-literals']
        })
        .bundle()
        .pipe(fs.createWriteStream("build/bundle.js"));
});