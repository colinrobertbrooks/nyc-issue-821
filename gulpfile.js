const gulp = require("gulp");
const es = require("event-stream");
const rename = require("gulp-rename");

const testDir = "./test";

gulp.task("copyCodeCoverage", done => {
  es.merge([
    // unit
    gulp
      .src(`${testDir}/jasmine/coverage/coverage-final.json`)
      .pipe(rename("unit.json"))
      .pipe(gulp.dest(`${testDir}/coverage/.nyc_output`)),
    // integration
    gulp
      .src(`${testDir}/jest/coverage/coverage-final.json`)
      .pipe(rename("integration.json"))
      .pipe(gulp.dest(`${testDir}/coverage/.nyc_output`))
  ]);
  done();
});
