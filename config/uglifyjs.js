const Uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = [
  new Uglifyjs({
    exclude: [ 'node_modules', 'browser_components' ],
    parallel: true,
    uglifyOptions: {
      warning: false,
      parse: {},
      mangle: true,
      output: null,
      toplevel: false,
      nameCache: false,
      ie8: false,
      keep_fnames: true,
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [ 'console.log' ]
      }
    }
  })
];
