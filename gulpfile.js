/* global require */

( ( console ) => {
  "use strict";

  const bower = require( "gulp-bower" ),
    bump = require( "gulp-bump" ),
    cleanCSS = require( "gulp-clean-css" ),
    del = require( "del" ),
    eslint = require( "gulp-eslint" ),
    gulp = require( "gulp" ),
    gulpif = require( "gulp-if" ),
    uglify = require( "gulp-uglify" ),
    htmlMinifier = require( "gulp-html-minifier" ),
    htmlreplace = require( "gulp-html-replace" ),
    HtmlSplitter = require( "polymer-build" ).HtmlSplitter,
    mergeStream = require( "merge-stream" ),
    PolymerProject = require( "polymer-build" ).PolymerProject,
    project = new PolymerProject( {
      fragments: [ "rise-storage.html" ]
    } ),
    rename = require( "gulp-rename" ),
    runSequence = require( "run-sequence" ),
    wct = require("web-component-tester").gulp.init(gulp); // eslint-disable-line

  function optimize( src ) {
    const htmlSplitter = new HtmlSplitter();

    return src
        .pipe( htmlSplitter.split() )
        .pipe( gulpif( /\.js$/, uglify() ) )
        .pipe( gulpif( /\.css$/, cleanCSS() ) )
        .pipe( gulpif( /\.html$/, htmlMinifier( { removeComments: true } ) ) )
        .pipe( htmlSplitter.rejoin() );
  }

  gulp.task( "clean", function( cb ) {
    del( [ "./dist/**" ], cb );
  } );

  gulp.task( "lint", () => {
    return gulp.src("./*.html")
      .pipe( eslint() )
      .pipe( eslint.format() )
      .pipe( eslint.failAfterError() );
  } );

  gulp.task( "version", () => {
    let pkg = require( "./package.json" );

    gulp.src( "./rise-storage.html" )
      .pipe( htmlreplace( {
        "version": {
          src: pkg.version,
          tpl: "<script>var storageVersion = \"%s\";</script>"
        }
      }, { keepBlockTags: true } ) )
      .pipe( gulp.dest( "./" ) );
  } );

  gulp.task( "deploy-unminified", [ "clean" ], () => {
    return mergeStream( gulp.src( "rise-storage.html" ), project.dependencies() )
      .pipe( project.bundler() )
      .pipe( gulp.dest( "dist" ) );

  } );

  gulp.task( "deploy-minified", () => {
    return optimize( gulp.src( "dist/rise-storage.html" ) )
      .pipe( rename( "rise-storage.min.html" ) )
      .pipe( gulp.dest( "dist" ) );
  } );

  gulp.task( "remove-bower", ( cb ) => {
    del( [ "./dist/*bower_components*" ], cb );
  } );

  // ***** Primary Tasks ***** //
  gulp.task( "bower-clean-install", [ "clean-bower" ], ( cb ) => {
    return bower().on( "error", ( err ) => {
      console.log( err );
      cb();
    } );
  } );

  gulp.task( "bump", () => {
    return gulp.src( [ "./package.json", "./bower.json" ] )
      .pipe( bump( { type: "patch" } ) )
      .pipe( gulp.dest( "./" ) );
  } );

  gulp.task( "test", ( cb ) => {
    runSequence( "test:local", cb );
  } );

  gulp.task( "build", [ "version" ], ( cb ) => {
    runSequence( "lint", "deploy-unminified", "deploy-minified", "remove-bower", cb );
  } );

  gulp.task( "default", [], () => {
    console.log( "********************************************************************".yellow );
    console.log( "  gulp bower-clean-install: delete and re-install bower components".yellow );
    console.log( "  gulp bump: increment the version".yellow );
    console.log( "  gulp test: run unit and integration tests".yellow );
    console.log( "  gulp build: build component".yellow );
    console.log( "********************************************************************".yellow );
    return true;
  } );

} )( console );
