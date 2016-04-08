import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';
import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';

const basePath = './',
  srcPath = 'es6/',
  dstPath = 'es5/',
  ignoreFolders = [
    '.bin',
    '.git',
    '_conf',
    '_examples',
    'lib',
    'node_modules'
  ];

/**
 * Get names of all the folders within `dir` that are not on the `ignoreFolders` list.
 * @param  String dir Base path, to be searched for folders
 */
function getFolders (dir) {

  return fs.readdirSync(dir)
    .filter(function (file) {

      return (
        ignoreFolders.indexOf(file) === -1 &&
        fs.statSync(path.join(dir, file)).isDirectory()
      );

    });

}

gulp.task('buildComponents', () => {

  // if `--module modulename` is passed, only that module will be built;
  // otherwise, all the modules will be built.
  let folderNames = util.env.module ? [ util.env.module ] : getFolders(basePath);

  // build components
  folderNames.forEach(folder => {

    rimraf(path.join(basePath, folder, dstPath), () => {

      gulp.src(path.join(basePath, folder, srcPath, '**/*'))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.join(basePath, folder, dstPath)));

    });

  });

});

gulp.task('watch', () => {

  // TODO: only rebuild the dirty components (does gulp cache builds and take care of this for us?)
  gulp.watch(path.join(basePath, '**', srcPath, '**/*'), ['buildComponents']);

});

gulp.task('dev', ['buildComponents', 'watch']);
gulp.task('build', ['buildComponents']);
gulp.task('default', ['dev']);
