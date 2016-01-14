// Add gulp config code here'use strict';

var app = 'app';
var dist = 'dist';

module.exports = {

  app: app,
  dist: dist,

  clean: {
    dist: dist
  },
  scss: {
    src: app + '/scss/**/*.{sass,scss}',
    dest: dist + '/css',
    maps: '../maps',
    errLogToConsole: true,
    options: {
      // place holder for mixins etc...
      // includePaths:
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  browserSync: {
    server: {
      baseDir: [dist],
      directory: true, // enable directory browsing;
      routes: {
        '/bower_components': 'bower_components'
    }
    },
    host: 'localhost',
    port: 3000,
    files: [
      dist + '/css/*.css',
      dist + '/js/*.js',
      dist + '/img/*',
      dist + '/fonts/*'
    ]
  },
  html: {
    src: [
      app + '/html/**/*.html'
    ],
    dest: dist
  },
  images: {
    src: app + '/img/**/*.{jpg,jpeg,png,gif,svg}',
    dest: dist + '/img'
  },
  extras: {
    src: app + '/*.{txt,ico}',
    dest: dist
  },
  scripts: {
    src: app + '/js/**/*.js',
    dest: dist + '/js'
  },
  tags: {
    src: app + '/tags/**/*.tag',
    dest: dist + '/tags'
  },
  watch: {
    html: app + '/html/**/*.html',
    sass: app + '/scss/**/*.scss',
    scripts: app + '/js/**/*.js',
    fonts: app + '/fonts/**/*',
    images: app + '/img/**/*.{jpg,jpeg,png,gif,svg}',
    extras: app + '/*.{txt,ico}'
  },
  usemin: {
    src: dist + '/*.html',
    dest: dist
  }
};
