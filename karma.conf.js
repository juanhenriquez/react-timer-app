var webpackConfig = require('./webpack.config');

webpackConfig.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: false,
    frameworks: ['mocha'],
    files: ['src/components/**/*.test.jsx'],
    preprocessors: {
      'src/components/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      captureConsole: true,
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
