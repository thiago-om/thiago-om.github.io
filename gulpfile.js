"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var del = require("del");
var browserSync = require("browser-sync");
var merge = require("merge-stream");
var runSequence = require('run-sequence');
var reload = browserSync.reload;
var bs;
var jpegoptim = require('imagemin-jpegoptim');
var pngquant = require('imagemin-pngquant');
var optipng = require('imagemin-optipng');
var svgo = require('imagemin-svgo');

gulp.task("clean:dev", del.bind(null, ["serve"]));

gulp.task("clean:prod", del.bind(null, ["site"]));

// This will build the site with the production settings
gulp.task("jekyll:dev", $.shell.task("jekyll build"));
gulp.task("jekyll-rebuild", ["jekyll:dev"], function () {
  reload;
});

// Almost identical to the above task, but instead we load in the build configuration
// that overwrites some of the settings in the regular configuration so that you
// don"t end up publishing your drafts or future posts
gulp.task("jekyll:prod", $.shell.task("jekyll build --config _config.yml,_config.build.yml"));

// Compiles the SASS files and moves them into the "assets/stylesheets" directory

gulp.task('styles', function () {
  return gulp.src('src/assets/_sass/style.sass')
    //.pipe($.sourcemaps.init())
    .pipe($.sass({
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'img', // Used by the image-url helper
      errLogToConsole: true}))
    //.pipe($.sourcemaps.write())
    .pipe($.autoprefixer({ browsers: ['last 1 version'] }))
    .pipe(gulp.dest("src/assets/stylesheets"))
    .pipe(gulp.dest("serve/assets/stylesheets"))
    .pipe(reload({stream:true}));
});

// Styles for collections
gulp.task('styles:work', function () {
  return gulp.src('src/_work/**/*.sass')
    //.pipe($.sourcemaps.init())
    .pipe($.sass({
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'assets/images', // Used by the image-url helper
      errLogToConsole: true}))
    //.pipe($.sourcemaps.write())
    .pipe($.autoprefixer({ browsers: ['last 1 version'] }))
    .pipe(gulp.dest("src/_work/"))
    .pipe(gulp.dest("serve/work/"))
    .pipe(reload({stream:true}));
});


// Optimizes the images that exists
gulp.task("images", function () {
  return gulp.src("src/assets/images/**")
    .pipe($.changed("site/assets/images"))
    .pipe(pngquant({quality: '65-80', speed: 4})())
    .pipe(optipng({optimizationLevel: 3})())
    .pipe(jpegoptim({max: 70})())
    .pipe(svgo()())
    .pipe(gulp.dest('site/assets/images'))
    .pipe($.size({title: "images"}));
});

// Optimizes images in work section
gulp.task("images:work", function () {
  return gulp.src("src/_work/**/*.{png,jpg,jpeg,gif,svg}")
    .pipe($.changed("site/work"))
    .pipe(pngquant({quality: '65-80', speed: 4})())
    .pipe(optipng({optimizationLevel: 3})())
    .pipe(jpegoptim({max: 70})())
    .pipe(svgo()())
    .pipe(gulp.dest('site/work'))
    .pipe($.size({title: "images:work"}));
});

// Copy over fonts to the "site" directory
gulp.task("fonts", function () {
  return gulp.src("src/assets/fonts/**")
    .pipe(gulp.dest("site/assets/fonts"))
    .pipe($.size({ title: "fonts" }));
});

// Copy xml and txt files to the "site" directory
gulp.task("copy", function () {
  return gulp.src(["serve/*.txt", "serve/*.xml", "src/CNAME"])
    .pipe(gulp.dest("site"))
    .pipe($.size({ title: "xml & txt" }))
});

// Browser Compatability with Modernizr 3
gulp.task('modernize', function() {
  return gulp.src('src/assets/javascript/*.js')
        .pipe($.modernizr())
        .pipe(gulp.dest('src/assets/javascript'))
});

// Optimizes all the CSS, HTML and concats the JS etc
gulp.task("html", ["styles"], function () {
  var assets = $.useref.assets({searchPath: "serve"});

  return gulp.src('serve/**/*.html')
    .pipe(assets)
    // Concatenate JavaScript files and preserve important comments
    .pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
    // Minify CSS
    .pipe($.if('*.css', $.minifyCss()))
    // Start cache busting the files
    .pipe($.revAll({ ignore: ['.eot', '.svg', '.ttf', '.woff'] }))
    .pipe(assets.restore())
    // Conctenate your files based on what you specified in _layout/header.html
    .pipe($.useref())
    // Replace the asset names with their cache busted names
    .pipe($.revReplace())
    // Minify HTML
    .pipe($.if('*.html', $.htmlmin({
      removeComments: true,
      removeCommentsFromCDATA: true,
      removeCDATASectionsFromCDATA: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: false
    })))
    // Send the output to the correct folder
    .pipe(gulp.dest('site'))
    .pipe($.size({title: 'optimizations'}));
});


// Task to upload your site to your personal GH Pages repo
gulp.task("deploy", function () {
  // Deploys your optimized site, you can change the settings in the html task if you want to
  return gulp.src("./site/**/*")
    .pipe($.ghPages({
      // Currently only personal GitHub Pages are supported so it will upload to the master
      // branch and automatically overwrite anything that is in the directory
      branch: "master"
      }));
});

// Run JS Lint against your JS
gulp.task("jslint", function () {
  gulp.src("./serve/assets/javascript/*.js")
    // Checks your JS code quality against your .jshintrc file
    .pipe($.jshint(".jshintrc"))
    .pipe($.jshint.reporter());
});

// Runs "jekyll doctor" on your site to check for errors with your configuration
// and will check for URL errors a well
gulp.task("doctor", $.shell.task("jekyll doctor"));

// BrowserSync will serve our site on a local server for us and other devices to use
// It will also autoreload across all devices as well as keep the viewport synchronized
// between them.
gulp.task('serve:dev', ['styles', 'styles:work', 'jekyll:dev'], function () {
  bs = browserSync({
    notify: true,
    // tunnel: '',
    server: {
      baseDir: 'serve'
    }
  });
});

// These tasks will look for files that change while serving and will auto-regenerate or
// reload the website accordingly. Update or add other files you need to be watched.
gulp.task("watch", function () {
  gulp.watch(['src/**/*.{md,html,xml,txt,js}'], ['jekyll-rebuild']);
  gulp.watch(['serve/**/*.{md,html,xml,txt,js}'], reload);
  gulp.watch('serve/assets/stylesheets/*.css', reload);
  gulp.watch(['src/assets/_sass/**/*.{scss,sass}'], ['styles']);
  gulp.watch('src/assets/images/**', ['images'], reload);
  // watch for changes in work collection
  gulp.watch('src/_work/**/*.sass', ['styles:work']);
  gulp.watch('src/_work/**/.{png,jpg,jpeg,gif,svg}', ['images:work'], reload);
});

// Serve the site after optimizations to see that everything looks fine
gulp.task('serve:prod', function () {
  bs = browserSync({
    notify: false,
    // tunnel: true,
    server: {
      baseDir: 'site'
    }
  });
});

// Default task, run when just writing "gulp" in the terminal
gulp.task("default", ["serve:dev", "watch"]);

// Checks your CSS, JS and Jekyll for errors
gulp.task("check", ["jslint", "doctor"], function () {
  // Better hope nothing is wrong.
});

// Builds the site but doesn"t serve it to you
gulp.task('build', function(callback) {
  runSequence(['modernize'],
              'jekyll:prod',
              callback);
});

// Builds your site with the "build" command and then runs all the optimizations on
// it and outputs it to "./site"
gulp.task('publish', function(callback) {
  runSequence(['build'],
              ['html', 'copy', 'images', 'images:work', 'fonts' ],
              callback);
});
