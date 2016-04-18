import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';
import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import util from 'gulp-util';
import rename from 'gulp-rename';
import sass from 'gulp-sass';

const basePath = './',
  srcPath = 'es6/',
  dstPath = 'es5/',
  toolkitSrcPath = 'index.js',
  toolkitDstPath = 'index-es5.js',
  toolkitScssDstPath = '_style.scss',
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

  // build toolkit (all-components package) if not building only a specific module
  if (!util.env.module) {

    /*
    // concatenate component styles
    // TODO: finish this, not quite working yet
    gulp.src('./!(node_modules)/_style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./_style.scss'));
    */
    
    // transpile toolkit index
    gulp.src(path.join(basePath, toolkitSrcPath))
      .pipe(babel())
      .pipe(rename(toolkitDstPath))
      .pipe(gulp.dest(basePath));

  }

});

gulp.task('watch', () => {

  // TODO: only rebuild the dirty components (does gulp cache builds and take care of this for us?)
  gulp.watch(path.join(basePath, '**', srcPath, '**/*'), ['buildComponents']);

});

gulp.task('dev', ['buildComponents', 'watch']);
gulp.task('build', ['buildComponents']);
gulp.task('default', ['dev']);
